<template>
  <div id="Work" class="container">
    <div class="header">
        <h3 class="light-slate"><span class="green mono smaller-h3">03.</span> Some Things I've Built</h3> 
        <hr class="light-slate">
    </div>

    <!-- featured projects  -->
    <div class="projects">
        <div v-for="(project, index) in featuredProjects" :key="index" class="row project-container" :style="{ backgroundImage: mobile ? 'url(' + project.image + ')' : 'none' }" v-motion-slide-visible-once-bottom>
            <div class="project-image col-6">
                <a :href="project.link" target="__blank">
                    <div class="photo-canvas">
                        <img :src="project.image" :alt="project.name">
                    </div>
                </a>
            </div>
            <div class="project-content col-6">
                <h6 class="mono green">Featured Project</h6>
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
    <h2 class="text-center light-slate other-projects">Other Noteworthy Projects</h2>
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
    mounted () {
        if (window.innerWidth <= 575) {
            console.log('mobile')
            this.mobile = true
        }
    },
    data () {
        return {
            mobile: false,
            featuredProjects: [
                {
                    name: "Drew Music",
                    description: `This is a fullstack music player progressive web. It includes functions such as
                    authentication, file uploads, playing of music and many more! The state management was
                    done with Vuex, testing (snapshot, e2e and unit) with Jest and Cypress, authentication
                    and storage with firebase and finally, form validation with Vee-Validate`,
                    technologies: "HTML CSS Javascript TailwindCSS Vue SCSS Firebase",
                    image: require("../assets/music.png"),
                    github: "https://github.com/HoodieDan/Drew-Music",
                    link: "https://drew-music.vercel.app"
                },
                {
                    name: "Twitter Clone",
                    description: `This is a clone of the twitter UI with the feed, profile and
                    comment pages. It is fully responsive and was built Nuxt. State management was handled
                    using Vuex.`,
                    technologies: "HTML SCSS Javascript Bootstrap Nuxt",
                    image: require("../assets/twitter.png"),
                    github: "https://github.com/HoodieDan/nuxtjs-twitter-clone",
                    link: "https://hoodietwitter.vercel.app"
                },
                {
                    name: "Pizza Website",
                    description: `This is an E-Commerce website for buying pizza and
                        other snacks and desserts. It was made using Nuxt and the state management
                        was handled using Vuex.`,
                    technologies: "HTML CSS Javascript Nuxt",
                    image: require("../assets/pizza.png"),
                    github: "https://github.com/HoodieDan/pizza-den",
                    link: "https://pizza-app-web.netlify.app/"
                }
            ],
            otherProjects: [
                {
                    name: "One Central NG",
                    description: `This is the One Central NG website.
                        One Central is a product of Tishlabs Technologies. 
                        It is a fintech app that provides swift cash transactions.`,
                    technologies: "HTML CSS Javascript Bootstrap",
                    image: require("../assets/OneCentral.png"),
                    github: "https://github.com/HoodieDan/One-CentralNG-clone",
                    link: "https://www.onecentral.ng"
                },
                {
                    name: "Portfolio Website",
                    description: `This is my personal portfolio website developed by me.`,
                    technologies: "HTML CSS Javascript Bootstrap Vue",
                    image: require("../assets/portfolio.png"),
                    github: "https://github.com/HoodieDan/portfolio",
                    link: "https://hoodiedan.netlify.app"
                },
                {
                    name: "Real Estate",
                    description: `A real estate company website landing page.`,
                    technologies: "HTML CSS Vue Swiper.js",
                    github: "https://github.com/HoodieDan/Real-Estate",
                    link: "https://realest-estate.netlify.app/"
                },
                {
                    name: "Dashboard",
                    description: `A dashboard with multiple analytics charts.`,
                    technologies: "HTML CSS Vue FusionCharts",
                    github: "https://github.com/HoodieDan/temi-dashboard",
                    link: "https://temi-dashboard.netlify.app/"
                },
                {
                    name: "Google Keep Clone",
                    description: "A simple Google Keep clone built with React and Firebase",
                    technologies: "React Firebase",
                    github: "https://github.com/HoodieDan/Google-Keep-Clone",
                    link: "https://google-keep-react-clone.netlify.app/"
                },
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
                    technologies: "Vue",
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
    position: relative;
    margin-top: 100px;
    margin-bottom: 50px;
}
div.project-technologies {
    padding-top: 20px;
}
div.project-technologies p {
    font-weight: 500;
    font-size: smaller;
}
div.container {
    margin: 10% auto;
    padding: 5%;
    position: relative;
    width: 90vw;
}
div.project-container {
    height: fit-content;
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
.other-projects {
    margin-top: 6rem;
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
    transform: translateY(-5px);
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
        width: 100%;
        right: 0;
    }
}
@media (max-width: 575px) {
    div.project-container {
        background-size: cover;
        box-shadow: 0 10px 30px -15px rgba(2,12,27,0.7);
    }
    div.project-content {
        padding: 40px;
        /* filter: opacity(0.8) drop-shadow(0 0 0 #64ffda); */
        background-color: rgba(17, 34, 64, 0.9);
        background-blend-mode: multiply;
        text-align: left;
    }
    div.project-content:before {
        content: "";
        opacity: 0.3;
    }
    div.project-description {
        padding: 25px 0;
        background: transparent;
        box-shadow: none;
    }
    a.link:nth-of-type(1) {
        padding-left: 0;
    }
}
</style>
