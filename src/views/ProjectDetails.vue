<template>
  <div class="project-details">
    project-details-{{this.$route.params.projectName}}
  </div>
</template>

<script>
export default {
  name: 'ProjectDetails',
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* 3 breakpoints, mobile first */

@media only screen and (min-width: 800px) {

}

@media only screen and (min-width: 1200px) {

}

</style>
