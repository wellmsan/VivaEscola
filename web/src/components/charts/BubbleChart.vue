<template>
  <div>
    <GChart type="BubbleChart" :data="data" :options="options" />
  </div>
</template>
<script>
import { GChart } from "vue-google-charts";

export default {
  name: "BubbleChart",
  components: {
    GChart
  },

  data() {
    return {
      data: [
        ["ID", "X", "Y", "Temperature"],
        ["", 80, 167, 120],
        ["", 79, 136, 130],
        ["", 78, 184, 50],
        ["", 72, 278, 230],
        ["", 81, 200, 210],
        ["", 72, 170, 100],
        ["", 68, 477, 80]
      ],
      options: {
        colorAxis: { colors: ["yellow", "red"] }
      }
    };
  }
};
</script>
