<template>
  <div class="container">
    <div class="cont">
      <p class="green mono">Hi, my name is</p>
      <h1 class="light-slate">Daniel Obode.</h1>
      <h1>I build things for the web.</h1>
      <div class="intro">
        <p>I’m a <span class="green">Frontend Web Developer</span> specializing in building exceptional 
        digital experiences. I am an Engineer valued for driving high-performance accessible web experiences. 
        I develop quality, user-friendly and scalable products.</p>
      </div>
      <a href="#AboutMe"><button class="btn mono">I want to know more!</button></a>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Intro",
  props: {
    navIsOpen: Boolean,
  }
}
</script>

<style scoped>
.cont {
  margin-left: 50px;
  margin-top: 70px;
  position: relative;
  width: 100%;
}
@keyframes enter {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
h1 {
  font-weight: 700;
  font-size: clamp(35px, 7vw, 70px);
  width: 80%;
}
p {
  animation: enter 0.3s cubic-bezier(0.645,0.045,0.355,1) forwards;
}
h1:nth-of-type(1) {
  animation: enter 0.6s cubic-bezier(0.645,0.045,0.355,1) forwards;
}
h1:nth-of-type(2) {
  animation: enter 0.9s cubic-bezier(0.645,0.045,0.355,1) forwards;
}
.intro p {
  font-size: 1rem;
  animation: enter 1.2s cubic-bezier(0.645,0.045,0.355,1) forwards;
}
.light-slate {
  color: #ccd6f6;
}
.intro {
  width: 50%;
  font-weight: 400;
  padding: 2% 0;
}
.btn {
  background-color: #0a192f;
  border: #64ffda 1px solid;
  color: #64ffda;
  margin: 3px;
  padding: 15px;
  transition: all 0.25s linear;
  animation: enter 1.5s cubic-bezier(0.645,0.045,0.355,1) forwards;
}
.btn:hover {
  background-color: #64ffda;
  color: #0a192f;
}
@media (max-width: 1024px) {
  .cont {
    margin-top: 20px;
  }
}
@media (max-width: 992px) {
  .cont {
    height: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: 20px;
  }
  h1,.intro {
    margin: 40px 0;
    width: 90%;
  }
}
@media (max-width: 500px) {
  .cont {
    max-width: 80vw;
    margin-top: 100px;
  }
  h1,.intro {
    width: 100%;
    margin: 25px auto;
  }
}
@media (max-width: 320px) {
  .cont {
    margin-top: 20px;
    padding-top: 0;
  }
    h1,.intro {
    width: 100%;
    margin: 25px auto;
  }
}
</style>