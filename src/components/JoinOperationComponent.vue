<template>
  <div>
    <div>
      <P>
          Movies produced and released in the same countries
      </P>
    </div>
    <div v-if="showError">
      <p id="errorText">{{ errorMessage }}</p>
    </div>
    <div id="joinTable">
      <b-table striped hover :items="movies"></b-table>
    </div>
  </div>
</template>

<script>
import { getMovieJoin } from "../controllers/MovieController";
import { displayError } from "../utils/Helpers";

export default {
  name: "JoinOperationComponent",
  data() {
    return {
      movies: [],
      showError: false,
      errorMessage: "",
    };
  },
  async created() {
    const response = await getMovieJoin();
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