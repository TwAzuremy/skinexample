<template>
    <div class="drawers" :class="{ 'open': openPanel }" v-show="isVisiable">
        <div class="top">
            <a class="back button" @click="auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevron-right">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </a>
        </div>
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Drawers',
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            openPanel: this.isOpen,
            isVisiable: this.isOpen
        }
    },
    methods: {
        open(isOpen = false) {
            this.openPanel = isOpen
            this.isVisiable = isOpen ? true : setTimeout(() => { this.isVisiable = false; }, 300);
        },
        auto() {
            this.open(!this.openPanel)
        }
    },
    mounted() {
    }
})
</script>

<style lang="scss">
@import '../global.scss';

.drawers {
    @include rows();
    position: absolute;
    padding: 12px 24px 12px 12px;
    background-color: $panelBg;
    width: 500px;
    height: 100%;
    top: 0;
    left: calc(100% + 16px);
    box-shadow: -2px 0 4px rgba($color: #000000, $alpha: .08);
    animation: close .3s ease-in-out forwards;

    .top {
        .button {
            @include button();
            color: rgba($font-color, $alpha: .6);

            &:hover {
                color: $minorBg;
            }
        }

        margin-bottom: 12px;
    }

    &.open {
        animation: open .3s ease-in-out forwards;
    }

    @keyframes open {
        0% {
            display: flex;
        }

        10% {
            left: calc(100% + 16px);
        }

        100% {
            left: calc(100% - 500px + 16px);
        }
    }

    @keyframes close {
        0% {
            left: calc(100% - 500px + 16px);
        }

        90% {
            left: calc(100% + 16px);
        }

        100% {
            display: none;
        }
    }
}
</style>