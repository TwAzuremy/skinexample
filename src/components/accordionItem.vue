<template>
    <div class="accordion-item" :style="{ '--first-color': `rgba(${rgb}, 0.97)` }">
        <header class="accordion-header">
            <svg class="feather feather-plus accordion-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <h3 class="accordion-title">{{ title }}</h3>
        </header>
        <div class="accordion-content">
            <div class="accordion-description">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AccordionItem',
    props: {
        title: {
            type: String
        },
        rgb: {
            type: String,
            default: '128, 128, 128'
        }
    }
})
</script>

<style lang="scss">
@import '../global.scss';

.accordion {
    &-title {
        font-size: 14px;
        color: var(--font-color-white);
        font-weight: 400;
        line-height: 20px;
        transition: font-weight .2s, color .2s;
    }

    &-header {
        @include cols();
        column-gap: .5rem;
        padding: 1.25rem 1.25rem 1.25rem 1rem;
        cursor: pointer;
    }

    &-description {
        padding: 0 1.25rem 1.25rem 3rem;
        font-size: 14px;
    }

    &-icon {
        color: var(--font-color-white);
        transition: transform .3s, color .3s;
    }

    &-item {
        position: relative;
        box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);
        border-radius: 8px;
        background-color: var(--panel-background);
        transition: all .25s ease;

        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            border-radius: 8px 0 0 8px;
            background-color: var(--first-color);
        }

        &.accordion-open .accordion-header {
            .accordion-icon {
                transform: rotate(45deg);
                color: var(--minor-color);
            }

            .accordion-title {
                font-weight: 600;
                color: var(--minor-color);
            }
        }
    }

    &-content {
        overflow: hidden;
        height: 0;
        transition: all .25s ease;
    }
}
</style>