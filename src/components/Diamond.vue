<template>
	<div :style="style" id="diamond-shield"></div>
	<The-Star :style="style" />
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
	 #diamond-shield {
      width: 0;
      height: 0;
      border: 50px solid transparent;
      border-bottom: 20px solid var(--color);
      position: relative;
      top: -50px;
    }
    #diamond-shield:after {
      content: '';
      position: absolute;
      left: -50px;
      top: 20px;
      width: 0;
      height: 0;
      border: 50px solid transparent;
      border-top: 70px solid var(--color);
    }
</style>