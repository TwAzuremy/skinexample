<template>
    <div class="settings">
        <div class="settings-searchBox">
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
        <div class="settings-panel">
            <panel title="自定义外观">
                <settings-option title="整体外观" description="适用于全局颜色设置" model="dropdown" :extension="true" :condition="3"
                    :data="['跟随系统', '浅色模式', '深色模式', '自定义']">
                    <div class="custom-extension color-selector">
                        <ul class="left">
                            <li>
                                <p>主题</p>
                            </li>
                            <li>
                                <p>主要颜色</p>
                            </li>
                            <li>
                                <p>第三颜色</p>
                            </li>
                            <li>
                                <p>面板颜色</p>
                            </li>
                            <li>
                                <p>字体颜色</p>
                            </li>
                        </ul>
                        <ul class="middle">
                            <li style="visibility: hidden;"></li>
                            <li style="background-color: #F6F8FA;"></li>
                            <li style="background-color: #4091FF;"></li>
                            <li style="background-color: #FFFFFF;"></li>
                            <li style="background-color: #212121;"></li>
                        </ul>
                        <ul class="right">
                            <li>
                                <dropdown :data="['默认', '浅色', '深色', 'One Dark', 'Ocean']" :maxItemShow="3"></dropdown>
                            </li>
                            <li><input-box ph="输入十六进制颜色" defaultValue="#F6F8FA"></input-box></li>
                            <li><input-box ph="输入十六进制颜色" defaultValue="#4091FF"></input-box></li>
                            <li><input-box ph="输入十六进制颜色" defaultValue="#FFFFFF"></input-box></li>
                            <li><input-box ph="输入十六进制颜色" defaultValue="#212121"></input-box></li>
                        </ul>
                    </div>
                </settings-option>
            </panel>
            <panel title="设置卡展示">
                <div class="settings-option-container">
                    <settings-option title="下拉菜单" description="适用于多种选择" model="dropdown"
                        :data="['选项 1', '选项 2', '选项 3', '选项 4']"></settings-option>
                    <settings-option title="开关" description="适用于打开或关闭某个项目" model="switch"></settings-option>
                </div>
            </panel>
        </div>
    </div>
</template>
    
<script>
import inputBox from '@/components/inputBox.vue'
import panel from '@/components/panel.vue'
import SettingsOption from '@/components/settingsOption.vue'
import dropdown from '@/components/dropdown.vue'

export default {
    name: "Settings",
    components: {
        inputBox, panel, SettingsOption, dropdown
    }
}
</script>

<style lang="scss">
@import "../global.scss";

.settings {
    @include rows();
    margin-top: 12px;

    &-searchBox {
        @include rows();
        @include center();
    }

    .input-box {
        width: 60%;
    }

    .settings-option-container {
        @include rows();

        .settings-option:not(:first-child) {
            margin-top: 8px;
        }
    }

    .panel {
        .color-selector {
            @include cols();

            .left,
            .middle,
            .right {
                @include rows();

                li:not(:first-child) {
                    margin-top: 8px;
                }
            }

            .left {
                flex: 1;

                li {
                    flex: 1;
                }

                p {
                    line-height: 40px;
                    font-size: 14px;
                    font-weight: 600;
                }
            }

            .middle {
                margin-right: 8px;

                li {
                    width: 40px;
                    height: 40px;
                    border: 1px solid rgba($font-color, $alpha: .2);
                    border-radius: 4px;
                }
            }

            .right {
                li {
                    flex: 1;
                }

                input,
                .input-box {
                    width: 100%;
                }
            }
        }
    }

    .panel:not(:first-child) {
        margin-top: 16px;
    }
}
</style>