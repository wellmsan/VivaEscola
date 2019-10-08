<template>
  <div>
    <GChart type="ColumnChart" :data="data" :options="options"/>
  </div>
</template>
<script>

import { GChart } from "vue-google-charts";

export default {
  name: "ColumnChart",
  components: {
    GChart
  },
  props: {
    data: Array,
    options: Object
  }
}
</script>
