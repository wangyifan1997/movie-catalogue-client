<template>
  <div id="body">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Insert" active>
          <InsertOperationComponent></InsertOperationComponent>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import InsertOperationComponent from "./InsertOperationComponent.vue";

export default {
  name: "Body",
  components: {
    InsertOperationComponent,
  },
};
</script>
