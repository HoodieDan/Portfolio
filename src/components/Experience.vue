<template>
  <div id="Experience" class="container">
    <div class="header">
        <h3 class="light-slate"><span class="green mono smaller-h3">02.</span> Where I've Worked</h3> 
        <hr class="light-slate">
    </div>

    <div class="router-links">
        <router-link to="/" class="router-link mono" :class="{ 'active': homeView }"><h6>Tishlabs</h6></router-link>
        <router-link to="/freelance" class="router-link mono" :class="{ 'active': freelanceView }"><h6>Freelance</h6></router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Experience',
    computed: {
        homeView() {
            return (this.$route.name === 'tishlabs');
        },
        freelanceView() {
            return (this.$route.name === 'freelance');
        },
    }
}
</script>

<style scoped>
h3 {
    display: inline-block;
    font-weight: 700;
    margin: 1%;
}
h6 {
    display: inline-block;
    padding: 15px;
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
    line-height: 1.8;
    padding-top: 35px;
}
div.container {
    margin: 10% auto;
    padding: 5%;
    position: relative;
    width: 60vw;
}
.header {
    padding-bottom: 30px;
}
.router-link {
    text-decoration: none;
    color: #8892b0; 
    font-weight: 500;
    padding-bottom: 11px;
    border-bottom: 2px solid #8892b0;
}
.router-link:active,
.router-link:focus {
    color:#64ffda;
    border-bottom: 2px solid #64ffda;
}
h6:hover {
    background: rgba(100,255,218,0.1);
}
h6:focus {
    border-bottom: 2px solid #64ffda;
}
.active {
    color:#64ffda;
    border-bottom: 2px solid #64ffda;
}
@media (max-width: 768px) {
    div.container {
        margin-top: 25%;
        width: 85vw;
    }
}
</style>