<template>
    <label class="icon-button">
        <slot name="svg"></slot>
        <span v-if="text !== ''" class="text">{{ text }}</span>
    </label>
</template>

<script>
export default {
    name: 'iconButton',
    props: {
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.icon-button {
    @include button();
    color: var(--font-color-white);
    font-size: 14px;

    .text {
        font-weight: 600;
        margin-left: 8px;
        font-family: var(--font-family);
    }
}
</style>