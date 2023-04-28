<template>
    <div class="slider-box">
        <span class="slider-text">{{ text }}</span>
        <div class="container">
            <div class="slider-container">
                <p class="slider-value" ref="sliderProccess"></p>
                <input ref="slider" type="range" :min="min" :max="max" :step="step" :value="value">
            </div>
            <div class="slider-trimmer">
                <input ref="number" type="number" :min="min" :max="max" :value="value">
                <div class="slider-button-group">
                    <a class="slider-value-up" @click="numberControl.add">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-chevron-up">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </a>
                    <a class="slider-value-down" @click="numberControl.sub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';

export default defineComponent({
    name: 'SliderBox',
    props: {
        text: {
            type: String
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 5
        },
        step: {
            type: Number,
            default: 1
        },
        val: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        const slider = ref(null)
        const number = ref(null)
        const sliderProccess = ref(null)
        var value = ref(props.val)
        let stopWatching

        function sliderValueChange() {
            value.value = slider.value.value
        }

        function sliderProccessChange() {
            sliderProccess.value.style.width = ((value.value / props.max) * 100) + '%'
        }

        function checkDigit() {
            if (number.value.value === '') {
                return
            }

            var numbVal = Number(number.value.value)
            value.value = numbVal > props.max ? props.max : numbVal
        }

        const numberControl = {
            add() {
                value.value = Number((Math.min(Number(value.value) + props.step, props.max)).toFixed(1));
            },
            sub() {
                value.value = Number((Math.max(Number(value.value) - props.step, props.min)).toFixed(1));
            }
        }

        function getValue() {
            return value.value
        }

        onMounted(() => {
            sliderProccessChange()
            slider.value.addEventListener('input', sliderValueChange)
            number.value.addEventListener('input', checkDigit)
        })

        stopWatching = watch(value, (newVal, oldVal) => {
            sliderProccessChange()
        })

        onUnmounted(() => {
            stopWatching && stopWatching()
        })

        return {
            slider, number, sliderProccess, value, numberControl
        }
    }
})
</script>

<style lang="scss">
@import '../global.scss';

.slider-box {
    width: 100%;
    @include rows();

    .slider-text {
        color: $font-color;
        font-size: 14px;
        user-select: none;
    }

    .container {
        @include cols();
        width: 100%;
    }

    .slider-container {
        position: relative;
        width: 100%;
        @include cols();
        align-items: center;
    }

    input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        background-color: $scrollerbarBg;
        height: 6px;
        border-radius: 3px;

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            position: relative;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: $minorBg;
        }

        &::-webkit-slider-runnable-track {
            -webkit-appearance: none;
        }
    }

    .slider-value {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        height: 6px;
        border-radius: 3px;
        background-color: rgba($minorBg, $alpha: .6);
        pointer-events: none;
    }

    .slider-trimmer {
        position: relative;
        margin-left: 12px;

        input[type="number"] {
            padding-right: 28px;
            font-size: 18px;
            color: $font-color;
            border: 1px solid rgba($font-color, $alpha: .4);
            transition: border-color .2s ease-in-out;

            &:hover {
                border-color: rgba($font-color, $alpha: .8);
            }

            &:focus {
                border-color: $minorBg;
            }

            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
            }
        }

        .slider-button-group {
            position: absolute;
            top: 0;
            right: 0;
            @include rows();
            height: 40px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;

            a {
                flex: 1;
                @include cols();
                @include center();
                padding: 0 4px;
                color: $font-color;
                cursor: pointer;
                transition: color .2s ease-in-out;

                &:hover {
                    color: $minorBg;
                }
            }
        }
    }
}
</style>