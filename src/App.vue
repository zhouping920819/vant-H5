<template>
    <div id="app">
        <transition name="bounce">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

export default {
    name: 'app',
    data () {
        return {

        }
    },

    watch: {

    },
    components: {
    },

    mounted () {
        this.handle();

    },

    methods: {
        handle: function () {

        }

    }
}

</script>

<style lang="scss">

</style>
