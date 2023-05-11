<template>
    <div class="panel">
        <h3 class="panel-title">{{ title }}</h3>
        <div class="panel-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Panel',
    props: {
        title: {
            type: String
        }
    }
}
</script>

<style lang="scss">
@import "../global.scss";

.panel {
    @include rows();
    justify-content: flex-start;

    &-title {
        color: var(--font-color-white);
        font-size: 14px;
    }

    &-content {
        margin-top: 8px;
    }
}
</style>