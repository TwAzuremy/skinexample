<template>
    <div class="add-skin-form">
        <div class="add-skin-form-titleBar">
            <h3 class="add-skin-form-title">{{ title }}</h3>
            <a class="add-skin-form-closeButton" @click="setStep(1); handleClick()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-x">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </a>
        </div>
        <stepper ref="stepper" :needStepName="true" :step="4" :stepName="['步骤 1', '步骤 2', '步骤 3', '步骤 4', '步骤 5']">
        </stepper>
        <div class="add-skin-form-container">

        </div>
        <div class="add-skin-form-button">
            <a class="add-skin-form-prev-button" @click="prevStep()" v-if="!thefirst">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevron-left">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span>上一个</span>
            </a>
            <a class="add-skin-form-next-button" @click="nextStep()" v-if="!thelast">
                <span>下一个</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevron-right">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </a>
            <a class="add-skin-form-submit-button" v-if="thelast">
                <span>提交</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
import Stepper from './stepper.vue';

import { nextTick, onUnmounted, ref, watch, getCurrentInstance } from 'vue';

export default {
    name: 'addSkinForm',
    components: {
        Stepper
    },
    props: {
        title: {
            type: String
        }
    },
    setup() {
        const { emit } = getCurrentInstance()
        
        const stepper = ref(null)
        const stepNumber = 4
        const thelast = ref(false)
        const thefirst = ref(true)

        const nextStep = () => {
            stepper.value.next()
        }

        const prevStep = () => {
            stepper.value.prev()
        }

        const setStep = (number) => {
            stepper.value.setStep(number)
        }

        const updateStep = () => {
            thefirst.value = stepper.value.getStep() <= 1
            thelast.value = stepper.value.getStep() >= stepNumber
        }

        const handleClick = () => {
            emit('close', false)
        }

        let stopWatching

        nextTick(() => {
            stopWatching = watch(() => stepper.value?.getStep?.(), () => {
                if (stepper.value?.getStep?.()) {
                    updateStep()
                }
            })
        })

        onUnmounted(() => {
            nextTick(() => {
                stopWatching && stopWatching()
            })
        })

        return {
            stepper, stepNumber, thelast,
            thefirst, nextStep, prevStep,
            setStep, handleClick
        }
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.add-skin-form {
    @include rows();
    gap: 16px;
    padding: 12px;
    background-color: var(--panel-background);
    border-radius: 8px;
    box-shadow: 0 0 4px rgba($color: #000000, $alpha: .08);
    width: 300px;

    &-titleBar {
        @include cols();
        align-items: center;

        .add-skin-form-title {
            flex: 1;
            color: var(--font-color-white);
        }

        .add-skin-form-closeButton {
            @include button();

            &:hover {
                color: $red;
            }
        }
    }

    &-button {
        @include cols();
        gap: 12px;
        user-select: none;

        >a {
            flex: 1;
            @include button();
            @include center();
            gap: 12px;

            span {
                font-size: 14px;
                line-height: 20px;
            }

            &:hover {
                color: var(--minor-color);
            }
        }
    }
}
</style>