<template>
    <div class="skin-box">
        <img :src="imgURL" :title="title">
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import 'minecraft-skin-render'

export default defineComponent({
    name: 'SkinBox',
    props: {
        skin: {
            type: String
        },
        title: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const imgURL = ref('')
        const canvas = document.createElement('canvas')
        canvas.dataset.skin = props.skin
        canvas.height = 240
        canvas.width = 180
        skinRender.skin3d(canvas)

        onMounted(() => {
            setTimeout(() => {
                imgURL.value = canvas.toDataURL('image/png')
            }, 1000);
        })

        return { imgURL }
    }
})
</script>

<style lang="scss">
@import '../global.scss';

.skin-box {
    @include cols();
    @include center();
    background-color: $panelBg;
    box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);
    border-radius: 8px;
    min-width: 196px;
    min-height: 256px;
    padding: 8px;

    img {
        width: 180px;
        height: 240px;
        user-select: none;
    }
}
</style>