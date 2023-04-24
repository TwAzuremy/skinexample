<template>
    <div class="skin-box" :data-author="author">
        <span class="skin-title" :title="title">{{ title }}</span>
        <img :src="skin" :alt="title">
        <div class="skin-info">
            <span class="model info-left" :class="model">{{ model }}</span>
            <div class="info-right">
                <a class="like">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-thumbs-up">
                        <path
                            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
                        </path>
                    </svg>
                    <span class="data">{{ like }}</span>
                </a>
                <a class="favorite">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-star">
                        <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                        </polygon>
                    </svg>
                    <span class="data">{{ favorite }}</span>
                </a>
            </div>
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
                return ['Alex', 'Steve'].indexOf(value) !== -1
            },
            default: 'Steve'
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
        cursor: pointer;
    }

    .skin-info {
        @include cols();
        width: 100%;
        align-items: center;
        justify-content: space-between;

        .info-left {
            line-height: 30px;
            background-color: $scrollerbarBg;
            padding: 0 8px;
            border-radius: 4px;
            color: $font-color;
            font-size: 14px;

            &.Alex {
                background-color: $yellow;
            }

            &.Steve {
                background-color: $green;
            }
        }

        .info-right {
            @include cols();
            @include center();
            height: 100%;

            a {
                @include button();
                @include center();
                padding: 0 8px;
                height: 100%;
                color: rgba($font-color, $alpha: .4);

                svg {
                    margin-right: 4px;
                }

                &.like {
                    margin-right: 4px;
                }

                &:hover {
                    &.like {
                        color: rgba($red, $alpha: 1);
                    }

                    &.favorite {
                        color: rgba($yellow, $alpha: 1);
                    }
                }
            }
        }
    }
}
</style>