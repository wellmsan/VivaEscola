<template>
  <div>
    <apexchart type="radialBar" height="400" :options="options" :series="data" />
  </div>
</template>
<script>

export default {
  name: "Radialbar",
  props: {
    data: Array,
    options: Object
  }
}
</script>
