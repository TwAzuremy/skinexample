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
            <panel title="语言">
                <settings-option title="默认语言" description="全局改变语言" model="dropdown"
                    :data="['简体中文', '繁体中文', 'English']"></settings-option>
            </panel>
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
                                        <span class="theme-preview-title">PREVIEW</span>
                                    </div>
                                </div>
                                <div class="theme-operation">
                                    <a class="theme-operation-button theme-random">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-refresh-cw">
                                            <polyline points="23 4 23 10 17 10"></polyline>
                                            <polyline points="1 20 1 14 7 14"></polyline>
                                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15">
                                            </path>
                                        </svg>
                                        <span>随机</span>
                                    </a>
                                    <a class="theme-operation-button theme-save" @click="saveTheme">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-save">
                                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z">
                                            </path>
                                            <polyline points="17 21 17 13 7 13 7 21"></polyline>
                                            <polyline points="7 3 7 8 15 8"></polyline>
                                        </svg>
                                        <span>保存</span>
                                    </a>
                                    <a class="theme-operation-button theme-add">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-plus">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                        <span>添加预选</span>
                                    </a>
                                </div>
                            </div>
                        </template>
                    </settings-option>
                    <settings-option title="字体样式" description="适用于全局字体样式" model="dropdown" :data="font" :func="changeFont"
                        :defaultData="1"></settings-option>
                    <settings-option title="背景图片" description="添加一张背景图片" model="custom">
                        <template v-slot:custom>
                            <input-box class="background-image" ph="图片 URL">
                                <template v-slot:prefix-svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-image">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                        <polyline points="21 15 16 10 5 21"></polyline>
                                    </svg>
                                </template>
                            </input-box>
                        </template>
                    </settings-option>
                </div>
            </panel>
            <panel title="皮肤库管理">
                <div class="settings-option-container">
                    <settings-option title="使用本地皮肤库" description="使用本地创建的皮肤库 (数据返回格式必须一致)" :extension="true"
                        :condition="true" model="switch">
                        <template v-slot:extension>
                            <div class="custom-extension localUrlInput">
                                <span class="localText">本地数据库</span>
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
                themeColor.value.background = color
            },
            changePanel: (color) => {
                themeColor.value.panel = color
            },
            changeFontLight: (color) => {
                themeColor.value.fontLight = color
            },
            changeFontDark: (color) => {
                themeColor.value.fontDark = color
            },
            changeMinor: (color) => {
                themeColor.value.minor = color
            },
        }

        const saveTheme = () => {
            document.documentElement.style.setProperty('--main-background', themeColor.value.background)
            document.documentElement.style.setProperty('--minor-color', themeColor.value.minor)
            document.documentElement.style.setProperty('--track-color', `${themeColor.value.minor}99`)
            document.documentElement.style.setProperty('--button-color', `${themeColor.value.minor}19`)
            document.documentElement.style.setProperty('--panel-background', themeColor.value.panel)
            document.documentElement.style.setProperty('--font-color-white', themeColor.value.fontLight)
            document.documentElement.style.setProperty('--border-color-default', `${themeColor.value.fontLight}66`)
            document.documentElement.style.setProperty('--border-color-hover', `${themeColor.value.fontLight}CC`)
            document.documentElement.style.setProperty('--step-border', `${themeColor.value.fontLight}99`)
            document.documentElement.style.setProperty('--font-color-black', themeColor.value.fontDark)
        }

        onMounted(() => {
            selectTheme('Light')
        })

        return {
            theme, entries, selectTheme, themeColor, to, changeFont, font, changeTheme, saveTheme
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
                        color: var(--font-color-white);
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
                    position: relative;
                    flex: 1;
                    @include cols();
                    @include center();
                    border-radius: 8px;
                    transition: background-color .2s ease-in-out;

                    .theme-preview-panel {
                        @include rows();
                        @include center();
                        gap: 12px;
                        width: 50%;
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

                    .theme-preview-title {
                        position: absolute;
                        top: 0;
                        left: 0;
                        border-bottom-right-radius: 8px;
                        background-color: var(--panel-background);
                        padding: 4px 8px;
                        font-size: 14px;
                        font-weight: 600;
                        color: var(--font-color-white);
                        box-shadow: 2px 2px 4px rgba($color: #000000, $alpha: .08);
                        user-select: none;
                    }
                }
            }

            .theme-operation {
                margin-top: 8px;
                width: 100%;
                @include cols();
                justify-content: flex-end;
                gap: 12px;

                .theme-operation-button {
                    @include button();
                    gap: 8px;
                    font-size: 14px;
                    box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);

                    &:hover {
                        color: var(--minor-color);
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
                color: var(--font-color-white);
            }

            .input-box {
                flex: 1;
            }
        }

        .background-image {
            max-width: 229px;
            width: 229px;
        }
    }

    .panel:not(:first-child) {
        margin-top: 16px;
    }
}
</style>