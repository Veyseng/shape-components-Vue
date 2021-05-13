<template>
	<div :style="style" id="heart"></div>
</template>

<script>
export default {
    props:['color'],
    setup() {
      
    },
    computed:{
      style(){
        return{
          '--color': this.color,
        }
      }
    }
  }
</script>
<style scoped>
 	#heart {
      position: relative;
      width: 100px;
      height: 90px;
    }
    #heart:before,
    #heart:after {
      position: absolute;
      content: "";
      left: 50px;
      top: 0;
      width: 50px;
      height: 80px;
      background: var(--color);
      border-radius: 50px 50px 0 0;
      transform: rotate(-45deg);
      transform-origin: 0 100%;
    }
    #heart:after {
      left: 0;
      transform: rotate(45deg);
      transform-origin: 100% 100%;
    }
  
</style>