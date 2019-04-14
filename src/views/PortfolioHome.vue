<template>
  <div class="portfolio-home">
    HOME
    <router-link v-for="(project, index) in projects" :key="index" :to="`/projects/${project.name}`">{{project.displayName}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'PortfolioHome',
  props: {},
  data () {
    return {
      projects: [
        {
          name: "azure-blueprints",
          displayName: "Azure Blueprints"
        },
        {
          name: "project-watt",
          displayName: "projectWATT"
        },
        {
          name: "change-a-view",
          displayName: "Change A View"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 3 breakpoints, mobile first */

.portfolio-home {
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 800px) {

}

@media only screen and (min-width: 1200px) {

}

</style>
