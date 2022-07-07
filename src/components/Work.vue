<template>
  <div id="Work" class="container">
    <div class="header">
        <h3 class="light-slate"><span class="green mono smaller-h3">03.</span> Some Things I've Built</h3> 
        <hr class="light-slate">
    </div>

    <div class="projects">
        <div v-for="(project, index) in featuredProjects" :key="index" class="row" v-motion-slide-visible-once-bottom>
            <div class="project-image col-6">
                <a :href="project.link" target="__blank">
                    <div class="photo-canvas">
                        <img class="img-fluid" :src="project.image" :alt="project.name">
                    </div>
                </a>
            </div>
            <div class="project-content col-6">
                <h6 class="mono green">Featured Poject</h6>
                <h2 class="light-slate">{{ project.name }}</h2>
                <div class="project-description">
                    <p>
                        {{ project.description }}
                    </p>
                </div>
                <div class="project-technologies">
                    <p class="mono">{{ project.technologies }}</p>
                </div>
                <div class="links">
                    <a :href="project.github" target="__blank" class="link"><i class="fa-brands fa-github"></i></a>
                    <a :href="project.link" target="__blank" class="link"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
        </div>
    
    </div>
    
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Work",
    data () {
        return {
            featuredProjects: [
                {
                    name: "Portfolio Website",
                    description: `This is my personal portfolio website developed by me.`,
                    technologies: "HTML CSS Javascript Bootstrap Vue.js",
                    image: require("../assets/portfolio.png"),
                    github: "https://github.com/HoodieDan/portfolio",
                    link: "https://hoodiedan.netlify.app"
                },
                {
                    name: "One Central NG",
                    description: `This is a replica of the One Central NG landing page.
                        One Central is a product of Tishlabs Technologies. 
                        It is a fintech app that provides swift cash transactions.`,
                    technologies: "HTML CSS Javascript Bootstrap",
                    image: require("../assets/OneCentral.png"),
                    github: "https://github.com/HoodieDan/One-CentralNG-clone",
                    link: "https://hoodiedan.github.io/One-CentralNG-clone/"
                },
                {
                    name: "Tindog",
                    description: `A minimal landing page of a dating website for dogs. 
                        This was my first ever project.`,
                    technologies: "HTML CSS",
                    image: require("../assets/Tindog.png"),
                    github: "https://github.com/HoodieDan/tindog",
                    link: "https://hoodiedan.github.io/tindog/"
                }
            ]
        }
    }
}
</script>

<style scoped>
h2 {
    font-weight: 700;
}
h3 {
    display: inline-block;
    font-weight: 700;
    margin: 1%;
}
h6 {
    font-size: 13px;
}
hr {
    display: inline-block;
    position: relative;
    top: 10px;
    width: 18vw ;
}
p {
    font-weight: 600;
    line-height: 1.5;
}
div.row {
    margin-top: 100px;
}
div.project-technologies {
    padding-top: 20px;
}
div.container {
    margin: 10% auto;
    padding: 5%;
    position: relative;
    width: 90vw;
}
div.photo-canvas {
    max-width: 50vw;
    position: relative;
    left: 30px;
}
div.project-content {
    text-align: right;
    z-index: 2;
    position: relative;
    right: 30px;
}
div.row {
    position: relative;
}
img {
    height: auto;
    width: 100%;
    position: absolute;
    filter: opacity(0.8) drop-shadow(0 0 0 #06ffc3);
    transition: all 0.5s linear;
    z-index: 0;
}
img:hover {
    filter: none;
    opacity: 1;
}
a {
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
}
a.photo-canvas {
    background-color: #64ffda;
}
div.project-description {
    box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    z-index: 2;
    padding: 25px;
    border-radius: 4px;
    background-color: #112240;
    height: auto;
    width: 100%;
}
.link {
    color: #8892b0;
    font-size: 25px;
    padding: 25px 0 25px 25px;
}
.link:hover {
    color: #06ffc3;
}
@media (max-width: 820px) {
    div.photo-canvas {
        width: 80vw;
        height: 100%;
        opacity: 5%;
        z-index: 10;
    }
    img {
        width: 80vw;
    }
    div.project-content {
        width: 80vw;
    }
    div.project-content {
        right: 0;
    }
}
</style>