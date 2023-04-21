<template>
    <div class="divider" ref="divider"></div>
</template>

<script>
export default {
    name: 'divider',
    props: {
        width: {
            type: String,
            default: '100%'
        },
        color: {
            type: String,
            default: '#212121'
        }
    },
    mounted () {
        this.$refs.divider.style.setProperty('width', this.width)
        this.$refs.divider.style.setProperty('background-color', this.color)
    }
}
</script>

<style lang="scss">
.divider {
    height: 2px;
    border-radius: 1px;
    margin: 8px 0;
    opacity: .15;
}
</style>