<template>
    <div class="skin-view3d">
        <div class="skin-top">
            <dropdown :data="['自动检测', 'Steve', 'Alex']"></dropdown>
            <dropdown :data="['无动作', '站立', '行走', '跑步', '游泳']" @dd-select="viewerControl.initializeAnimation"></dropdown>
        </div>
        <div class="canvas-container">
            <canvas id="skin3dContainer" ref="skin3dContainer"></canvas>
            <div class="canvas-control">
                <a class="animation-button stop" @click="viewerControl.animationPlay()">
                    <svg v-show="!play" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-pause">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                    <svg v-show="play" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-play">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </a>
                <a class="animation-button rotate" @click="viewerControl.autoRotate()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-rotate-ccw">
                        <polyline points="1 4 1 10 7 10"></polyline>
                        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from '@/components/dropdown.vue';

import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';

export default defineComponent({
    name: 'SkinView3d',
    components: {
        Dropdown
    },
    props: {
        skin: {
            type: String,
            default: require('@/assets/skin/Steve.png')
        }
    },
    emits: [
        'dd-select'
    ],
    setup(props) {
        const skin3dContainer = ref(null)
        const skin = ref(props.skin)
        var play = ref(true)
        const skinAnimations = [
            null,
            new skinview3d.IdleAnimation(),
            new skinview3d.WalkingAnimation(),
            new skinview3d.RunningAnimation(),
            new skinview3d.FlyingAnimation()
        ];
        let skinViewer

        function initializeViewer() {
            skinViewer = new skinview3d.SkinViewer({
                canvas: skin3dContainer.value
            })
            skinViewer.width = 300
            skinViewer.height = 400
            loadSkin(skin.value)
        }

        function loadSkin(skin) {
            skinViewer.loadSkin(skin)
        }

        const viewerControl = {
            initializeAnimation: (numb) => {
                skinViewer.animation = skinAnimations[numb] || null;
                play.value = true
            },
            animationPlay: () => {
                const paused = skinViewer.animation?.paused
                if (paused === null || paused === undefined) {
                } else {
                    play.value = !play.value
                    !play.value ? skinViewer.autoRotate = false : null
                    skinViewer.animation.paused = !play.value
                }
            },
            autoRotate: () => {
                skinViewer.autoRotate = !skinViewer.autoRotate
            }
        }

        onMounted(() => {
            if (skin3dContainer.value) {
                initializeViewer()
            }
        })

        onBeforeUnmount(() => {
            skinViewer.dispose()
        })

        return {
            skin3dContainer, skin, loadSkin, play, viewerControl
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
    }

    .canvas-container {
        position: relative;
        margin: 12px 0;
        @include cols();
        @include center();
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);

        .canvas-control {
            position: absolute;
            top: 8px;
            right: 8px;
            @include cols();
            gap: 8px;

            .animation-button {
                @include button();
                color: rgba($font-color, $alpha: .6);

                &:hover {
                    color: $minorBg;
                }
            }
        }
    }
}
</style>