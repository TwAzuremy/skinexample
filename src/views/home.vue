<template>
    <div class="home">
        <div class="row row-1">
            <home-card title="欢迎">
                <p>欢迎使用<!-- Minecraft Skin Storage Warehouse. --> Unknown Name Project. 👏</p>
                <p>敬请期待... 🎉</p>
            </home-card>
            <home-card title="进度" dividerColor="#C785C8">
                <p>所有页面初步施工完毕, 正在施工一些小细节... 🚚</p>
            </home-card>
        </div>
        <div class="row row-2">
            <home-card title="通知" dividerColor="#8389E0">
                <p>暂无通知 🍟</p>
            </home-card>
        </div>
    </div>
</template>

<script>
import homeCard from "@/components/homeCard.vue";

export default {
    name: "Home",
    components: {
        homeCard
    }
}
</script>

<style lang="scss">
@import "../global.scss";

.home {
    height: 100%;
    padding: 12px 0;
    @include cols();
    gap: 12px;
    font-family: var(--font-family);

    .row {
        @include rows();
        gap: 12px;
    }
}
</style>