<template>
    <div id="app">
        <Header />
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from './components/Header'
import MovieGrid from './components/MovieGrid'
import MovieFull from './components/MovieFull'

// My API Key from TMDb: 64b38e386e59e75bcda8fe947b4f9be2

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
</style>
