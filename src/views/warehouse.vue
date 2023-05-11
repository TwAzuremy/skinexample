<template>
    <div class="warehouse">
        <div class="up">
            <input-box ph="输入关键词">
                <template v-slot:prefix-svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-search">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </template>
            </input-box>
        </div>
        <div class="ce">
            <div class="left">
                <dropdown :data="['全部', 'Steve', 'Alex']"></dropdown>
                <dropdown :data="['最新发布', '最多收藏', '最多点赞']"></dropdown>
            </div>
            <pagination class="right" :total="30"></pagination>
        </div>
        <div class="down" ref="skinContainer">
            <ul class="skin-container">
                <li class="container" v-for="(row, i) in skinContainerList" :key="i">
                    <skin-box :style="{ 'min-width': (196 + fillWidth) + 'px' }" v-for="(col, j) in row" :key="j"
                        :skin="col.imgURL" :title="col.title" :model="col.model" :uploadAuthor="col.author" :clickData="col"
                        @imgEvent="toSkinDisplay"></skin-box>
                </li>
            </ul>
        </div>
    </div>
</template>
    
<script>
import inputBox from '@/components/inputBox.vue';
import Dropdown from '@/components/dropdown.vue';
import Pagination from '@/components/pagination.vue';
import SkinBox from '@/components/skinBox.vue';
import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue';

import { debounce } from '@/assets/js/debounce'
import { drawSkinCanvasToImg } from '@/assets/js/drawSkinCanvasToImg'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "Warehouse",
    components: {
        inputBox, Dropdown, Pagination, SkinBox
    },
    setup() {
        const skinList = computed(() => useStore().state.skin.skinData)
        const skinContainerList = ref([])
        const fillWidth = ref(0)
        const skinContainer = ref(null)
        const router = useRouter()

        function initSkinContainer() {
            const component_width = 196 + 12
            const container_width = skinContainer.value.clientWidth - 24
            const max_col_capacity = Math.floor(container_width / component_width)
            fillWidth.value = ((container_width + 12) / max_col_capacity - component_width)
            const max_row_capacity = Math.ceil(skinList.value.length / max_col_capacity)
            const last_row_col_count = skinList.value.length % max_col_capacity || max_col_capacity

            skinContainerList.value = []
            let start = 0

            for (let i = 0; i < max_row_capacity; i++) {
                const row = []

                let end = start + max_col_capacity
                if (i === max_row_capacity - 1) {
                    end = start + last_row_col_count
                }

                for (; start < end && start < skinList.value.length; start++) {
                    row.push(skinList.value[start])
                }

                skinContainerList.value.push(row)
            }
        }

        const canvas = document.createElement('canvas')
        canvas.height = 240
        canvas.width = 180

        const windowWidth = ref(window.innerWidth)
        const debouncedResizeHandler = debounce(initSkinContainer, 500)

        const toSkinDisplay = function (data) {
            router.push({
                name: 'skinDisplay',
                state: {
                    skin: data.skin,
                    name: data.title,
                    author: data.author,
                    model: data.model,
                    time: data.uploadTime
                }
            })
        }

        onMounted(() => {
            skinList.value = drawSkinCanvasToImg(canvas, skinList.value)
            initSkinContainer()

            window.addEventListener('resize', debouncedResizeHandler)
        })

        onUnmounted(() => {
            window.removeEventListener('resize', debouncedResizeHandler)
            console.clear()
        })

        return {
            skinList, skinContainerList, fillWidth, skinContainer, windowWidth, toSkinDisplay
        }
    }
})
</script>

<style lang="scss">
@import '../global.scss';

.warehouse {
    @include rows();
    align-items: center;
    height: 100%;
    font-family: var(--font-family);

    .up {
        @include rows();
        margin: 2em 0;
        width: 60%;
    }

    .ce {
        @include cols();
        justify-content: space-between;
        width: 100%;

        .left {
            @include cols();

            .dropdown {
                z-index: 1;
            }

            .dropdown:not(:first-child) {
                margin-left: 12px;
            }
        }
    }

    .down {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 12px 0;
        overflow-x: hidden;
        overflow-y: scroll;

        .skin-container {
            position: absolute;
            top: 0;
            left: 0;
            @include rows();
            width: 100%;
            padding-right: 8px;
            padding-bottom: 12px;
        }

        &::-webkit-scrollbar {
            width: 8px;
            background-color: var(--track-slot-color);
            border-radius: 4px;
            transform: translateX(100px);
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: var(--track-color);
        }


        .container {
            @include cols();
            justify-content: flex-start;
            width: 100%;

            &:not(:first-child) {
                margin-top: 12px;
            }

            .skin-box:not(:first-child) {
                margin-left: 12px;
            }
        }
    }
}
</style>