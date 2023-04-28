<template>
    <div class="accordion">
        <div class="accordion-container" ref="accordionContainer">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { defineComponent, nextTick, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'Accordion',
    setup() {
        const accordionContainer = ref(null)

        function getAccordionItems() {
            return accordionContainer.value.querySelectorAll('.accordion-item')
        }

        function getAccordionItemOpen() {
            return accordionContainer.value.querySelector('.accordion-open')
        }

        onMounted(() => {
        })

        return {
            accordionContainer, getAccordionItems, getAccordionItemOpen
        }
    }
})
</script>

<style lang="scss">
@import '../global.scss';

.accordion {
    display: grid;
    align-content: center;

    &-container {
        display: grid;
        row-gap: .75rem;
        padding: 12px 0;
    }
}
</style>