<template>
    <div class="masking" :class="{ 'open': open }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Masking',
    data() {
        return {
            open: false
        }
    },
    methods: {
        switchMasking(bool) {
            this.open = bool
        }
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.masking {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(0);
    transition: backdrop-filter .2s ease-in-out;
    pointer-events: none;
    z-index: 999;

    &.open {
        backdrop-filter: blur(6px);
        pointer-events: auto;
    }
}
</style>