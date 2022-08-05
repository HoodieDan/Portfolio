<template>
    <div id="AboutMe" class="container row">
        <div class="col-lg-7 col-md-7 about-me">
            <h3 class="light-slate"><span class="green mono smaller-h3">01.</span> About Me</h3> 
            <hr class="light-slate">
            <p>
                Hello! My name is Daniel and I enjoy creating things that live on the internet.
                My interest in web development started back in 2020 when I decided to try recreating
                a popular dating site but with a tweak — turns out hacking together a dating site for dogs taught
                me a lot about HTML & CSS!
                <br> <br>
                Fast forward to today and I've had the priviledge of working at <span class="green">a startup</span>.
                My main focus these days is building accessible, inclusive products and digital experiences at 
                <a class="tishlabs" target="__blank" href="https://tishlabs.com.ng/"><span class="green">Tishlabs Technologies</span></a> for a variety of clients.
                <br> <br>
                Here are a few Technologies I have been working with recently:
                <br> <br>
            </p>
            <div class="row mono skills">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <ul>
                            <li><i class="font-awesome fa-brands fa-html5"></i> HTML</li>
                            <li><i class="font-awesome fa-brands fa-css3-alt"></i> CSS</li>
                            <li><i class="font-awesome fa-brands fa-bootstrap"></i> Bootstrap</li>
                            <li><i class="font-awesome fa-brands fa-python"></i> Python</li>
                            <li><i class="font-awesome fa-brands fa-react"></i> React.js</li>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <ul>
                            <li><i class="font-awesome fa-brands fa-js"></i> Javascript (ES6+)</li>
                            <li><i class="font-awesome fa-brands fa-vuejs"></i> Vue.js</li>
                            <li><i class="font-awesome fa-brands fa-node-js"></i> Node.js</li>
                            <li><i class="font-awesome fa-brands fa-git-alt"></i> Git</li>
                            <li><i class="font-awesome fa-brands fa-google"></i> Firebase</li>
                        </ul>
                    </div>
                </div>
        </div>
        <div class="col-lg-5 col-md-5">
            <div class="image-container">
                <img class="handsome" src="../assets/20200809_122303.jpg" alt="my_picture">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "AboutMe",
}
</script>

<style scoped>
h3 {
    display: inline-block;
    font-weight: 700;
    margin: 1%;
}
hr {
    display: inline-block;
    position: relative;
    top: 10px;
    width: 20vw ;
}
p {
    font-weight: 500;
    line-height: 1.8;
    padding-top: 35px;
}
a.tishlabs {
    text-decoration: none;
}
ul {
    padding: 0;
}
div .container {
    margin: 17% auto 10%;
    position: relative;
}
.about-me {
    padding-left: 10%;
}
.mono {
    font-size: smaller;
}
div.col-lg-5.col-md-5 {
    display: flex;
    align-items: center;
}
.image-container {
    margin: 18% auto;
    border: 2px #64ffda solid;
    border-radius: 5px;
    position: relative;
    height: 200px;
    width: 200px;
    transition: all 0.6s ease-in;
}
.image-container:hover {
    bottom: 5px;
    left: 5px;
}
.handsome {
    border-radius: 5px;
    position: relative;
    width: 200px;
    height: 200px;
    bottom: 20px;
    right: 20px;
    cursor: pointer;
    filter: opacity(0.8) drop-shadow(0 0 0 #64ffda);
    transition: all 0.2s linear;
}
.handsome:hover{
    filter: none !important;
    opacity: 1 !important;
    bottom: 15px;
    right: 15px;
}
ul {
  list-style: none; 
}
li {
    font-weight: 400;
}
ul li::before {
  color: #64ffda;
  font-weight: bold;
  display: inline-block;
  width: 1em; 
  margin-left: -1em;
}
.font-awesome {
    color: #64ffda;
}
@media (max-width: 820px) {
    div.container {
        margin-top: 200px;
    }
}
@media (max-width: 500px) {
    div.col-lg-6 {
        width: auto;
    }
    .about-me {
        padding-left: 0;
    }
    p {
        font-weight: 400;
    }
}
@media (max-width: 393px) {
    div.container {
        margin-top: 55%;
    }
}
@media (max-width: 320px) {
    div.container {
        margin-top: 80px;
    }
    .about-me {
        padding: 0;
    }
}
</style>