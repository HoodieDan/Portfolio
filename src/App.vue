<template>
  <PageLoader></PageLoader>
  <body :class="{ 'no-scroll': navIsOpen }" v-if="show">
  
    <!-- Navigation bar  -->
    <div>
      <NavBar :navIsOpen="navIsOpen"
        @toggle-nav="navIsOpen = !navIsOpen"
      >
      </NavBar>
    </div>

    <!-- My introduction -->
    <Intro 
    :navIsOpen="navIsOpen"
    :class="{ 'blur': navIsOpen }"
    v-scroll-lock="navIsOpen"
    >
    </Intro>

    <!-- Links -->
    <BottomLinks></BottomLinks>

    <!-- Little bit about myself -->
    <AboutMe 
    v-motion-slide-visible-once-bottom
    :class="{ 'blur': navIsOpen }"
    >
    </AboutMe>

    <!-- Work Experience -->
    <Experience 
    v-motion-slide-visible-once-bottom
    :class="{ 'blur': navIsOpen }"
    >
    </Experience>

    <!-- Things I have built -->
    <Work
    :class="{ 'blur': navIsOpen }"
    v-motion-slide-visible-once-bottom
    >
    </Work>

    <!-- How to contact me -->
    <div 
    :class="{ 'blur': navIsOpen }"
    >
      <Contact></Contact>
    </div>
  </body>
</template>

<script>
import Intro from "./components/Intro.vue";
import AboutMe from "./components/AboutMe.vue";
import BottomLinks from "./components/Bottom-links.vue";
import Experience from "./components/Experience.vue";
import Contact from "./components/Contact.vue";
import Work from "./components/Work.vue";
import NavBar from "./components/Nav-bar.vue";
import PageLoader from "./components/PageLoader.vue";

export default {
    name: "App",
    components: { Intro, AboutMe, BottomLinks, Experience, Contact, Work, NavBar, PageLoader },
    data() {
      return {
        navIsOpen: false,
        show: false,
      }
    },
    mounted() {
      this.showApp()
    },
    methods: {
      showApp() {
        setTimeout(() => {
          this.show = true
        }, 2000)
      }
    },
}

</script>

<style>
body {
  background-color: #0a192f;
  color: #8892b0;
}
body::-webkit-scrollbar {
  width: 0.3em;
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
h3 {
  font-size: calc(1.1rem + .6vw);
}
body::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
.mono {
    font-family: "Roboto Mono", sans-serif;
}
.green {
    color: #64ffda;
}
.light-slate {
  color: #ccd6f6 !important;
}
.smaller-h3 {
  font-size: calc(0.8rem + .6vw);
}
.blur {
  filter: blur(5px) !important;
}
.no-scroll {
  position: fixed !important;
}
</style>
