<template>
  <div>
    <div id="insertForm">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="ID:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.id"
            type="number"
            placeholder="Enter ID"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter the name of the movie"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Revenue:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.revenue"
            type="number"
            placeholder="Enter the revenue of the movie"
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
import { getMovies, createMovie } from "../controllers/MovieController";

export default {
  name: "InsertOperationComponent",
  data() {
    return {
      movies: [],
      form: {
        id: 0,
        name: "",
        revenue: 0,
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
      const payload = {
        id: parseInt(this.form.id),
        name: this.form.name,
        revenue: parseFloat(this.form.revenue),
      };
      const response = await createMovie(payload);
      if (response.isSuccess) {
        this.movies = [...this.movies, response.data];
      } else {
        this.errorMessage = response.reason;
        this.showError = true;
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
