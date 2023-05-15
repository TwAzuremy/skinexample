<template>
    <div class="dropdown" :data-select="selectIndex">
        <input type="text" readonly :value="inputValue" @click="show('auto')">
        <a class="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-chevron-up">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        </a>
        <ul class="dropdown-item" :class="{ 'unfold': dropdownShow }"
            :style="{ height: (dropdownShow ? (setHeight > actualHeight ? actualHeight : setHeight) : 0) + 'px' }">
            <li class="item" v-for="( value, index ) in    this.data   " :class="{ 'select': index === this.selectIndex }"
                @click="show(false); selectValue(value, index); $emit('dd-select', index);">
                {{ value }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    props: {
        data: {
            type: Array,
            default: []
        },
        default: {
            type: Number,
            default: 0
        },
        maxItemShow: {
            type: Number,
            default: 5
        }
    },
    data() {
        return {
            dropdownShow: false,
            actualHeight: this.data.length * 36 + (this.data.length - 1) * 8 + 16,
            setHeight: this.maxItemShow * 36 + (this.data.length - 1) * 8 + 16,
            inputValue: this.data[this.default],
            selectIndex: this.default
        }
    },
    methods: {
        /**
         * 
         * @param {Boolean} isShow 
         */
        show(isShow) {
            this.dropdownShow = isShow === 'auto' ? !this.dropdownShow : isShow
        },
        selectValue(value, index) {
            this.inputValue = value

            this.selectIndex = index
        },
        getIndex() {
            return this.selectIndex
        },
        getValue() {
            return this.inputValue
        }
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.dropdown {
    position: relative;

    input {
        box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);
        padding-right: 32px;
        color: var(--font-color-white);
        background-color: var(--panel-background);
        user-select: none;
        cursor: pointer;
    }

    >.svg-container {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
        opacity: .6;
        pointer-events: none;

        svg {
            color: var(--font-color-white);
            transform: rotate(0);
            transition: transform .2s ease-in-out;
        }

        &:has(+.dropdown-item.unfold) svg {
            transform: rotate(180deg);
        }
    }

    .dropdown-item {
        width: 100%;
        position: absolute;
        top: 110%;
        background-color: var(--panel-background);
        padding: 8px;
        border-radius: 4px;
        box-shadow: 0 0 4px rgba($color: #000000, $alpha: .08);
        overflow-x: hidden;
        overflow-y: scroll;
        opacity: 0;
        pointer-events: none;
        z-index: 10;
        transition: opacity .3s linear,
            height .2s ease-in-out;

        &::-webkit-scrollbar {
            width: 0 !important;
        }

        &::-webkit-scrollbar {
            width: 0 !important;
            height: 0;
        }

        &.unfold {
            pointer-events: auto;
            opacity: 1;
        }

        .item {
            width: 100%;
            padding: 8px;
            border-radius: 4px;
            font-size: 14px;
            line-height: 20px;
            color: var(--font-color-white);
            cursor: pointer;
            transition: background-color .1s linear,
                color .08s linear,
                opacity .1s linear;

            &:not(:first-child) {
                margin-top: 8px;
            }

            &:hover {
                background-color: var(--minor-color);
                color: var(--font-color-black);
                opacity: .7;
            }

            &.select {
                background-color: var(--minor-color);
                color: var(--font-color-black);
                opacity: 1;
            }
        }
    }
}
</style>