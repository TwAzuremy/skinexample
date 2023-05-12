<template>
    <div class="confirmation-box" :class="{ 'open': open }">
        <div class="confirmation-info">
            <div class="confirmation-icon">
                <svg v-if="type === 'info'" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-info">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <svg v-if="type === 'del'" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-delete">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
                <svg v-if="type === 'warn'" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-warning">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z">
                    </path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
            </div>
            <div class="confirmation-container">
                <div class="confirmation-titleBar">
                    <h3 class="confirmation-titleBar-title">{{ title }}</h3>
                    <a class="confirmation-titleBar-close" @click="close" v-if="!noCloseButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </a>
                </div>
                <div class="confirmation-content">
                    <p class="confirmation-description">
                        <slot name="description"></slot>
                    </p>
                </div>
            </div>
        </div>
        <div class="confirmation-button">
            <a class="confirmation-cancel" @click="cancel">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-x">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span>取消</span>
            </a>
            <a class="confirmation-confirm" @click="confirm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>确认</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConfirmationBox',
    props: {
        type: {
            type: String,
            default: 'info'
        },
        title: {
            type: String
        },
        noCloseButton: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        close() {
            this.$emit('closeEvent', false)
        },
        cancel() {
            this.$emit('cancelEvent', false)
        },
        confirm() {
            this.$emit('confirmEvent', true)
        },
        switchBox(bool) {
            this.open = bool
        }
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.confirmation {
    &-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.1);
        max-width: 300px;
        background-color: var(--panel-background);
        padding: 12px;
        border-radius: 8px;
        box-shadow: 0 0 4px rgba($color: #000000, $alpha: .08);
        font-family: var(--font-family);
        @include rows();
        gap: 12px;
        opacity: 0;
        transition: transform .25s ease-in-out,
            opacity .25s ease-in-out;

        &.open {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }

    &-info {
        @include cols();
        align-items: flex-start;
        gap: 8px;

        .confirmation-icon {
            padding: 8px 0;

            >svg {
                color: $blue;

                &.feather-info {
                    color: $blue;
                }

                &.feather-delete {
                    color: $red;
                }

                &.feather-warning {
                    color: $yellow;
                }
            }
        }

        .confirmation-container {
            flex: 1;
            @include rows();
            gap: 8px;
        }
    }

    &-titleBar {
        @include cols();
        align-items: center;
        gap: 8px;

        &-title {
            flex: 1;
            line-height: 36px;
            font-size: 18px;
            color: var(--font-color-white);
        }

        &-close {
            @include button();

            &:hover {
                color: $red;
            }
        }
    }

    &-description {
        font-size: 14px;
        color: var(--font-color-white);

        .confirmation-major {
            font-size: 16px;
            font-weight: 600;
            padding: 0 8px;
            color: $red;
        }
    }

    &-button {
        @include cols();
        margin-top: 8px;
        gap: 8px;

        >a {
            flex: 1;
            @include jump-button();
            gap: 8px;
            font-size: 14px;
        }
    }
}
</style>