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
            <div class="operation-button">
                <circle-icon-button class="backToTop" :class="{ 'show': backToTopRef }" @click="backtoTop"
                    description="回到顶部" location="left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-chevron-up">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </circle-icon-button>
                <circle-icon-button description="上传皮肤" location="left" @click="switchAddPanel(true)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-plus">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </circle-icon-button>
            </div>
        </div>
    </div>
    <masking class="warehouse-masking" ref="warehouseMasking">
        <add-skin-form ref="addSkinForm" title="添加皮肤" @close="switchAddPanel"></add-skin-form>
    </masking>
</template>
    
<script>
import inputBox from '@/components/inputBox.vue';
import Dropdown from '@/components/dropdown.vue';
import Pagination from '@/components/pagination.vue';
import SkinBox from '@/components/skinBox.vue';
import CircleIconButton from '@/components/circleIconButton.vue';
import Masking from '@/components/masking.vue';
import addSkinForm from '@/components/addSkinForm.vue';
import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue';

import { debounce } from '@/assets/js/debounce'
import { drawSkinCanvasToImg } from '@/assets/js/drawSkinCanvasToImg'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "Warehouse",
    components: {
        inputBox, Dropdown, Pagination, SkinBox, CircleIconButton, Masking, addSkinForm
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

        let backToTopRef = ref(false);

        const handleScroll = () => {
            backToTopRef.value = skinContainer.value.scrollTop > 200
        }

        const backtoTop = () => {
            skinContainer.value.scrollTop = 0
        }

        const warehouseMasking = ref(null)
        const addSkinForm = ref(null)

        const switchAddPanel = (switchOpen) => {
            warehouseMasking.value.switchMasking(switchOpen)
            switchOpen ? addSkinForm.value.$el.classList.add('open') : addSkinForm.value.$el.classList.remove('open')
        }

        const canvas = document.createElement('canvas')
        canvas.height = 240
        canvas.width = 180

        const windowWidth = ref(window.innerWidth)
        const debouncedResizeHandler = debounce(initSkinContainer, 500)
        const debouncedScrollHandler = debounce(handleScroll, 250)

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

            skinContainer.value.addEventListener('scroll', debouncedScrollHandler)
            window.addEventListener('resize', debouncedResizeHandler)
        })

        onUnmounted(() => {
            window.removeEventListener('resize', debouncedResizeHandler)
            console.clear()
        })

        return {
            skinList, skinContainerList, fillWidth,
            skinContainer, windowWidth, toSkinDisplay,
            backToTopRef, backtoTop, warehouseMasking,
            switchAddPanel, addSkinForm
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
        overflow-y: auto;
        scroll-behavior: smooth;

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

        .operation-button {
            position: fixed;
            right: 32px;
            bottom: 20px;
            pointer-events: none;
            @include rows();
            gap: 12px;

            .circle-icon-button {
                pointer-events: auto;
                opacity: .9;
            }

            .backToTop {
                opacity: 0;
                transform: scale(0.1);
                transition: transform .2s ease-in-out,
                    opacity .2s ease-in-out;

                &.show {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        }
    }
}

.warehouse-masking {
    @include cols();
    @include center();

    .add-skin-form {
        transform: scale(0.1);
        opacity: 0;
        transition: transform .25s ease-in-out,
            opacity .25s ease-in-out;

        &.open {
            transform: scale(1);
            opacity: 1;
        }
    }
}
</style>