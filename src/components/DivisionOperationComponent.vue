<template>
  <div>
    <div>
      <P>
          Find username of users who rated all movies
      </P>
    </div>
    <div v-if="showError">
      <p id="errorText">{{ errorMessage }}</p>
    </div>
    <div id="divisionTable">
      <b-table striped hover :items="movies"></b-table>
    </div>
  </div>
</template>

<script>
import { getUserRateAllMovie } from "../controllers/UserController";
import { displayError } from "../utils/Helpers";

export default {
  name: "DivisionOperationComponent",
  data() {
    return {
      movies: [],
      showError: false,
      errorMessage: "",
    };
  },
  async created() {
    const response = await getUserRateAllMovie();
    if (response.isSuccess) {
      this.movies = response.data;
    } else {
      displayError(this, response.reason);
    }
  },
};
</script>

<style scoped>
#errorText {
  color: #ff0033;
}
</style>