<template>
    <div class="skin-view3d">
        <div class="skin-top">
            <dropdown v-if="!text" :data="['自动检测', 'Steve', 'Alex']" ref="dropdownSkinModel"
                @dd-select="viewerControl.switchModels">
            </dropdown>
            <span v-if="text" class="skin-title">{{ text }}</span>
            <dropdown :data="['无动作', '站立', '行走', '跑步', '游泳']" @dd-select="viewerControl.initializeAnimation"></dropdown>
        </div>
        <div class="canvas-container" ref="canvasContainer">
            <canvas id="skin3dContainer" ref="skin3dContainer"></canvas>
            <div class="canvas-control">
                <icon-button class="animation-button stop" @click="viewerControl.animationPlay()">
                    <template v-slot:svg>
                        <svg v-show="play" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-pause">
                            <rect x="6" y="4" width="4" height="16"></rect>
                            <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>
                        <svg v-show="!play" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" class="feather feather-play">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </template>
                </icon-button>
                <icon-button class="animation-button rotate" @click="viewerControl.autoRotate()">
                    <template v-slot:svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-rotate-ccw">
                            <polyline points="1 4 1 10 7 10"></polyline>
                            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                        </svg>
                    </template>
                </icon-button>
                <icon-button class="animation-button download" @click="download(skin)">
                    <template v-slot:svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-download">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </template>
                </icon-button>
            </div>
        </div>
        <div class="param-container">
            <slider-box ref="actionAnimationSpeed" text="动作动画速度" :min="0" :max="3" :step="0.1" :val="1"></slider-box>
            <slider-box ref="rotateAnimationSpeed" text="旋转动画速度" :min="0" :max="3" :step="0.1" :val="2"></slider-box>
        </div>
    </div>
</template>

<script>
import Dropdown from '@/components/dropdown.vue';
import IconButton from '@/components/iconButton.vue';
import SliderBox from '@/components/slider.vue';

import { defineComponent, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

export default defineComponent({
    name: 'SkinView3d',
    components: {
        Dropdown,
        IconButton,
        SliderBox
    },
    props: {
        skin: {
            type: String,
            default: require('@/assets/skin/Steve.png')
        },
        text: {
            type: String,
            default: ''
        }
    },
    emits: [
        'dd-select'
    ],
    setup(props) {
        const skin3dContainer = ref(null)
        const skin = ref(props.skin)
        const play = ref(false)
        const skinAnimations = [
            null,
            new skinview3d.IdleAnimation(),
            new skinview3d.WalkingAnimation(),
            new skinview3d.RunningAnimation(),
            new skinview3d.FlyingAnimation()
        ];
        let lastAnimation = null;
        const actionAnimationSpeed = ref(null)
        const rotateAnimationSpeed = ref(null)
        const dropdownSkinModel = ref(null)
        let skinViewer
        let stopWatching
        const skinModel = [
            'auto-detect', 'default', 'slim'
        ]
        const canvasContainer = ref(null)

        function initializeViewer() {
            skinViewer = new skinview3d.SkinViewer({
                canvas: skin3dContainer.value
            })

            reloadSkin(skin.value)
        }

        function reloadSkin(skin_input) {
            skin.value = skin_input
            setTimeout(() => {
                skinViewer.width = canvasContainer.value.offsetWidth - 16
                skinViewer.height = canvasContainer.value.offsetHeight - 16
            }, 100)

            skinViewer.loadSkin(skin.value, {
                model: skinModel[dropdownSkinModel.value?.getIndex() ?? 0]
            })
        }

        const viewerControl = {
            initializeAnimation: (numb) => {
                skinViewer.animation = skinAnimations[numb] || null;
                const paused = skinViewer.animation?.paused !== undefined

                if (paused || skinViewer.autoRotate) {
                    play.value = true
                    paused ? skinViewer.animation.paused = false : null
                    paused ? skinViewer.animation.speed = actionAnimationSpeed.value.value : null
                } else {
                    play.value = false
                }
            },
            animationPlay: () => {
                const paused = skinViewer.animation?.paused !== undefined

                if (skinViewer.autoRotate || (paused && !skinViewer.animation.paused)) {
                    if (skinViewer.autoRotate && paused) {
                        lastAnimation = 'both'
                    } else if (skinViewer.autoRotate) {
                        lastAnimation = 'rotate'
                    } else if (paused && !skinViewer.animation.paused) {
                        lastAnimation = 'action'
                    }

                    skinViewer.autoRotate = false
                    paused ? skinViewer.animation.paused = true : null
                    play.value = false
                } else {
                    if (lastAnimation === 'rotate') {
                        skinViewer.autoRotate = true
                        play.value = true
                    } else if (lastAnimation === 'action' && paused) {
                        paused ? skinViewer.animation.paused = false : null
                        play.value = true
                    } else if (lastAnimation === 'both') {
                        skinViewer.autoRotate = true
                        paused ? skinViewer.animation.paused = false : null
                        play.value = true
                    }

                    lastAnimation = null
                }
            },
            autoRotate: () => {
                skinViewer.autoRotate = !skinViewer.autoRotate

                const paused = skinViewer.animation?.paused !== undefined
                play.value = skinViewer.autoRotate || (paused && !skinViewer.animation.paused)
            },
            switchModels: () => {
                reloadSkin(skin.value)
            }
        }

        const download = (picLink, name = 'skin') => {
            let a = document.createElement('a')
            a.href = picLink
            a.download = name
            a.click()
        }

        onMounted(() => {
            if (skin3dContainer.value) {
                initializeViewer()
            }
        })

        nextTick(() => {
            stopWatching = watch([() => actionAnimationSpeed.value && actionAnimationSpeed.value.value, () => rotateAnimationSpeed.value && rotateAnimationSpeed.value.value],
                ([newActionAnimationVal, newRotateAnimationVal], [oldActionAnimationVal, oldRotateAnimationVal]) => {
                    if (newActionAnimationVal !== oldActionAnimationVal) {
                        const paused = skinViewer.animation?.speed !== undefined
                        paused ? skinViewer.animation.speed = newActionAnimationVal : null
                    }

                    if (newRotateAnimationVal !== oldRotateAnimationVal) {
                        skinViewer.autoRotateSpeed = newRotateAnimationVal
                    }
                })
        })

        onBeforeUnmount(() => {
            skinViewer.dispose()
            nextTick(() => {
                stopWatching && stopWatching()
            })
        })

        return {
            skin3dContainer, skin, reloadSkin, play, viewerControl, actionAnimationSpeed, rotateAnimationSpeed, skinModel, dropdownSkinModel, canvasContainer, download
        }
    }
})
</script>

<style lang="scss">
@import '../global.scss';

.skin-view3d {
    @include rows();

    .skin-top {
        @include cols();
        justify-content: space-between;

        .dropdown {
            z-index: 1;
        }

        .skin-title {
            @include cols();
            align-items: center;
            font-weight: 600;
            color: $font-color;
        }
    }

    .canvas-container {
        position: relative;
        flex: 1;
        margin: 12px 0;
        @include cols();
        @include center();
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);
        background-color: $panelBg;

        .canvas-control {
            position: absolute;
            top: 0;
            right: 0;
            padding: 8px;
            @include cols();
            gap: 8px;
            background-color: $panelBg;
            border-radius: 0 4px 0 4px;

            .animation-button {
                color: rgba($font-color, $alpha: .6);

                &:hover {
                    color: $minorBg;
                }

                &.download:hover {
                    color: $green;
                }
            }
        }
    }

    .param-container {
        .slider-box:not(:first-child) {
            margin-top: 12px;
        }
    }
}
</style>