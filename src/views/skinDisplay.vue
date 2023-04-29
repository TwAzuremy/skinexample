<template>
    <div class="skinDisplay">
        <div class="skin-container">
            <skin-view3d ref="skinView3dRef" :width="375" :height="500" :skin="state.skin" text="材质预览"></skin-view3d>
            <div class="infoList-container">
                <information-list :info="info"></information-list>
            </div>
        </div>
        <a class="backButton" @click="goBack">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-chevron-left">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </a>
    </div>
</template>

<script>
import informationList from '@/components/informationList.vue'
import SkinView3d from '@/components/skinView3d.vue';

import { onUnmounted } from 'vue';

export default {
    name: 'SkinDisplay',
    components: {
        SkinView3d, informationList
    },
    setup() {
        const state = history.state
        const info = {
            '皮肤名称': state.name,
            '皮肤模型': state.model,
            '上传作者': state.author,
            '上传时间': state.time
        }

        function goBack() {
            if (window.history.length > 1) {
                window.history.back()
            }
        }

        onUnmounted(() => {
            console.clear()
        })

        return {
            state, info, goBack
        }
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.skinDisplay {
    position: relative;
    height: 100%;
    @include cols();

    .skin-container {
        @include cols();
        justify-content: center;
        height: 100%;
        width: 100%;
        padding: 12px 0;

        .skin-view3d {
            flex: 3;

            .skin-title {
                margin-left: 52px;
            }
        }

        .infoList-container {
            flex: 1;
            margin-left: 12px;
        }
    }

    .backButton {
        position: absolute;
        top: 12px;
        left: 0;
        @include button();
        color: $font-color;
        box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);
        background-color: $panelBg;

        &:hover {
            color: $minorBg;
        }
    }
}
</style>