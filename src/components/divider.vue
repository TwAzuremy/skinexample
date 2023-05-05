<template>
    <div class="divider"
        :style="{ 'width': width, 'height': height + 'px', 'border-radius': (height / 2) + 'px', 'background-color': color, 'opacity': opacity }"
        ref="divider"></div>
</template>

<script>
export default {
    name: 'divider',
    props: {
        height: {
            type: Number,
            default: 2
        },
        width: {
            type: String,
            default: '100%'
        },
        color: {
            type: String,
            default: '#212121'
        },
        opacity: {
            type: Number,
            default: 0.08
        }
    }
}
</script>

<style lang="scss">
.divider {
    margin: 8px 0;
}
</style>