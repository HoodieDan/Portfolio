<template>
    <div class="info" v-motion-pop>
        <h5>Frontend Engineer <span class="green">@Tishlabs Technologies</span></h5>
        <p class="mono">May 2022 - Present</p>

        <ul>
            <li>
                Write modern, performant, maintainable code for a diverse array of client and internal projects.
            </li>
            <li>
                Work with a variety of different languages, platforms, frameworks, and content management systems such as Tailwind CSS, JavaScript, Vue.js and Netlify.
            </li>
            <li>
                Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "TishLabs",
}
</script>

<style scoped>
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
@media (max-width: 768px) {
    .info {
        width: 100%;
    }
}
</style>