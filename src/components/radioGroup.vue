<template>
    <div class="radio-group" :class="direction">
        <label class="radio" v-for="(text, index) in data" :key="index" @click="select(text)">
            <input type="radio" :name="radioName" :checked="index === defaultChecked">
            <div class="radio-icon"></div>
            <span class="radio-text">{{ text }}</span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'RadioGroup',
    props: {
        data: {
            type: Array,
            default: ['']
        },
        defaultChecked: {
            type: Number,
            default: 0
        },
        radioName: {
            type: String
        },
        direction: {
            type: String,
            validator: function (value) {
                return ['horizontal', 'vertical'].indexOf(value) !== -1
            },
            default: 'horizontal'
        }
    },
    data() {
        return {
            selectValue: this.data[this.defaultChecked]
        }
    },
    methods: {
        select(value) {
            this.selectValue = value
        },
        getValue() {
            return this.selectValue
        }
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.radio-group {
    width: 100%;
    gap: 12px;

    &.horizontal {
        @include cols();
    }

    &.vertical {
        @include rows();
    }

    label {
        flex: 1;
        @include cols();
        @include center();
        gap: 8px;
        height: 40px;
        cursor: pointer;

        .radio-icon {
            position: relative;
            width: 20px;
            height: 20px;
            border: 2px solid var(--step-border);
            border-radius: 50%;
            color: var(--font-color-white);
            transition: color .2s ease-in-out,
                border-color .2s ease-in-out;

            &::before {
                position: absolute;
                content: '';
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 12px;
                height: 12px;
                background-color: var(--step-border);
                border-radius: 50%;
                opacity: 0;
                transition: opacity .15s ease-in-out,
                    background-color .2s ease-in-out;
            }
        }

        &:hover .radio-icon::before {
            opacity: 1;
        }

        .radio-text {
            font-size: 14px;
            font-family: var(--font-family);
        }
    }

    input[type="radio"] {
        display: none;
    }

    input[type="radio"]:checked {
        +.radio-icon {
            color: var(--minor-color);
            border-color: var(--minor-color);

            &::before {
                opacity: 1;
                background-color: var(--minor-color);
            }
        }
    }
}
</style>