<template>
    <div class="information-list">
        <p class="information-title">{{ title }}</p>
        <div class="information-show">
            <template v-for="(val, key, index) in info" :key="index">
                <div class="information-row">
                    <h3 class="information-row-title">{{ key }}</h3>
                    <span class="information-row-info">{{ val }}</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'informationList',
    props: {
        title: {
            type: String,
            default: '信息列表'
        },
        info: {
            type: Map,
            default: {}
        }
    },
    setup() {

    }
}
</script>

<style lang="scss">
@import '../global.scss';

.information {

    &-list,
    &-show {
        @include rows();
    }

    &-list {
        box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);
    }

    &-title {
        @include cols();
        align-items: center;
        background-color: $minorBg;
        height: 40px;
        padding: 12px;
        font-size: 18px;
        font-weight: 600;
        color: $font-color-dark;
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
    }

    &-show {
        padding: 12px;
        background-color: $panelBg;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    &-row {
        @include cols();
        align-items: center;

        &-title {
            flex: 1;
            font-weight: 500;
            font-size: 16px;
            line-height: 40px;
            margin-right: 12px;
        }

        &-info {
            flex: 2;
            font-size: 14px;
            white-space: nowrap;
        }
    }
}
</style>