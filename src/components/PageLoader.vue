<template>
  <div class = "loader-wrapper" v-if="isLoaded">
      <div class = "loader">
        <span class="rippler"></span>
        <span class="rippler"></span>
      </div>
    </div>
</template>

<script scoped>
export default {
    name: "PageLoader",
    data() {
        return {
          isLoaded: true,
        }
    },
    mounted() {
      this.showToggle()
        // document.onreadystatechange = () => {
        //     if (document.readyState == "complete") {
        //         this.isLoaded = true;
        //     }
        // }
    },
    methods: {
      showToggle() {
        setTimeout(() => {
          this.isLoaded = false
        }, 2000)
      }
    },
}
</script>

<style>
    .loader-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #0a192f;
    z-index: 1000;
  }
   .loader{
    position: relative;
    display: grid;
    place-items: center;
    width: 80px;
    height:80px;
  }
  span.rippler{
    position: absolute;
    border: 6px solid #66ffda;
    border-radius: 50%;
    animation: ripple 1.8s ease-out infinite;
  }
  span:nth-child(2){
    animation-delay: -0.6s;
  }
  @keyframes ripple{
    from{
      opacity: 1;
      width: 0;
      height: 0;
    }
    to{
      opacity: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>