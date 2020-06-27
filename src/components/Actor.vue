<template>
    <div class="actor">
        <a :href="`https://image.tmdb.org/t/p/w200${picture}`" target="_blank">
            <span class="actor-name">
                {{ name }}
            </span>
        </a>
        as
        <span class="character">{{ character }}</span>
    </div>
</template>

<script>
export default {
    props: ['name', 'character', 'picture']
}
</script>

<style lang="scss">
.actor {
    display: flex;
    font-size: 1.2rem;
    margin: 0.5rem 0;

    a {
        text-decoration: none;
        color: #fff;
    }
}

.actor-name {
    text-decoration: underline;
    margin-right: 1rem;
}

.character {
    margin-left: 1rem;
}
</style>
