<template>
    <div class="skin-box" :data-author="author">
        <span class="skin-title" :title="title">{{ title }}</span>
        <img :src="skin" :alt="title">
        <div class="skin-info">

        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SkinBox',
    props: {
        skin: {
            type: String
        },
        title: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        model: {
            type: String,
            validator: function (value) {
                return ['alex', 'steve'].indexOf(value) !== -1
            },
            default: 'steve'
        },
        like: {
            type: Number,
            default: 0
        },
        favorite: {
            type: Number,
            default: 0
        }
    },
    setup() {

    }
})
</script>

<style lang="scss">
@import '../global.scss';

.skin-box {
    @include rows();
    @include center();
    background-color: $panelBg;
    box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);
    border-radius: 8px;
    min-width: 196px;
    min-height: 256px;
    padding: 8px;

    span.skin-title {
        width: 100%;
        line-height: 30px;
        text-align: center;
        font-size: 16px;
        color: $font-color;
        background-color: $scrollerbarBg;
        border-radius: 4px;
    }

    img {
        width: 180px;
        height: 240px;
        user-select: none;
    }
}
</style>