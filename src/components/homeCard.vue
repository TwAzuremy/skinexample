<template>
    <div class="home-card" :style="{ '--topColor': dividerColor }">
        <h3 class="card-title">{{ title }}</h3>
        <divider width="20%" :color="dividerColor" :opacity="0.6"></divider>
        <div class="card-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Divider from "@/components/divider.vue";

export default {
    name: "homeCard",
    components: {
        Divider
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        dividerColor: {
            type: String,
            default: '#4091ff'
        }
    }
}
</script>

<style lang="scss">
@import "../global.scss";

.home-card {
    min-width: 180px;
    @include rows();
    box-shadow: 0 2px 4px rgba(0, 0, 0, .08);
    padding: 12px;
    border-radius: 8px;
    border-top: 4px solid var(--topColor);
    background-color: $panelBg;

    .card-title {
        margin-bottom: 4px;
        font-size: 18px;
        color: $font-color;
        user-select: none;
    }

    .card-container {
        padding: 12px 0;
        font-size: 14px;
        color: $font-color;
    }
}
</style>