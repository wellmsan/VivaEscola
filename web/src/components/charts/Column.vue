<template>
  <div>
    <GChart type="ColumnChart" :data="data" :options="options" />
  </div>
</template>
<script>
import { GChart } from "vue-google-charts";

export default {
  name: "ColumnChart",
  components: {
    GChart
  },

  data() {
    return {
      data: [
        ["Região", "Federal", "Estadual", "Municipal", "Privada"],
        ["Cidade", 1000, 400, 200, 80],
        ["Microrregião", 1170, 460, 250, 20],
        ["Mesorregião", 660, 1120, 300, 40]
      ],
      options: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
  }
};
</script>
