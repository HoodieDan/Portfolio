<template>
  <PageLoader></PageLoader>
  <body v-if="show">
  
    <!-- Navigation bar  -->
    <div :class="{ 'sticky-top': sticky,'nav-div': shouldFadeOut }">
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
        shouldFadeOut: false,
      }
    },
    mounted() {
      this.showApp()
      window.addEventListener('scroll', () => {
        let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > 200) {
            this.sticky = false
            console.log('remove')
        } else {
          this.sticky = true
        }
      });
      window.addEventListener('scroll', () => {
        let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > 150) {
            this.shouldFadeOut = true
            console.log('muruve')
        } else {
          this.shouldFadeOut = false
        }
      })
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
.blur-bg {
  backdrop-filter: blur(7px) !important;
  /* background-color: #0a192f !important; Fallback color */
  background-color: rgba(10, 25, 47, 0.1) !important; /* Black w/opacity/see-through */
}
.nav-div {
  animation: nav-up 1s alternate ease-out;
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
