import { createApp } from 'vue'
import App from './App.vue'
import Triangle from './components/Triangle.vue'
import Hexagon from './components/Hexagon' 
import Heart from './components/Heart'
import Star from './components/Star'
import Shape from './components/Shape'
import Diamond from './components/Diamond'
const app = createApp(App);
app.component('The-Triangle',Triangle)
app.component('The-Hexagon', Hexagon)
app.component('The-Heart', Heart)
app.component('The-Star', Star)
app.component('The-Shape',Shape)
app.component('The-Diamond',Diamond)
app.mount('#app')
