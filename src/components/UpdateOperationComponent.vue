<template>
  <div>
    <div id="updateForm">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="ID:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.id"
            type="number"
            placeholder="Enter the ID of the movie you want to modify"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter the new name of the movie"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Revenue:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.revenue"
            type="number"
            placeholder="Enter the new revenue of the movie"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" id="submit">Submit</b-button>
        <b-button type="reset" variant="danger" id="reset">Reset</b-button>
      </b-form>
    </div>
    <div v-if="showError">
      <p id="errorText">{{ errorMessage }}</p>
    </div>
    <div id="insertTable">
      <b-table striped hover :items="movies"></b-table>
    </div>
  </div>
</template>


<script>
import { getMovies, updateMovie } from "../controllers/MovieController";
import { displayError, hideError } from '../utils/Helpers';

export default {
  name: "InsertOperationComponent",
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

      const id = parseInt(this.form.id);
      const revenue = parseFloat(this.form.revenue)
      if (isNaN(id)) {
        displayError(this, 'id is not a number');
        return;
      }
      if (isNaN(revenue)) {
        displayError(this, 'revenue is not a number');
        return;
      }

      if (this.movies.findIndex((movie) => parseInt(movie.id) === id) === -1) {
        displayError(this, 'id does not exist in table')
        return;
      }
      hideError(this);

      const params = {
        id,
        name: this.form.name,
        revenue,
      };
      const response = await updateMovie(id, params);
      if (response.isSuccess) {
        const index = this.movies.findIndex((movie) => parseInt(movie.id) === id);
        const newMovies = this.movies.map((movie) => {
          return {...movie};
        });
        newMovies[index] = params;
        this.movies = newMovies;
      } else {
        displayError(this, response.reason);
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.id = 0;
      this.form.name = "";
      this.form.revenue = 0;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
#submit {
  float: right;
  margin-bottom: 10px;
}
#reset {
  float: right;
  margin-right: 10px;
  margin-bottom: 10px;
}
#errorText {
  color: #ff0033;
}
</style>