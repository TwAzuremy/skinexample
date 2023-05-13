<template>
    <div class="circle-icon-button">
        <a class="icon">
            <slot></slot>
        </a>
        <Bubble :description="description" :bubble="bubble" :location="location"></Bubble>
    </div>
</template>

<script>
import Bubble from './bubble.vue';

export default {
    name: 'CircleIconButton',
    components: {
        Bubble
    },
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

.circle-icon-button {
    position: relative;
    font-family: var(--font-family);
    cursor: pointer;

    a.icon {
        @include cols();
        @include center();
        width: 36px;
        height: 36px;
        border-radius: 50%;
        color: var(--font-color-black);
        background-color: var(--minor-color);
        box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);

        &:hover {
            +a.bubble {
                opacity: .8;

                &.left {
                    right: 130%;
                }

                &.right {
                    left: 130%;
                }

                &.top {
                    bottom: 130%;
                }

                &.bottom {
                    top: 130%;
                }
            }
        }
    }
}
</style>