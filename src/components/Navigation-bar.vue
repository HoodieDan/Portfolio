<template>
    <nav class="navbar navbar-expand-md navbar-dark">
        <a class="navbar-brand logo green`mono" href="#"><img src="../assets/logo.svg" alt="logo" style="width: 60px"></a>
        <button 
        class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#NavbarTogglerDemo02" 
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="toggler-icon top-bar"></span>
        <span class="toggler-icon middle-bar"></span>
        <span class="toggler-icon bottom-bar"></span>
        </button>
          <ul class= "navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link mono" href="#AboutMe"><span class="green">01.</span>About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mono" href="#Experience"><span class="green">02.</span>Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mono" href="#Work"><span class="green">03.</span>Work</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mono" href="#Contact"><span class="green">04.</span>Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mono" href="#">
                <button class="btn">Resumé</button>
              </a>
            </li>
          </ul>
      </nav>

</template>

<script>

export default {
  name: "NavigationBar",
}
</script>

<style scoped>
nav {
  padding: 1% 4%;
}
li {
  font-size: 0.8rem;
  padding: 10px;
}
.navbar-toggler {
  border-style: none;
}
a.nav-link:hover {
  color: #64ffda !important;
}
.logo {
  color: #64ffda;
  font-size: 50px;
  animation: flip 2s ease-out forwards;
}
@keyframes flip {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
li a .btn {
  margin: 0;
  position: relative;
  bottom: 5px;
}
.btn {
  background-color: #0a192f;
  border: #64ffda 1px solid;
  color: #64ffda;
  font-size: 0.9rem;
  padding: auto;
  transition: all 0.5s linear;
}
.btn:hover {
  background-color: #64ffda;
  color: #0a192f;
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
    position: relative;
    top: -100px;
  }
  to {
    top: 100px;
  }
}
.navbar-toggler {
  width: 30px;
  height: 20px;
  margin-right: 15px;
  position: relative;
  transition: .5s ease-in-out;
}
.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
  outline: none;
  box-shadow: none;
  border: 0;
}
.navbar-toggler span {
  margin: 0;
  padding: 0;
}
.toggler-icon {
  display: block;
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
.toggler-icon:nth-of-type(2) {
  width: 75%;
}
.middle-bar {
  margin-top: 0px;
}

/* when navigation is clicked */

.navbar-toggler .top-bar {
  margin-top: 0px;
  transform: rotate(135deg);
}
.navbar-toggler .middle-bar {
  opacity: 0;
  filter: alpha(opacity=0);
}
.navbar-toggler .bottom-bar {
  margin-top: 0px;
  transform: rotate(-135deg);
  width: 100%;
}

/* State when the navbar is collapsed */
.navbar-toggler.collapsed .top-bar {
  margin-top: -20px;
  transform: rotate(0deg);
  border-radius: 32px;
}
.navbar-toggler.collapsed .middle-bar {
  opacity: 1;
  filter: alpha(opacity=100);
  border-radius: 32px;
}
.navbar-toggler.collapsed .bottom-bar {
  margin-top: 20px;
  transform: rotate(0deg);
  border-radius: 32px;
}
@media (max-width: 768px) {
  a img {
    width: 50px !important;
  }
}
@media (min-width: 768px) {
  .navbar-toggler {
    display: none !important;
  }
}
</style>