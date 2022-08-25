<template>
  <PageLoader></PageLoader>
  <body class="body" v-if="show">
  
    <!-- Navigation bar  -->
    <div class="nav-container" :class="{ 'sticky-top': sticky,'nav-div': shouldFadeOut }">
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
        sticky: true,
        upScroll: false,
        shouldFadeOut: false,
        lastScrollTop: 0,
      }
    },
    mounted() {
      this.showApp()
      // let lastScroll = 0;
      window.addEventListener('scroll', () => {
        let st = window.scrollY;
        if (st > 150) {
            this.shouldFadeOut = true
        } else {
            this.shouldFadeOut = false
        }
      });
      // window.addEventListener("scroll", () => { 
      //   let currentScroll = window.scrollY; // Get Current Scroll Value

      //   if (currentScroll > 0 && lastScroll <= currentScroll) {
      //     lastScroll = currentScroll;
      //     console.log('scrolling-down')
      //     this.upScroll = false
      //   }else{
      //     lastScroll = currentScroll;
      //     console.log('scrolling-up')
      //     this.upScroll = true
      //   }
      // });
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
*::-webkit-scrollbar {
  width: 0.3em;
}
 
*::-webkit-scrollbar-track {
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
.blur-bg {
  backdrop-filter: blur(3px) !important;
  /* background-color: #0a192f !important; Fallback color */
  background-color: rgba(10, 25, 47, 0.1) !important; /* Black w/opacity/see-through */
}
/* @media (min-width: 1024px) {
  .nav-div {
    animation: nav-up 1s alternate ease-out forwards;
  }
} */
.nav-div {
  animation: nav-up 1s normal ease-out forwards;
  overflow-x: hidden;
}
.up-scroll {
  animation: nav-up 1s reverse ease-in forwards;
}
/* @media (min-width: 768px) {
  .nav-div {
    overflow-x: hidden !important;
  }
} */
@media (max-width: 1023px) {
  .nav-container {
    transition: all 1s ease-out;
  }
}
@keyframes nav-up {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-150px);
  }
}
</style>
