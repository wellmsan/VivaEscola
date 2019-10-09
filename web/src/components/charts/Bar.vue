<template>
  <div>
    <GChart type="BarChart" :data="data" :options="options" />
  </div>
</template>
<script>
import { GChart } from "vue-google-charts";

export default {
  name: "BarChart",
  components: {
    GChart
  },
  props: {
    data: Array,
    options: Object
  }
};
</script>
