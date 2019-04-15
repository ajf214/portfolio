<template>
  <div class="portfolio-home grid">
    <div class="bio">
      <h1>Alex Frankel</h1>
      <p>{{bio}}</p>
    </div>
    <div class="contact-info">
      <a href="http://twitter.com/sonofdiesel" target="_blank"><i class="fab fa-twitter"></i> @sonofdiesel</a>
      <a href="mailto:alex.j.frankel@gmail.com?subject=I want to hire you!" target="_blank"><i class="fas fa-envelope"></i> Email</a>
      <a href="./docs/resume.pdf" target="_blank"><i class="fas fa-file-alt"></i> Resume</a>
    </div>
    <div class="projects">
      <div class="project grid" v-for="(project, index) in projects" :key="index">
        <div class="project-copy">
          <router-link :to="`/projects/${project.name}`">
            <h3>{{project.displayName}}</h3>
          </router-link>
          <p class="description">{{project.description}}</p>
        </div>
        <div class="graphic" :id="project.name" :class="{short: project.name === 'project-watt'}">
          <img class="logo" :src="`/${project.name}.svg`">
        </div>
      </div>
    </div>
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
          name: 'azure-blueprints',
          displayName: 'Azure Blueprints',
          description: `The world’s largest enterprises were having challenges scaling their consumption 
          of Microsoft Azure because new application environments took too long to set up. Blueprints allows 
          cloud architects to set up an environment in a few clicks.`,
        },
        {
          name: "change-a-view",
          displayName: "Change A View",
          description: `Reddit’s r/changemyview subreddit — with over 700,000 subscribers, was hitting the 
          limits of how it could innovate in improving discussions. Widely regarded as one of the most unique 
          communities on reddit, the team decided that the community needed to exist on it’s own site, where 
          they could expand what would be possible with discussion on the internet.`
        },
        {
          name: "project-watt",
          displayName: "projectWATT",
          description: `My master’s thesis at SVA IxD, For a year, I explored how we can better have complex, 
          nuanced discussions on the internet— motivated by the aftermath of the 2016 elections. projectWATT 
          is a publication which features OPs from the most popular threads on the r/changemyview subreddit 
          who summarize their CMV experience so it can be shared beyond reddit.`
        }
      ],
      bio: `I’m a product manager, product designer, and dog lover. I spend most of my time at 
      Microsoft where I run a service called Azure Blueprints to help the largest enterprises 
      run Azure at scale. With the rest of my work time, I run product at Change A View, a platform 
      to help the world discuss differently.`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 3 breakpoints, mobile first */

.portfolio-home {
  max-width: 1300px;
  margin: auto;
}

.projects {
  grid-column: 1/13;
}

.project {
  margin-bottom: 4rem;
}

.graphic {
  grid-column: 1/13;
  background-color: blue;
  height: 250px;

  display: flex;
  align-items: center;
  justify-items: center;
  grid-row: 1/2;
}

.graphic img {
  margin: auto;
  width: 80px;
}

.graphic.short img {
  width: 140px;
}

#azure-blueprints {
  background-color: rgba(0,114,198, 0.2);
}

#change-a-view {
  background-color: rgba(13,70,255, 0.2);
}

#project-watt {
  background-color: rgba(100,52,114, 0.2);
}

.project-copy {
  grid-column: 2/12;
  grid-row: 2/3;
}

.project-copy h3 {
  margin-bottom: 8px;
}

.bio {
  grid-columN: 2/12;
  margin-bottom: 16px;
}

.bio h1 {
  margin-bottom: 16px;
}

.contact-info {
  grid-column: 2/12;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

.contact-info a {
  margin-bottom: 8px;
  font-family: 'Consolas';
  display: inline-block;
  margin-right: 20px;
}

@media only screen and (min-width: 800px) {
  .bio {
    /* margin-bottom: 36px; */
  }

  .graphic {
    grid-column: 5/12;
    grid-row: 1/2;
    margin-left: 36px;
  }

  .project-copy {
    grid-column: 2/5;
    grid-row: 1/2;
  }

  .bio {
    grid-column: 2/8;
  }

  .contact-info {
    /*
    grid-column: 7/10;
    margin-top: 36px;
    flex-direction: column;
    */
    flex-direction: row;
  }
}

@media only screen and (min-width: 1200px) {
  .bio {
    grid-column: 2/6;
  }
}

</style>
