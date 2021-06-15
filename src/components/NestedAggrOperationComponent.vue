<template>
  <div>
    <div>
      <P>
          Average rating of movies across all users
      </P>
    </div>
    <div v-if="showError">
      <p id="errorText">{{ errorMessage }}</p>
    </div>
    <div id="nestedAggrTable">
      <b-table striped hover :items="movies"></b-table>
    </div>
  </div>
</template>

<script>
import { getAvgRating } from "../controllers/UserController";
import { displayError } from "../utils/Helpers";

export default {
  name: "NestedAggrOperationComponent",
  data() {
    return {
      movies: [],
      showError: false,
      errorMessage: "",
    };
  },
  async created() {
    const response = await getAvgRating();
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