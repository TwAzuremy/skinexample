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
                <div class="settings-option-container">
                    <settings-option title="整体外观" description="适用于全局颜色设置" model="dropdown" :extension="true" :condition="3"
                        :data="['跟随系统', '浅色模式', '深色模式', '自定义']">
                        <template v-slot:extension>
                            <div class="custom-extension color-selector">
                                <div class="theme-option">
                                    <label class="theme-default" v-for="[val, index] in entries(theme)" :key="index"
                                        @click="selectTheme(val[0])">
                                        <input type="radio" name="themeDefault" :checked="index === 0">
                                        <a class="theme-preview">
                                            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"
                                                class="feather feather-columns" stroke-linejoin="round"
                                                stroke-linecap="round">
                                                <rect stroke="currentColor" rx="4" stroke-width="4" height="60" width="24"
                                                    y="2" x="2" :fill="val[1][1]" />
                                                <rect rx="4" height="60" width="44" y="2" x="18" stroke-width="4"
                                                    stroke="currentColor" :fill="val[1][0]" />
                                                <line stroke="currentColor" y2="62" x2="18" y1="2" x1="18" stroke-width="4"
                                                    fill="none" />
                                            </svg>
                                        </a>
                                        <span class="theme-description">{{ val[0] }}</span>
                                    </label>
                                </div>
                                <divider></divider>
                                <div class="theme-customer">
                                    <ul class="theme-customer-text">
                                        <li>背景颜色</li>
                                        <li>卡片颜色</li>
                                        <li>浅色主题字体</li>
                                        <li>暗色主题字体</li>
                                        <li>第三色彩</li>
                                    </ul>
                                    <ul class="theme-customer-input">
                                        <li><input-box ph="十六进制颜色" :func="changeTheme.changeBackground"
                                                :defaultValue="themeColor.background"></input-box></li>
                                        <li><input-box ph="十六进制颜色" :func="changeTheme.changePanel"
                                                :defaultValue="themeColor.panel"></input-box></li>
                                        <li><input-box ph="十六进制颜色" :func="changeTheme.changeFontLight"
                                                :defaultValue="themeColor.fontLight"></input-box></li>
                                        <li><input-box ph="十六进制颜色" :func="changeTheme.changeFontDark"
                                                :defaultValue="themeColor.fontDark"></input-box></li>
                                        <li><input-box ph="十六进制颜色" :func="changeTheme.changeMinor"
                                                :defaultValue="themeColor.minor"></input-box></li>
                                    </ul>
                                    <div class="theme-preview" :style="{ 'background-color': themeColor.background }">
                                        <div class="theme-preview-panel" :style="{ 'background-color': themeColor.panel }">
                                            <p class="theme-preview-text" :style="{ 'color': themeColor.fontLight }">浅色主题字体
                                            </p>
                                            <p class="theme-preview-text" :style="{ 'color': themeColor.fontDark }">暗色主题字体
                                            </p>
                                            <p class="theme-preview-minor" :style="{ 'color': themeColor.minor }">第三色彩</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </settings-option>
                    <settings-option title="字体样式" description="适用于全局字体样式" model="dropdown" :data="font" :func="changeFont"
                        :defaultData="1"></settings-option>
                </div>
            </panel>
            <panel title="皮肤库管理">
                <div class="settings-option-container">
                    <settings-option title="使用本地皮肤库" description="使用本地创建的皮肤库 (数据返回格式必须一致)" :extension="true"
                        :condition="true" model="switch">
                        <template v-slot:extension>
                            <div class="custom-extension localUrlInput">
                                <span class="localText">本地 URL</span>
                                <input-box ph="请输入 URL">
                                    <template v-slot:prefix-svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-inbox">
                                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                            <path
                                                d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z">
                                            </path>
                                        </svg>
                                    </template>
                                </input-box>
                            </div>
                        </template>
                    </settings-option>
                </div>
            </panel>
            <panel title="设置卡展示">
                <div class="settings-option-container">
                    <settings-option title="下拉菜单" description="适用于多种选择" model="dropdown"
                        :data="['选项 1', '选项 2', '选项 3', '选项 4', '选项 5', '选项 6']"></settings-option>
                    <settings-option title="开关" description="适用于打开或关闭某个项目" model="switch"></settings-option>
                </div>
            </panel>
            <panel title="测试页面">
                <div class="settings-option-container">
                    <settings-option title="测试页面" description="跳转至 404 页面" model="custom">
                        <template v-slot:custom>
                            <a class="option-jump" @click="to('this_is_not_found')">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-arrow-left">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                <span>跳转至 404</span>
                            </a>
                        </template>
                    </settings-option>
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
import divider from '@/components/divider.vue'

