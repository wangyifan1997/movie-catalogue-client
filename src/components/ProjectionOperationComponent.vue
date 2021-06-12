<template>
  <div>
    <div id="projectionForm">
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group label="Select the columns:">
          <b-form-checkbox-group
            id="checkbox-group-1"
            v-model="selected"
            :options="options"
          ></b-form-checkbox-group>
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
import { displayError, hideError } from "../utils/Helpers";

export default {
  name: "ProjectionOperationComponent",
  data() {
    return {
      movies: [],
      selected: [],
      options: [
        { text: "ID", value: "id" },
        { text: "Name", value: "name" },
        { text: "Revenue", value: "revenue" },
      ],
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
      if (this.selected.length === 0) {
        displayError(this, 'You have to select at least one column');
        return;
      }
      hideError(this);
      const response = await getMovies(this.selected);
      if (response.isSuccess) {
        this.movies = response.data.map((movie) => {
          const movieData = {};
          Object.entries(movie).forEach(([k, v]) => {
            if (v !== null) movieData[k] = v;
          })
          return movieData;
        });
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