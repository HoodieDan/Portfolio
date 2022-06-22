<template>
    <div class="right-link mono">
        <a href="mailto:obodedaniel3@gmail.com">obodedaniel3@gmail.com</a> <hr>
    </div>
    <div class="left-links">
        <div class="font-awesome">
            <a class="brand" href="https://github.com/HoodieDan" target="__blank"><i class="fa-brands fa-github"></i></a>
            <a class="brand" href="https://instagram.com/the.7th.kind" target="__blank"><i class="fa-brands fa-instagram"></i></a>
            <a class="brand" href="https://twitter.com/osemuu" target="__blank"><i class="fa-brands fa-twitter"></i></a>
            <a class="brand" href="https://www.linkedin.com/in/daniel-obode-334144195/" target="__blank"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name: "BottomLinks",
}
</script>

<style scoped>
hr {
    color: #fff;
    display: inline-block;
    width: 100px;
    position: relative;
    top: 12px;
    height: 2px;
}
.right-link {
    transform: rotate(90deg);
    position: fixed;
    bottom: 150px;
    right: -100px;
    font-weight: 300;
    opacity: 0;
    animation: show 1s linear 2s forwards;
}
@keyframes show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
a {
    text-decoration: none;
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    color: #8892b0;
    transition: all .1s linear;
}
a:hover {
    color: #64ffda;
    font-size: 0.92rem;
}
.font-awesome {
    display: flex;
    position: absolute;
    bottom: -10px;
    left: -230px;
}
.brand {
    font-size: 20px;
    padding: 10px;
    padding-right: 15px;
}
.brand:nth-of-type(1) {
    transform: rotate(-90deg);
}
.brand:nth-of-type(2) {
    transform: rotate(-90deg);
}
.brand:nth-of-type(3) {
    transform: rotate(-90deg);
}
.brand:nth-of-type(4) {
    transform: rotate(-90deg);
}
.brand a:hover {
    color: #64ffda;
}
.left-links {
    transform: rotate(90deg);
    position: fixed;
    bottom: 0px;
    left: -20px;
    font-weight: 100;
    opacity: 0;
    animation: show 1s linear 2s forwards;
}
.left-links hr {
    width: 200px;
}
@media (max-width: 1024px) {
  .left-links,.right-link {
    display: none;
  }
}
</style>