<template>
    <div class="favorite">
        <div class="top">
            <div class="top">
                <dropdown :data="['全部', 'Steve', 'Alex']"></dropdown>
                <pagination :total="10" :mostDisplayed="3"></pagination>
            </div>
        </div>
        <div class="fav-container">
            <div class="skin-container">
                <skin-box v-for="(skin, index) in skinList" :key="index" :skin="skin.imgURL" showModel="favorite"
                    :title="skin.alias" :clickData="skin.skin" @imgEvent="openSkinView3d"></skin-box>
            </div>
        </div>
        <drawers ref="drawersRef" :isOpen="false">
            <skin-view3d ref="skinView3dRef"></skin-view3d>
        </drawers>
    </div>
</template>
    
<script>
import Dropdown from '@/components/dropdown.vue';
import Pagination from '@/components/pagination.vue';
import SkinBox from '@/components/skinBox.vue';
import Drawers from '@/components/drawers.vue';
import SkinView3d from '@/components/skinView3d.vue';
import { defineComponent, ref, onMounted, computed, onUnmounted } from 'vue';

import { drawSkinCanvasToImg } from '@/assets/js/drawSkinCanvasToImg'
import { useStore } from 'vuex';

export default defineComponent({
    name: "Favorite",
    components: {
        Dropdown, Pagination, SkinBox, Drawers, SkinView3d
    },
    setup() {
        const data = computed(() => useStore().state.favorite.skinData)
        let skinList = data.value;

        const canvas = document.createElement('canvas')
        canvas.height = 240
        canvas.width = 180

        const drawersRef = ref(null)
        const skinView3dRef = ref(null)

        function openDrawers() {
            drawersRef.value.open(true)
        }

        function openSkinView3d(data) {
            openDrawers()
            skinView3dRef.value.reloadSkin(data)
        }

        onMounted(() => {
            skinList = drawSkinCanvasToImg(canvas, skinList)
        })

        onUnmounted(() => {
            console.clear()
        })

        return { skinList, drawersRef, openDrawers, openSkinView3d, skinView3dRef }
    }
})
</script>

<style lang="scss">
@import '../global.scss';

.favorite {
    @include rows();
    width: 100%;
    height: 100%;
    padding-top: 12px;
    font-family: $global-font-family;

    .top {
        width: 100%;
        @include cols();
        justify-content: space-between;
    }

    .fav-container {
        flex: 1;
        overflow-y: scroll;
        @include scroll();
        margin: 12px 0;

        .skin-container {
            @include cols();
            flex-wrap: wrap;
            gap: 12px;

            .skin-box {
                min-width: 220px;
            }
        }
    }

    .skin-view3d {
        height: 100%;
    }
}
</style>