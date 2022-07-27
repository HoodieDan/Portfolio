<template>
  <div id="Work" class="container">
    <div class="header">
        <h3 class="light-slate"><span class="green mono smaller-h3">03.</span> Some Things I've Built</h3> 
        <hr class="light-slate">
    </div>

    <!-- featured projects  -->
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

    <!-- Other projects  -->
    <h2 class="text-center light-slate mt-5">Other Noteworthy Projects</h2>
    <div class="others row">
        <div v-for="(project, index) in otherProjects" :key="index" class="col-lg-4 col-sm-6" v-motion-slide-visible-once-bottom>
            <div class="other">
                <a class="normal-link" :href="project.link" target="__blank">
                    <div class="project-top">
                        <div class="file">
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <div class="link">
                            <a :href="project.github" target="__blank" class="link"><i class="fa-brands fa-github"></i></a>
                            <a :href="project.link" target="__blank" class="link"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <h3 class="light-slate mb-3">{{ project.name }}</h3>
                    <p>{{ project.description }}</p>
                    <p class="project-technologies mono">{{ project.technologies }}</p>
                </a>
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
                    name: "Twitter Clone",
                    description: `This is a clone of the twitter UI with the feed, profile and
                    comment pages.`,
                    technologies: "HTML CSS Javascript Bootstrap Vue.js",
                    image: require("../assets/twitter.png"),
                    github: "https://github.com/HoodieDan/nuxtjs-twitter-clone",
                    link: "https://hoodietwitter.vercel.app"
                },
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
                }
            ],
            otherProjects: [
                {
                    name: "Tindog",
                    description: `A minimal landing page of a dating website for dogs. 
                        This was my first ever project.`,
                    technologies: "HTML CSS",
                    github: "https://github.com/HoodieDan/tindog",
                    link: "https://hoodiedan.github.io/tindog/"
                },
                {
                    name: "CSS Perspective Playground",
                    description: `A simple website to show how css perspectives work.`,
                    technologies: "Vue.js",
                    github: "https://github.com/HoodieDan/CSS-Perspective-Playground",
                    link: "https://hoodiedan.github.io/CSS-Perspective-Playground/"
                },
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
div.project-technologies p {
    font-weight: 300;
    font-size: smaller;
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
    border-radius: 5px;
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
.col-sm-6 {
    margin-bottom: 20px;
}
.other {
    background-color: #112240;
    padding: 5px 25px 15px 25px;
    cursor: pointer;
    height: 100%;
    border-radius: 5px;
    margin-bottom: 20px !important;
    box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);
    transition: all 0.3s ease-out;
}
.other:hover {
    transform: translateY(-10px);
}
.project-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.file svg {
    color: #06ffc3;
    width: 40px;
    height: 40px;
}
.normal-link {
    color: #8892b0;
    text-decoration: none;
}
.normal-link p:nth-of-type(1) {
    font-size: 16px;
}
.normal-link p:nth-of-type(2) {
    font-size: 13px;
    font-weight: 400;
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