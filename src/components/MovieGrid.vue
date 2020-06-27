<template>
    <div class="movie-grid" @search="getMovies">
        <MovieCard
            v-for="movie in movies"
            :key="movie.id"
            :id="movie.id"
            :title="movie.title"
            :image="movie.poster_path"
            :rating="movie.vote_average"
        />
        <h1 v-if="!movies.length">No results!</h1>
        <button
            @click="getMovies(0)"
            v-if="this.reqPage != 1 || this.sliceStart != 0"
            style="grid-column: 2"
        >&larr; Previous Page</button>
        <button @click="getMovies(1)" style="grid-column: 4">Next page &rarr;</button>
    </div>
</template>

<script>
import axios from 'axios'
import bus from '@/bus'

import MovieCard from './MovieCard'

export default {
    components: { MovieCard },
    data() {
        return {
            sliceStart: 0,
            sliceEnd: 10,
            reqPage: 1,
            movies: []
        }
    },
    methods: {
        /* Método para fazer a ordenação da lista de obj, conforme o titulo */
        dynamicSort(property) {
            var sortOrder = 1

            if (property[0] === '-') {
                sortOrder = -1
                property = property.substr(1)
            }

            return function(a, b) {
                if (sortOrder == -1) {
                    return b[property].localeCompare(a[property])
                } else {
                    return a[property].localeCompare(b[property])
                }
            }
        },
        getMovies(n) {
            if (n === 1) {
                this.sliceStart + 10 > 10
                    ? ((this.sliceStart = 0), this.reqPage++)
                    : (this.sliceStart += 10)

                this.sliceEnd + 10 > 20
                    ? (this.sliceEnd = 10)
                    : (this.sliceEnd += 10)
            } else if (n === 0) {
                this.sliceStart - 10 < 0
                    ? ((this.sliceStart = 10), this.reqPage--)
                    : (this.sliceStart -= 10)

                this.sliceEnd - 10 < 10
                    ? (this.sliceEnd = 20)
                    : (this.sliceEnd -= 10)
            }

            /* Monta a URL de pesquisa */
            let url

            if (this.$store.state.searchInput) {
                url = `https://api.themoviedb.org/3/search/movie?api_key=64b38e386e59e75bcda8fe947b4f9be2&query=${this.$store.state.searchInput}&page=${this.reqPage}`
            } else {
                url = `https://api.themoviedb.org/3/movie/top_rated?api_key=64b38e386e59e75bcda8fe947b4f9be2&language=en-US&page=${this.reqPage}`
            }

            axios
                .get(url)
                .then(
                    res =>
                        (this.movies = res.data.results.slice(
                            this.sliceStart,
                            this.sliceEnd
                        ))
                )
                .then(list => list.sort(this.dynamicSort('title')))
                .then(() => {})
        }
    },
    created() {
        bus.$on('searchTriggered', this.getMovies)
    },
    mounted() {
        this.getMovies()
    }
}
</script>

<style lang="scss" scoped>
.movie-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, fr);
    gap: 3rem;

    height: 100%;
}

button {
    border: none;
    font-size: 1.6rem;
    margin: 0 1rem;
    color: #fff;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}
</style>
