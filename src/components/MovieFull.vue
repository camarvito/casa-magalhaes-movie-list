<template>
    <div class="movie-full">
        <div class="movie-full__img">
            <img
                :src="`https://image.tmdb.org/t/p/w400/${movie.poster_path}`"
                alt="movie poster"
            />
        </div>
        <div class="movie-full__main">
            <h1>{{ movie.original_title }}</h1>
            <h2>{{ movie.tagline }}</h2>

            <p>{{ movie.overview }}</p>

            <div class="movie-full__cast">
                <h3>Main Cast</h3>
                <Actor
                    v-for="actor in cast"
                    :key="actor.cast_id"
                    :name="actor.name"
                    :character="actor.character"
                    :picture="actor.profile_path"
                />
            </div>
        </div>
        <div class="movie-full__info">
            <div class="duration">
                <span class="movie-full__info--title">Duration</span>
                <hr />
                <span class="movie-full__info--value">
                    <svg class="movie-full__info--icon">
                        <use xlink:href="@/assets/svg/sprite.svg#hourglass" />
                    </svg>
                    {{ movie.runtime }} min
                </span>
            </div>
            <div class="ratings">
                <span>Ratings</span>
                <hr />
                <span class="movie-full__info--value">
                    <svg class="movie-full__info--icon">
                        <use xlink:href="@/assets/svg/sprite.svg#favourite" />
                    </svg>
                    {{ movie.vote_average }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Actor from './Actor'

export default {
    components: { Actor },
    data() {
        return {
            movie: {},
            cast: {}
        }
    },
    methods: {
        getMovieDetails() {
            const url = `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=64b38e386e59e75bcda8fe947b4f9be2&language=en-US`
            axios.get(url).then(res => (this.movie = res.data))
        },
        getCast() {
            const url = `https://api.themoviedb.org/3/movie/${this.$route.params.id}/credits?api_key=64b38e386e59e75bcda8fe947b4f9be2`
            axios.get(url).then(res => (this.cast = res.data.cast.slice(0, 5)))
        }
    },
    mounted() {
        this.getMovieDetails()
        this.getCast()
    }
}
</script>

<style lang="scss">
.movie-full {
    display: grid;
    grid-template-columns: 40rem 1fr 24rem;

    &__img {
        width: 40rem;
        height: 60rem;
        background-color: #444;
        overflow: hidden;
        border-radius: 0.7rem;
    }

    &__main {
        padding: 0 4rem;

        h1 {
            font-family: 'Proza Libre', sans-serif;
            font-size: 3.6rem;
            font-weight: 700;
        }

        h2 {
            font-size: 1.6rem;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.15rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.6rem;
        }
    }

    &__info {
        font-size: 1.2rem;
        letter-spacing: 0.15rem;
        text-transform: uppercase;

        .duration {
            margin-bottom: 3rem;
        }

        &--value {
            display: flex;
            align-items: center;
        }

        &--icon {
            fill: #fff;
            width: 3rem;
            height: 3rem;
            margin: 0 1rem;
        }

        hr {
            border: 0;
            width: 100%;
            height: 1px;
            margin: 1rem 0;
            background-image: linear-gradient(
                to right,
                rgba(120, 120, 120, 0),
                rgba(120, 120, 120, 0.8),
                rgba(120, 120, 120, 0)
            );
        }
    }

    &__cast {
        margin: 2rem 0;

        h3 {
            font-family: 'Proza Libre', sans-serif;
            font-size: 2rem;
        }
    }
}
</style>
