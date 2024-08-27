<template>
    <div :class="{ 'overlay-load-progress': showProgress }">
        <v-progress-circular v-if="showProgress"
        color="grey-darken-3"
        indeterminate
        ></v-progress-circular>
    </div>
</template>

<style scoped lang="scss">
.overlay-load-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #ffffff80;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1500;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
}
</style>

<script>
export default {
    data() {
        return {
            showProgress: false,
        }
    },
    methods: {
        showProgressLoader() {
            this.showProgress = true;
            setTimeout(() => {
                this.showProgress = false;
            }, 2000)
        }
    }
}
</script>
