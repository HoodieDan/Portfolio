<template>
  <div id="Contact" class="container">
      <h6 class="mono green" v-motion-slide-visible-once-bottom><span>04.</span>What's Next?</h6>
      <h2 class="light-slate" v-motion-slide-visible-once-bottom>Get in Touch</h2>
      <p v-motion-slide-visible-once-bottom>
        I'm always interested in new projects. Have you got a project in mind?
        Let's talk!
      </p>
      <a href="mailto:obodedaniel3@gmail.com"><button class="btn mono">Say Hello!</button></a>
  </div>
  <footer>
    <div class="box">
      <div class="font-awesome">
      <a class="brand" href="https://github.com/HoodieDan" target="__blank"><i class="fa-brands fa-github"></i></a>
      <a class="brand" href="https://instagram.com/the.7th.kind" target="__blank"><i class="fa-brands fa-instagram"></i></a>
      <a class="brand" href="https://twitter.com/osemuu" target="__blank"><i class="fa-brands fa-twitter"></i></a>
      <a class="brand" href="https://www.linkedin.com/in/daniel-obode-334144195/" target="__blank"><i class="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
    <p class="mono">Built by Daniel Obode</p> 
    <!-- <p class="smaller mono">Designed by Brittany Chiang</p> -->
  </footer>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Contact'
}
</script>

<style scoped>
div.container {
    width: 50vw;
    text-align: center;
    margin: 15% auto;
}
span {
    font-size: smaller;
}
h2 {
    font-size: clamp(40px, 5vw, 60px);
    font-weight: 700;
    padding-bottom: 15px;
}
p {
    font-weight: 500;
    font-size: 18px;
    padding-bottom: 15px;
}
footer {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 35%;
}
div.box {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
div.font-awesome {
  display: flex;
  justify-content: space-evenly;
  width: 70vw;
}
.font-awesome a {
    text-decoration: none;
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    color: #8892b0;
    transition: all .1s linear;
}
.font-awesome a:hover {
    color: #64ffda;
    font-size: 1.7rem;
}
.btn {
  background-color: #0a192f;
  border: #64ffda 1px solid;
  color: #64ffda;
  font-size: 1rem;
  padding: 15px;
  transition: all 0.5s linear;
}
.btn:hover {
  background-color: #64ffda;
  color: #0a192f;
}
p.smaller {
  font-size: 15px;
}
@media (max-width: 500px) {
  div.container {
    margin-top: 35%;
    width: 80vw;
  }
  h2 {
    font-size: clamp(35px, 5vw, 60px);
  }
  p {
    font-size: 16px;
  }
}
@media (min-width: 1024px) {
  footer {
    display: none;
  }
}
</style>