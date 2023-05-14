<template>
    <ul class="stepper" ref="stepper">
        <li class="step" v-for="index in step" :key="index" @click="this.skip ? setStep(index) : null">
            <bubble location="top" :bubble="needStepName" :description="needStepName ? stepName[index - 1] : ''"></bubble>
            <div class="step-bullet" :style="{ '--progress-bar': `${((300 - 24 - step * 25) / (step - 1)) - 8}px` }">
                <span class="step-number">{{ index }}</span>
            </div>
            <a class="step-checked">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </a>
        </li>
    </ul>
</template>

<script>
import Bubble from './bubble.vue';

export default {
    name: 'Stepper',
    components: {
        Bubble
    },
    props: {
        step: {
            type: Number,
            default: 3
        },
        stepName: {
            type: Array,
            default: []
        },
        needStepName: {
            type: Boolean,
            default: false
        },
        skip: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            nowStep: 1,
            stepHTMLElement: []
        }
    },
    methods: {
        next() {
            this.stepHTMLElement[this.nowStep - 1].classList.add('turn')
            this.nowStep = Math.min(++this.nowStep, this.step)
        },
        prev() {
            if (this.nowStep === this.step) {
                this.stepHTMLElement[this.stepHTMLElement.length - 1].classList.remove('turn')
            }

            this.stepHTMLElement[this.nowStep - 2].classList.remove('turn')
            this.nowStep = Math.max(--this.nowStep, 0)
        },
        getStep() {
            return this.nowStep
        },
        setStep(number) {
            this.nowStep = number
            
            this.stepHTMLElement.forEach(element => element.classList.remove('turn'))

            if (number === 0) {
                return
            }

            for (let i = 0; i < number - 1; i++) {
                this.stepHTMLElement[i].classList.add('turn')
            }
        },
        init() {
            this.stepHTMLElement = this.$refs.stepper.querySelectorAll('li')
        }
    },
    mounted() {
        this.init()
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.stepper {
    @include cols();
    justify-content: space-between;
    width: 100%;
    font-family: var(--font-family);

    .step {
        position: relative;
        @include cols();
        @include center();
        cursor: pointer;
        user-select: none;

        &:hover {
            .bubble {
                opacity: .8;
                bottom: 140%;
            }
        }

        .step-bullet {
            @include cols();
            @include center();
            width: 24px;
            height: 24px;
            border: 2px solid var(--step-border);
            border-radius: 50%;
            transition: border-color .2s ease-in-out .1s;

            span {
                color: var(--step-border);
                font-size: 14px;
                font-weight: 500;
                line-height: 25px;
            }

            &::before,
            &::after {
                pointer-events: none;
                position: absolute;
                content: '';
                display: inline-block;
                top: 50%;
                transform: translateY(-50%);
                left: calc(24px + 4px);
                height: 4px;
                border-radius: 2px;
            }

            &::before {
                width: var(--progress-bar);
                background-color: var(--track-slot-color);
            }

            &::after {
                width: 0;
                background-color: var(--minor-color);
                transition: width .2s ease-in-out;
            }
        }

        &:last-child {

            .step-bullet::before,
            .step-bullet::after {
                display: none;
            }
        }

        .step-checked {
            position: absolute;
            top: 0;
            left: 0;
            @include cols();
            @include center();
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: var(--minor-color);
            color: var(--font-color-black);
            opacity: 0;
            transition: opacity .2s ease-in-out .1s;
        }

        &.turn {
            .step-bullet {
                border-color: var(--minor-color);
                opacity: 1;

                &::after {
                    opacity: 1;
                    width: var(--progress-bar);
                }
            }

            .step-checked {
                opacity: 1;
            }
        }
    }
}
</style>