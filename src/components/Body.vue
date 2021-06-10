<template>
  <div id="body">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Insert" active lazy>
          <InsertOperationComponent></InsertOperationComponent>
        </b-tab>
        <b-tab title="Delete" lazy>
          <DeleteOperationComponent></DeleteOperationComponent>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import InsertOperationComponent from "./InsertOperationComponent.vue";
import DeleteOperationComponent from "./DeleteOperationComponent.vue";

export default {
  name: "Body",
  components: {
    InsertOperationComponent,
    DeleteOperationComponent,
  },
};
</script>
