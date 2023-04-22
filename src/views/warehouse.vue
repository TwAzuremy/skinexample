<template>
    <div class="warehouse">
        <div class="up">
            <input-box ph="输入关键词">
                <template v-slot:prefix-svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-search">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </template>
            </input-box>
        </div>
        <div class="ce">
            <div class="left">
                <dropdown :data="['全部', 'Steve', 'Alex']"></dropdown>
                <dropdown :data="['最新发布', '最多收藏', '最多点赞']"></dropdown>
            </div>
            <pagination class="right" :total="30"></pagination>
        </div>
        <div class="down">
            <skin-box></skin-box>
        </div>
    </div>
</template>
    
<script>
import inputBox from '@/components/inputBox.vue';
import Dropdown from '@/components/dropdown.vue';
import Pagination from '@/components/pagination.vue';
import SkinBox from '@/components/skinBox.vue';

export default {
    name: "Warehouse",
    components: {
        inputBox, Dropdown, Pagination, SkinBox
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.warehouse {
    @include rows();
    align-items: center;

    .up {
        margin: 2em 0;
        width: 60%;
    }

    .ce {
        @include cols();
        justify-content: space-between;
        width: 100%;

        .left {
            @include cols();

            .dropdown:not(:first-child) {
                margin-left: 12px;
            }
        }
    }

    .down {
        @include cols();
        width: 100%;
        margin-top: 12px;
    }
}
</style>