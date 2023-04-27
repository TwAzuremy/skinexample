<template>
    <div class="skin-box" :data-author="author">
        <span class="skin-title" :title="title">{{ title }}</span>
        <img :src="skin" :alt="title" @click="img">
        <div class="skin-info warehouseStyle" v-if="'warehouse' === showModel">
            <span class="model info-left" :class="model">{{ model }}</span>
            <div class="info-right">
                <icon-button class="like-icon" :text="like">
                    <template v-slot:svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-thumbs-up">
                            <path
                                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
                            </path>
                        </svg>
                    </template>
                </icon-button>
                <icon-button class="favorite-icon" :text="favorite">
                    <template v-slot:svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-star">
                            <polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                            </polygon>
                        </svg>
                    </template>
                </icon-button>
            </div>
        </div>
        <div class="skin-info favoriteStyle" v-if="'favorite' === showModel">
            <icon-button class="button edit-icon" @click="edit">
                <template v-slot:svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-edit">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                </template>
            </icon-button>
            <icon-button class="button view-icon">
                <template v-slot:svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-search">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </template>
            </icon-button>
            <icon-button class="button delete-icon">
                <template v-slot:svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-trash-2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                </template>
            </icon-button>
        </div>
    </div>
</template>

<script>
import IconButton from '@/components/iconButton.vue';

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'SkinBox',
    props: {
        showModel: {
            type: String,
            validator: function (value) {
                return ['warehouse', 'favorite'].indexOf(value) !== -1
            },
            default: 'warehouse'
        },
        originalSkin: {
            type: String
        },
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
    components: {
        IconButton
    },
    methods: {
        edit() {
            this.$emit('editEvent', 1)
        },
        img() {
            this.$emit('imgEvent', this.originalSkin)
        }
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
        height: 30px;

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

            .icon-button {
                color: rgba($font-color, $alpha: .4);

                &.like-icon {
                    margin-right: 4px;
                }

                &:hover {
                    &.like-icon {
                        color: rgba($red, $alpha: 1);
                    }

                    &.favorite-icon {
                        color: rgba($yellow, $alpha: 1);
                    }
                }
            }
        }

        &.favoriteStyle {
            height: 34px;
            justify-content: flex-end;
            gap: 8px;
        }

        .button {
            justify-content: center;
            color: rgba($font-color, $alpha: .6);

            &:hover {
                color: $minorBg;
            }

            &.delete-icon:hover {
                color: $red;
            }
        }
    }
}
</style>