<template>
    <div id="app">
        <Header />
        <div class="content">
            <router-view></router-view>
        </div>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
import Header from './components/Header'
import MovieGrid from './components/MovieGrid'
import MovieFull from './components/MovieFull'
// 64b38e386e59e75bcda8fe947b4f9be2

export default {
    components: { Header, MovieGrid, MovieFull }
}
</script>

<style lang="scss">
.content {
    height: 100%;
    width: 100%;
    padding: 5rem;
}
// #app {
//     // height: 100vh;
// }
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
