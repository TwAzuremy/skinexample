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
                    :title="skin.alias" :clickData="skin.skin" @imgEvent="openSkinView3d"
                    @delEvent="openDelConfirmation(true, skin.alias, skin.model)"></skin-box>
            </div>
        </div>
        <drawers ref="drawersRef" :isOpen="false">
            <skin-view3d ref="skinView3dRef"></skin-view3d>
        </drawers>
    </div>
    <masking class="favorite-masking" ref="favoriteMasking">
        <confirmation-box ref="favoriteConfirmation" :closeTitleBar="true" type="del" :noCloseButton="true"
            @cancelEvent="switchConfirmation">
            <template v-slot:description>
                是否确认将名为<span class="skin-name">{{ delInfo.name }}</span>的<span class="skin-model">{{ delInfo.model
                }}</span>模型的皮肤从库中<span class="confirmation-major">删除</span>.
            </template>
        </confirmation-box>
    </masking>
</template>
    
<script>
import Dropdown from '@/components/dropdown.vue';
import Pagination from '@/components/pagination.vue';
import SkinBox from '@/components/skinBox.vue';
import Drawers from '@/components/drawers.vue';
import SkinView3d from '@/components/skinView3d.vue';
import Masking from '@/components/masking.vue';
import ConfirmationBox from '@/components/confirmationBox.vue';
import { defineComponent, ref, onMounted, computed, onUnmounted } from 'vue';

import { drawSkinCanvasToImg } from '@/assets/js/drawSkinCanvasToImg'
import { useStore } from 'vuex';

export default defineComponent({
    name: "Favorite",
    components: {
        Dropdown, Pagination, SkinBox, Drawers, SkinView3d, Masking, ConfirmationBox
    },
    setup() {
        const data = computed(() => useStore().state.favorite.skinData)
        let skinList = data.value;
        const favoriteMasking = ref(null)
        const favoriteConfirmation = ref(null)
        const delInfo = {
            name: '',
            model: ''
        }

        function changeDelInfo(name, model) {
            delInfo.name = name
            delInfo.model = model
        }

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

        function switchConfirmation(switchOpen) {
            favoriteMasking.value.switchMasking(switchOpen)
            favoriteConfirmation.value.switchBox(switchOpen)
        }

        function openDelConfirmation(bool, name, model) {
            switchConfirmation(bool)
            changeDelInfo(name, model)
        }

        onMounted(() => {
            skinList = drawSkinCanvasToImg(canvas, skinList)
        })

        onUnmounted(() => {
            console.clear()
        })

        return {
            skinList, drawersRef, openDrawers,
            openSkinView3d, skinView3dRef, favoriteMasking,
            switchConfirmation, favoriteConfirmation, delInfo,
            openDelConfirmation
        }
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
    font-family: var(--font-family);

    .top {
        width: 100%;
        @include cols();
        justify-content: space-between;
    }

    .fav-container {
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
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

.favorite-masking {
    .confirmation-box {

        .skin-name,
        .skin-model {
            font-family: 'minecraft';
            font-size: 16px;
            padding: 0 8px;
        }

        .skin-name {
            color: $blue;
        }

        .skin-model {
            color: $green;
        }
    }
}
</style>