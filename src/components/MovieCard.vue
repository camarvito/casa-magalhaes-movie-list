<template>
    <div class="movie-card">
        <div class="movie-card__side movie-card__side--front">
            <img
                :src="`https://image.tmdb.org/t/p/w200${image}`"
                alt="movie-poster"
            />
        </div>
        <div class="movie-card__side movie-card__side--back">
            <h1>{{ title }}</h1>
            <div class="card__cta">
                <div class="card__rating-box">
                    <p class="card__rating-only">Rating</p>
                    <p class="card__rating-value">{{ rating }}</p>
                </div>
                <a :href="`/movie/${id}`" class="btn btn--white">See Details</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id', 'image', 'title', 'rating']
}
</script>

<style lang="scss">
.movie-card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;

    width: 20rem;
    height: 30rem;

    border-radius: 0.3rem;
    overflow: hidden;

    &__side {
        transition: all 0.8s ease;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        backface-visibility: hidden;

        &--front {
        }

        &--back {
            display: flex;
            flex-direction: column;
            padding: 2rem;
            height: 100%;
            align-items: center;
            justify-content: center;
            transform: rotateY(180deg);
            height: 100%;

            background-image: linear-gradient(
                to right bottom,
                #00b4db,
                #0083b0
            );

            h1 {
                text-align: center;
            }
        }
    }

    &:hover &__side--front {
        transform: rotateY(-180deg);
    }

    &:hover &__side--back {
        transform: rotateY(0deg);
    }
}

.card {
    &__rating-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;

        margin-bottom: 2rem;
    }

    &__rating-only {
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
    }

    &__rating-value {
        font-size: 2.4rem;
        font-weight: 300;
        letter-spacing: 0.1rem;
    }
}
.btn {
    &,
    &:link,
    &:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.125rem 3rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all 0.2s;
        position: relative;
        font-size: 1.6rem;

        border: none;
        cursor: pointer;
    }

    &--white {
        background-color: #fff;
        color: #777;

        &::after {
            background-color: #fff;
        }
    }
}
</style>
