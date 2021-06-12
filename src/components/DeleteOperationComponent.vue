<template>
  <div>
    <div id="deleteForm">
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label="ID:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.id"
            type="number"
            placeholder="Enter ID of the movie you want to delete"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" id="submit">Submit</b-button>
      </b-form>
    </div>
    <div v-if="showError">
      <p id="errorText">{{ errorMessage }}</p>
    </div>
    <div id="deleteTable">
      <b-table striped hover :items="movies"></b-table>
    </div>
  </div>
</template>

<script>
import { getMovies, deleteMovie } from "../controllers/MovieController";
import { displayError, hideError } from "../utils/Helpers";

export default {
  name: "DeleteOperationComponent",
  data() {
    return {
      movies: [],
      form: {},
      show: true,
      showError: false,
      errorMessage: "",
    };
  },
  async created() {
    const response = await getMovies();
    if (response.isSuccess) {
      this.movies = response.data;
    } else {
      displayError(this, response.reason);
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();

      hideError(this);

      const id = parseInt(this.form.id);
      if (isNaN(id)) {
        displayError("id is not a number");
        return;
      }

      if (this.movies.findIndex((movie) => parseInt(movie.id) === id) === -1) {
        displayError(this, 'id does not exist in table')
        return;
      }

      const response = await deleteMovie(parseInt(this.form.id));
      if (response.isSuccess) {
        this.movies = this.movies.filter((movie) => parseInt(movie.id) !== id);
      } else {
        displayError(this, response.reason);
      }
    },
  },
};
</script>

<style scoped>
#submit {
  float: right;
  margin-bottom: 10px;
}
#errorText {
  color: #ff0033;
}
</style>