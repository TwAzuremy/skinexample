<template>
    <a v-if="bubble" class="bubble" :class="location">{{ description }}</a>
</template>

<script>
export default {
    name: 'Bubble',
    props: {
        description: {
            type: String
        },
        bubble: {
            type: Boolean,
            default: true
        },
        location: {
            type: String,
            default: 'left'
        }
    }
}
</script>

<style lang="scss">
@import '../global.scss';

a.bubble {
    position: absolute;
    white-space: nowrap;
    background-color: var(--panel-background);
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 14px;
    color: var(--minor-color);
    box-shadow: 0 0 4px rgba($color: #000000, $alpha: .08);
    opacity: 0;
    transition: all .2s ease-in-out;
    pointer-events: none;
    user-select: none;

    &::after {
        content: '';
        position: absolute;
    }

    &.left {
        top: 50%;
        right: 100%;
        transform: translateY(-50%);

        &::after {
            top: 50%;
            right: -4.5px;
            width: 8px;
            height: 8px;
            box-shadow: 2px -2px 4px rgba($color: #000000, $alpha: .08);
            background-color: var(--panel-background);
            transform: translateY(-50%) rotate(45deg);
        }
    }

    &.right {
        top: 50%;
        left: 100%;
        transform: translateY(-50%);

        &::after {
            top: 50%;
            left: -4.5px;
            width: 8px;
            height: 8px;
            box-shadow: -2px 2px 4px rgba($color: #000000, $alpha: .08);
            background-color: var(--panel-background);
            transform: translateY(-50%) rotate(45deg);
        }
    }

    &.top {
        left: 50%;
        bottom: 100%;
        transform: translateX(-50%);

        &::after {
            bottom: -4.5px;
            left: 50%;
            width: 8px;
            height: 8px;
            box-shadow: 2px 2px 4px rgba($color: #000000, $alpha: .08);
            background-color: var(--panel-background);
            transform: translateX(-50%) rotate(45deg);
        }
    }

    &.bottom {
        left: 50%;
        top: 100%;
        transform: translateX(-50%);

        &::after {
            top: -4.5px;
            left: 50%;
            width: 8px;
            height: 8px;
            box-shadow: -2px -2px 4px rgba($color: #000000, $alpha: .08);
            background-color: var(--panel-background);
            transform: translateX(-50%) rotate(45deg);
        }
    }
}
</style>