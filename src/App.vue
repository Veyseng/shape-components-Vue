<template>
  <div id="app">
    <h1 style="display: block">This is the root component</h1>
    <div id="content">
      <The-Triangle class="shape"/>
      <The-Hexagon color="green" class="shape"/>
      <The-Diamond color="#037ef3"/>
      <The-Shape name="heart" color="purple"/>
      <The-Shape name="star" color="black"/>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
*{
  width: 100%;
  text-align: center;
}
#app {
  font-family: 'Raleway', sans-serif;
  margin-top: 60px;
 
}
#content{
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.shape{
  margin: 20px;
}

</style>
