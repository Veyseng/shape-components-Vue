<template>	
	<The-Heart :style="style" v-if="name === 'heart'" />
	<The-Star :style="style" v-if="name === 'star'"/>
</template>
<script>
export default {
	props:['name','color'],
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