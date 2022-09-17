<template>
  <div id="Experience" class="container">
    <div class="header">
        <h3 class="light-slate"><span class="green mono smaller-h3">02.</span> Where I've Worked</h3> 
        <hr class="light-slate">
    </div>

    <div class="router-links">
        <div class="router-link mono" :class="{ 'active': tab === e.name }" v-for="(e, index) in experience" :key="index" @click="tab = e.name"><h6>{{ e.name }}</h6></div>
        <!-- <div class="router-link mono" :class="{ 'active': freelanceView }"><h6>Freelance</h6></div> -->
    </div>
    <div v-for="(e, index) in experience" :key="index" v-motion-pop>
        <div class="info" v-show="tab === e.name">
            <h5>{{ e.title }} <span class="green">@{{ e.company_name }}</span></h5>
            <p class="mono">{{ e.duration }}</p>

            <ul>
                <li>
                    {{ e.desc_1 }}
                </li>
                <li>
                    {{ e.desc_2 }}
                </li>
                <li>
                    {{ e.desc_3 }}
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Experience',
    data() {
        return {
            tab: 'Tishlabs',
            experience: [
                {
                    name: 'Tishlabs',
                    company_name: 'Tishlabs Technologies',
                    duration: 'May 2022 - Present',
                    title: 'Frontend Engineer',
                    desc_1: 'Write modern, performant, maintainable code for a diverse array of client and internal projects.',
                    desc_2: 'Work with a variety of different languages, platforms, frameworks, and content management systems such as Tailwind CSS, JavaScript, Vue.js and Netlify.',
                    desc_3: 'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
                },
                {
                    name: 'Freelance',
                    company_name: 'Fiverr & Upwork',
                    duration: 'June 2020 - Present',
                    title: 'Freelance Web Developer',
                    desc_1: 'Create well functioning static / dynamic websites for clients.',
                    desc_2: 'Work with HTML, CSS and JavaScript to turn high fidelity User Interface (UI) mockups to sleek high performance websites and web applications.',
                    desc_3: 'Develop and maintain code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, Vue.js and jQuery.',
                },
            ]
        }
    },
}
</script>

<style scoped>
h3 {
    display: inline-block;
    font-weight: 700;
    margin: 1%;
}
h5 {
    animation: enter 0.3s cubic-bezier(0.645,0.045,0.355,1) forwards;
}
h6 {
    display: inline-block;
    padding: 15px;
    font-size: 13px;
    margin: 0;
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
    /* padding-top: 35px; */
}
p.mono {
    font-weight: 400;
    animation: enter 0.5s cubic-bezier(0.645,0.045,0.355,1) forwards;
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
    display: inline-block;
    color: #8892b0; 
    font-weight: 500;
    cursor: pointer;
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
.info {
    width: 80%;
    margin-top: 10px;
}
p {
    font-size: 13px;
}
li {
    font-weight: 400;
}
li:nth-of-type(1) {
    animation: enter 0.6s cubic-bezier(0.645,0.045,0.355,1) forwards;
}
li:nth-of-type(2) {
    animation: enter 0.75s cubic-bezier(0.645,0.045,0.355,1) forwards;
}
li:nth-of-type(3) {
    animation: enter 0.8s cubic-bezier(0.645,0.045,0.355,1) forwards;
}
ul {
    list-style:     none;
    margin:         0.75em 0;
    padding:        0 1em;
}

li:before {
    content:        "";
    border-color:   transparent #64ffda;
    border-style:   solid;
    border-width:   0.20em 0 0.20em 0.30em;
    display:        block;
    height:         0;
    left:           -1em;
    position:       relative;
    top:            1.1em;
    width:          0;
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
@media (max-width: 768px) {
    div.container {
        margin-top: 25%;
        width: 85vw;
    }
    .info {
        width: 100%;
    }
}
</style>