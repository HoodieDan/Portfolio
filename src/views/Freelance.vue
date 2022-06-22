<template>
    <div class="info" v-motion-pop>
        <h5>Freelance Web Developer <span class="green">@Upwork, Fiverr</span></h5>
        <p class="mono">June 2020 - Present</p>

        <ul>
            <li>
                Created well functioning static websites for clients.
            </li>
            <li>
                Worked with HTML, CSS and JavaScript to turn high fidelity User Interface (UI) mockups to sleek high performance websites and web applications.
            </li>
            <li>
                Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery.
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Freelance',
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