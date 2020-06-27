<template>
    <header class="header">
        <h1>Magalhães <span>Movie List</span></h1>
        <form action="#" class="search" v-if="!isMoviePage">
            <input
                type="text"
                class="search__input"
                placeholder="Search movies"
                v-model="searchInput"
            />
            <button class="search__button" @click="searchMovie">
                <svg class="search__icon">
                    <use xlink:href="@/assets/svg/sprite.svg#search"></use>
                </svg>
            </button>
        </form>
        <button
            @click="$router.go(-1)"
            class="return__button"
            v-if="isMoviePage"
        >
            &larr; Back to home
        </button>
    </header>
</template>

<script>
import bus from '@/bus'

export default {
    computed: {
        isMoviePage() {
            if (this.$route.params.id) return true
            else false
        },
        searchInput: {
            get() {
                return this.$store.state.searchInput
            },
            set(value) {
                // Em um projeto real não é uma boa prática. Ideal: refatorar p/ uma mutation
                this.$store.state.searchInput = value
            }
        }
    },
    methods: {
        searchMovie() {
            bus.$emit('searchTriggered')
        }
    }
}
</script>

<style lang="scss">
.header {
    display: flex;
    align-items: center;

    height: 7rem;
    width: 100%;

    padding: 0 5rem;

    background-color: #262626;

    h1 {
        font-size: 2.4rem;
        font-weight: 700;
        margin-right: 2rem;

        span {
            font-weight: 300;
        }
    }
}

.search {
    flex: 0 0 40%;

    display: flex;
    align-items: center;
    justify-content: center;

    &__input {
        font-family: inherit;
        font-size: 1.2rem;
        color: #222;
        background-color: #eee;
        border: none;
        padding: 0.7rem 2rem;
        border-radius: 100px;
        width: 90%;
        transition: all 0.2s;
        margin-right: -3.25rem;

        &:focus {
            outline: none;
            width: 100%;
        }

        &::-webkit-input-placeholder {
            font-weight: 100;
            color: #333;
        }
    }

    &__input:focus + &__button {
        background-color: #eee;
    }

    &__button {
        border: none;
        background-color: #eee;
        cursor: pointer;

        &:focus {
            outline: none;
        }

        &:active {
            transform: translateY(2px);
        }
    }

    &__icon {
        height: 2rem;
        width: 2rem;
        fill: #333;
    }
}

.return__button {
    flex: 0 0 50%;
    border: none;
    font-size: 2rem;
    background-color: transparent;
    color: #fff;
    outline: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}
</style>
