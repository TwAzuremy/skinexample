<template>
    <div class="input-box">
        <slot name="prefix-svg"></slot>
        <input :type="type" :placeholder="ph" ref="inputBox" v-model="value">
        <svg @click="clear" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'InputBox',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        ph: {
            type: String,
            default: ''
        },
        defaultValue: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            value: this.defaultValue
        }
    },
    methods: {
        clear() {
            this.value = ''
        }
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.input-box {
    position: relative;

    input {
        width: 100%;
        border: none;
        outline: none;
        min-height: 40px;
        font-size: 16px;
        color: $font-color;
        padding: 0 32px 0 12px;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba($color: #000000, $alpha: 0.08);

        +svg {
            position: absolute;
            top: 50%;
            right: 8px;
            transform: translateY(-50%);
            color: rgba($font-color, $alpha: .6);
            cursor: pointer;
            transition: color .2s ease-in-out;

            &:hover {
                color: $red;
            }
        }

        &:placeholder-shown+svg {
            display: none;
        }
    }

    svg {
        &:has(+input) {
            position: absolute;
            top: 50%;
            left: 8px;
            transform: translateY(-50%);
            color: $font-color;
            opacity: .6;
            transition: all .2s;
        }

        &:has(+input:focus) {
            color: $minorBg;
            opacity: 1;
        }

        +input {
            padding: 0 32px;
        }
    }
}
</style>