import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex'

export default {
    name: "Settings",
    components: {
        inputBox, panel, SettingsOption, dropdown, divider
    },
    setup() {
        const theme = computed(() => useStore().state.theme.theme).value
        const themeColor = ref({
            background: '', panel: '', fontLight: '', fontDark: '', minor: ''
        })
        const font = [
            'Consolas',
            'Resource-Han-Rounded'
        ]

        function entries(map) {
            const result = []

            Object.entries(map).forEach((item, index) => {
                result.push([item, index])
            })

            return result
        }

        function selectTheme(key) {
            themeColor.value.background = theme[key][0]
            themeColor.value.panel = theme[key][1]
            themeColor.value.fontLight = theme[key][2]
            themeColor.value.fontDark = theme[key][3]
            themeColor.value.minor = theme[key][4]
        }

        function to(link) {
            window.location.href = window.location.href.replace('settings', link)
        }

        const changeFont = function (index) {
            document.documentElement.style.setProperty('--font-family', `'${font[index]}', 'Consolas', sans-serif`)
        }

        const changeTheme = {
            changeBackground: (color) => {
                themeColor.value.background = color.toUpperCase()
            },
            changePanel: (color) => {
                themeColor.value.panel = color.toUpperCase()
            },
            changeFontLight: (color) => {
                themeColor.value.fontLight = color.toUpperCase()
            },
            changeFontDark: (color) => {
                themeColor.value.fontDark = color.toUpperCase()
            },
            changeMinor: (color) => {
                themeColor.value.minor = color.toUpperCase()
            },
        }

        onMounted(() => {
            selectTheme('System')
        })

        return {
            theme, entries, selectTheme, themeColor, to, changeFont, font, changeTheme
        }
    }
}
</script>

<style lang="scss">
@import "../global.scss";

.settings {
    @include rows();
    margin-top: 24px;
    padding-bottom: 12px;
    font-family: var(--font-family);

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

        .option-jump {
            @include jump-button();
            align-items: center;
            gap: 8px;
            font-size: 14px;
        }
    }

    .panel {
        .color-selector {
            @include rows();
            padding: 12px 4px 4px;

            .theme-option {
                @include cols();
                gap: 12px;
                flex-wrap: wrap;

                .theme-default {
                    @include rows();
                    align-items: center;
                    padding: 8px;
                    border-radius: 4px;
                    transition: box-shadow .2s ease-in-out, transform .25s ease-in-out;

                    input[type="radio"] {
                        display: none;
                    }

                    .theme-description {
                        color: var(--font-color-white);
                        font-size: 14px;
                        font-weight: 600;
                        transition: color .2s ease-in-out;
                    }

                    &:hover,
                    &:has(input[type="radio"]:checked) {
                        transform: translateY(-4px);
                        box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .2);

                        .theme-description {
                            color: var(--minor-color);
                        }
                    }

                    svg {
                        color: var(--font-color-white);
                    }
                }

            }

            .theme-customer {
                @include cols();
                gap: 12px;

                ul {
                    @include rows();
                    gap: 8px;

                    &.theme-customer-text li {
                        font-size: 14px;
                        font-weight: 600;
                    }

                    &.theme-customer-input li {
                        @include cols();
                        justify-content: flex-end;
                    }

                    li {
                        line-height: 40px;
                        flex: 1;
                    }
                }

                .theme-preview {
                    flex: 1;
                    @include cols();
                    @include center();
                    border-radius: 8px;
                    transition: background-color .2s ease-in-out;

                    .theme-preview-panel {
                        @include rows();
                        @include center();
                        gap: 12px;
                        width: 80%;
                        height: 80%;
                        border-radius: 4px;
                        box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);
                        transition: background-color .2s ease-in-out;

                        .theme-preview-text,
                        .theme-preview-minor {
                            font-size: 16px;
                            font-weight: 600;
                            transition: color .2s ease-in-out;
                        }
                    }
                }
            }
        }

        .localUrlInput {
            @include cols();
            align-items: center;
            gap: 12px;

            .localText {
                font-size: 14px;
            }

            .input-box {
                flex: 1;
            }
        }
    }

    .panel:not(:first-child) {
        margin-top: 16px;
    }
}</style>