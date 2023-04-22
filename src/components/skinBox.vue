<template>
    <div class="skin-box">
        <canvas id="skin-container"></canvas>
    </div>
</template>

<script>
export default {
    name: 'SkinBox',
    data() {
        return {

        }
    },
    methods: {
        initializeViewer() {
            const skinViewer = new skinview3d.SkinViewer({
                canvas: document.getElementById("skin-container")
            })

            skinViewer.width = 180
            skinViewer.height = 240
            skinViewer.loadSkin(require('@/assets/skin/azuremy.png'))
            skinViewer.controls.enableRotate = false
            skinViewer.controls.enableZoom = false
        }
    },
    mounted() {
        this.initializeViewer()
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.skin-box {
    background-color: $panelBg;
    box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);
    border-radius: 8px;
    min-width: 180px;
    min-height: 240px;
}
</style>