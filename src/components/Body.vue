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
        <b-tab title="Update" lazy>
          <UpdateOperationComponent></UpdateOperationComponent>
        </b-tab>
        <b-tab title="Select" lazy>
          <SelectionOperationComponent></SelectionOperationComponent>
        </b-tab>
        <b-tab title="Project" lazy>
          <ProjectionOperationComponent></ProjectionOperationComponent>
        </b-tab>
        <b-tab title="Join" lazy>
          <JoinOperationComponent></JoinOperationComponent>
        </b-tab>
        <b-tab title="Aggr." lazy>
          <AggregationOperationComponent></AggregationOperationComponent>
        </b-tab>
        <b-tab title="Nested Aggr." lazy>
          <NestedAggrOperationComponent></NestedAggrOperationComponent>
        </b-tab>
        <b-tab title="Division" lazy>
          <DivisionOperationComponent></DivisionOperationComponent>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import InsertOperationComponent from "./InsertOperationComponent.vue";
import DeleteOperationComponent from "./DeleteOperationComponent.vue";
import SelectionOperationComponent from "./SelectionOperationComponent.vue";
import ProjectionOperationComponent from "./ProjectionOperationComponent.vue";
import UpdateOperationComponent from "./UpdateOperationComponent.vue";
import JoinOperationComponent from "./JoinOperationComponent.vue";
import AggregationOperationComponent from "./AggregationOperationComponent.vue";
import NestedAggrOperationComponent from "./NestedAggrOperationComponent.vue";
import DivisionOperationComponent from "./DivisionOperationComponent.vue";

export default {
  name: "Body",
  components: {
    InsertOperationComponent,
    DeleteOperationComponent,
    SelectionOperationComponent,
    ProjectionOperationComponent,
    UpdateOperationComponent,
    JoinOperationComponent,
    AggregationOperationComponent,
    NestedAggrOperationComponent,
    DivisionOperationComponent,
  },
};
</script>
