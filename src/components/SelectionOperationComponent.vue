<template>
  <div>
    <div id="selectionForm">
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label="Name:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="number"
            placeholder="Display movie with this name"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary" id="submit">Submit</b-button>
      </b-form>
    </div>
    <div v-if="showError">
      <p id="errorText">{{ errorMessage }}</p>
    </div>
    <div id="selectionTable">
      <b-table striped hover :items="movies"></b-table>
    </div>
  </div>
</template>

<script>
import { getMovies } from "../controllers/MovieController";

export default {
  name: "SelectionOperationComponent",
  data() {
    return {
      movies: [],
      form: {
        name: "",
      },
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
      this.errorMessage = response.reason;
      this.showError = true;
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      this.showError = false;
      const response = await getMovies(null, this.form.name);
      if (response.isSuccess) {
        this.movies = response.data;
      } else {
        this.errorMessage = response.reason;
        this.showError = true;
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