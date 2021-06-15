<template>
  <div>
    <div>
      <P>
          Total number of movies in the database
      </P>
    </div>
    <div v-if="showError">
      <p id="errorText">{{ errorMessage }}</p>
    </div>
    <div id="aggregationResult">
      {{ result }}
    </div>
  </div>
</template>

<script>
import { getNumMovie } from "../controllers/MovieController";
import { displayError } from "../utils/Helpers";

export default {
  name: "AggregationOperationComponent",
  data() {
    return {
      result: 0,
      showError: false,
      errorMessage: "",
    };
  },
  async created() {
    const response = await getNumMovie();
    if (response.isSuccess) {
      this.result = response.data;
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