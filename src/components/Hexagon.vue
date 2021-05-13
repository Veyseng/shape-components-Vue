<template>
  
    <div :style="style" id="hexagon">
    </div>
    <The-Heart :style="style"/>
</template>
<script>
export default {
  props:['color'],
  data(){
    return{
      Color : this.color,
    }
  },
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
#hexagon {
  width: 100px;
  height: 57.735px;
  background: var(--color);
  position: relative;
}
#hexagon::before {
  content: "";
  position: absolute;
  top: -28.8675px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 29px solid var(--color);
}
#hexagon::after {
  content: "";
  position: absolute;
  bottom: -28.8675px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 29px solid var(--color);
}
</style>