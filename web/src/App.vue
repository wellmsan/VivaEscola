<template>
  <div id="container">
    <div id="header"></div>
    <div id="body">
      <SimpleMap />
    </div>
    <div id="footer">
      <Footer/>            
    </div>
  </div>
</template>

<script>
import Footer from "./components/Footer";
import SimpleMap from "./components/SimpleMap";


export default {
  name: "app",
  components: {
    SimpleMap,
    Footer
  },

  data() {
    return {
      currentView: "SimpleMap"
    };
  }
  
};
</script>

<style>
@import "../node_modules/leaflet/dist/leaflet.css";

body {
   margin:0;
   padding:0;
   height:100%;
}

#container {
   min-height:100%;
}

#header {
   background:#ff0;
   height: 60px
}

#body {
   padding: 1vh;
   padding-bottom: 6vh;   /* Height of the footer */
}

#footer {
   position:absolute;
   bottom:0;
   width:100%;
   height:15vh;   /* Height of the footer */
   padding-top: 1vh;
   background:#fff;
}

#map {
  position: absolute;
  overflow-x: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 15vh;
  padding-left: 0;
  border-left: 0 solid;
}

.leaflet-fake-icon-image-2x {
  background-image: url(../node_modules/leaflet/dist/images/marker-icon-2x.png);
}
.leaflet-fake-icon-shadow {
  background-image: url(../node_modules/leaflet/dist/images/marker-shadow.png);
}

.leaflet-popup-content-wrapper{
  width: 200vh;
  height: 80vh;
}

.leaflet-popup-content {
  width: 193vh !important;
}


</style>
