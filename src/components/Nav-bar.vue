<template>
  <nav class="navbar" :class="{ 'blur-bg': !navIsOpen }">
    <div>
      <div>
        <a class="navbar-brand logo green" href="#">
          <img src="../assets/logo.svg" alt="logo" style="width: 60px">
        </a>
      </div>
    </div>
    <div class="navi-items">
      <button class="navbar-toggle" type="button" aria-label="Toggle navigation" 
      :class="{ 'aside-color': navIsOpen }"
      @click="toggleNav">
        <span class="toggler-icon top-bar"
        :class="{ 'top-icon-animate': navIsOpen }"></span>
        <span class="toggler-icon middle-bar"
        :class="{ 'middle-icon-animate': navIsOpen }"></span>
        <span class="toggler-icon bottom-bar"
        :class="{ 'bottom-icon-animate': navIsOpen }"></span>
      </button>
      <ul class= "navbar-navi">
        <li class="navbar-item">
          <a class="navbar-link mono" href="#AboutMe"><span class="green">01.</span>About</a>
        </li>
        <li class="navbar-item">
          <a class="navbar-link mono" href="#Experience"><span class="green">02.</span>Experience</a>
        </li>
        <li class="navbar-item">
          <a class="navbar-link mono" href="#Work"><span class="green">03.</span>Work</a>
        </li>
        <li class="navbar-item">
          <a class="navbar-link mono" href="#Contact"><span class="green">04.</span>Contact</a>
        </li>
        <li class="navbar-item">
          <a class="navbar-link mono" href="https://drive.google.com/uc?export=download&id=1fd_HaxnSHYA7tbPbswcMfFaOJKgIJ745">
            <button class="btn">Resumé</button>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- mobile navigation  -->
  <div
    class="backdrop"
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
    @touch.self="toggleNav"
    @click.self="toggleNav"
    v-show="navIsOpen"
  >
    <aside :class="{ 'leave-animation': !navIsOpen, 'invisible': clicked === 0, }">
      <a class="navbar-link mono block light-slate" href="#AboutMe" @click="toggleNav"><span class="block green">01.</span>About</a>
      <a class="navbar-link mono block light-slate" href="#Experience" @click="toggleNav"><span class="block green">02.</span>Experience</a>
      <a class="navbar-link mono block light-slate" href="#Work" @click="toggleNav"><span class="block green">03.</span>Work</a>
      <a class="navbar-link mono block light-slate" href="#Contact" @click="toggleNav"><span class="green block">04.</span>Contact</a>
      <a class="navbar-link mono block light-slate" href="https://drive.google.com/uc?export=download&id=1fd_HaxnSHYA7tbPbswcMfFaOJKgIJ745" @click="toggleNav">
      <button class="btn">Resumé</button>
      </a>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      clicked: 0,
    }
  },
  props: {
    navIsOpen: Boolean,
  },
  emits: ['toggle-nav'],
  methods: {
    toggleNav() {
      this.$emit('toggle-nav');
      this.clicked = 1
    },
  },
  computed: {
    canOpenNav() {
      return (this.navIsOpen === false && this.clicked === 1)
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  position: relative;
}
nav {
  background-color: #000;
  color: #64ffda;
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 80px;
  width: 100%;
  padding: 1% 4% 2%;
}
div.backdrop {
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(5px);
    transition: display 0.5s;
    z-index: 10;
}
aside {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: fixed;
  width: min(75vw, 400px);
  height: 100vh;
  right: 0;
  top: 0;
  background-color: #191919;
  color: #64ffda;
  text-align: center;
  transform: translateX(1000px);
  z-index: 10;
  padding: 80px 10px;
  transition: transform 0.5s linear;
  animation: show 0.5s linear forwards;
}
.aside-color {
    background-color: #191919 !important;
    position: absolute;

}
aside button.btn {
    background-color: #191919;
    font-size: 17px;
    padding: 3% 10% !important;
}
@keyframes show {
  from {
    transform: translateX(1000px);
  }
  to {
   transform: translateX(0px);
  }
}
.leave-animation {
  animation: leave 0.5s linear backwards !important;
}
@keyframes leave {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(1000px);
  }
}
.invisible {
  opacity: 0;
}
.show {
  animation: show 0.5s linear forwards;
}
a img {
  animation: flip 2s ease-out forwards !important;
  z-index: 1000;
}
@keyframes flip {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
li {
  font-size: 0.8rem;
  padding: 10px;
  text-decoration: none;
}
button.navbar-toggle {
  background-color: #000;
  border-style: none;
  display: none;
  position: relative;
  cursor: pointer;
  width: 30px;
  height: 30px;
  z-index: 1000;
}
span.top-bar {
  margin-top: -10px;
  transform: rotate(0deg);
  border-radius: 32px;
}
span.middle-bar {
  opacity: 1;
  filter: alpha(opacity=100);
  width: 85%;
  border-radius: 32px;
}
span.bottom-bar {
  margin-top: 10px;
  width: 70%;
  transform: rotate(0deg);
  border-radius: 32px;
}
ul.navbar-navi {
  position: relative;
  right: 30%;
}
li.navbar-item {
  margin: 1% 3%;
}
a.navbar-link {
  color: #8892b0;
}
a.navbar-link:hover {
  color: #64ffda;
}
.toggler-icon {
  display: block;
  display: none;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #64ffda;
  border-radius: 1px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}
.navi-items {
  display: flex;
}
.navbar-navi {
  display: flex;
  justify-content: space-between;
}
.top-icon-animate {
  margin-top: 0px !important;
  transform: rotate(135deg) !important;
}
.middle-icon-animate {
  opacity: 0 !important;
  filter: alpha(opacity=0) !important;
}
.bottom-icon-animate {
  margin-top: 0px !important;
  transform: rotate(-135deg) !important;
  width: 100% !important;
}
.block {
  display: block;
  font-size: 17px;
  padding-top: 0;
  transform: translateY(-22px);
}
button.btn {
  background-color: #000;
  border: #64ffda 1px solid;
  color: #64ffda;
  font-size: 0.9rem;
  padding: 7px 12px !important;
  position: relative;
  bottom: 5px;
  transition: all 0.5s linear;
}
button.btn:hover {
  background-color: #191919;
}
li:nth-of-type(1) {
  animation: enter 0.4s linear forwards;
}
li:nth-of-type(2) {
  animation: enter 0.8s linear forwards;
}
li:nth-of-type(3) {
  animation: enter 1.2s linear forwards;
}
li:nth-of-type(4) {
  animation: enter 1.6s linear forwards;
}
li:nth-of-type(5) {
  animation: enter 2.0s linear forwards;
}
@keyframes enter {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0px);
  }
}
@media (min-width: 769px) {
    aside {
        display: none;
    }
}
@media (max-width: 820px) {
    nav {
        padding-top: 3%;
    }
}
@media (min-width: 820px) {
  .blur-bg {
    backdrop-filter: blur(3px);
    background-color: rgba(10, 25, 47, 0.1);
  }
}
@media (max-width: 768px) {
  ul.navbar-navi {
    display: none;
  }
  button.navbar-toggle {
    display: block;
    margin-right: 10px;
    z-index: 11;
  }
  .toggler-icon {
    display: block;
  }
  /* .blur-bg {
    backdrop-filter: none;
    background-color: rgba(10, 25, 47, 1);
  } */
}
@media (max-width: 500px) {
    a img {
        margin-left: 10px !important;
        margin-top: 10px !important	;
        z-index: 12 !important	;
        width: 50px !important;
    }
}
@media (max-height: 700px) {
  aside {
    padding: 80px 10px 25px;
  }
  aside a {
    padding-top: 20px;
  }
}
</style>
