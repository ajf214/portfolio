<template>
  <div class="project-details">
    project-details-{{this.$route.params.projectName}}
    <div v-html="content">
    </div>
  </div>
</template>

<script>
import marked from 'marked'
// import test from './public/docs/azure-blueprints.md'

export default {
  name: 'ProjectDetails',
  data () {
    return {
      content: ''
    }
  },
  created () {
    this.setContent()
  },
  methods: {
    setContent () {
      // const markdown = require(`./docs/${this.$route.params.projectName}.md`)
      this.content = marked('# Test')
    }
  }
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
