<template>
    <div class="about">
        <accordion ref="accordion">
            <accordion-item title="关于" rgb="148, 216, 246">
                <div class="about-container">
                    <div class="author">
                        <img class="author-avatar" src="/img/author.png" alt="author avatar">
                        <div>
                            <span class="author-name">开发者: 天蔚 ( Azuremy )</span>
                            <span class="author-description">一边学习一边搭建 Web</span>
                        </div>
                        <a href="https://github.com/TwAzuremy" target="_blank" class="jumpButton">作者 Github</a>
                    </div>
                    <div class="project">
                        <img src="/img/project.jpg" alt="project image" class="project-img">
                        <div>
                            <span class="project-name">Minecraft Skin Storage Warehouse</span>
                            <span class="project-description">alpha 1.0</span>
                        </div>
                        <a href="https://github.com/TwAzuremy/skinexample" target="_blank" class="jumpButton">项目 Github</a>
                    </div>
                </div>
            </accordion-item>
            <accordion-item title="所用技术" rgb="248, 161, 164">
                <div class="component-source about-source">
                    <ul class="left">
                        <li class="source-name">
                            <div>
                                <img src="/img/vue.ico" alt="vue logo">
                                <span class="text">Vue 3</span>
                            </div>
                        </li>
                        <li class="source-name">
                            <div>
                                <img src="/img/sass.jpg" alt="sass logo">
                                <span class="text">Sass</span>
                            </div>
                        </li>
                        <li class="source-name">
                            <div>
                                <img src="/img/three.png" alt="three logo">
                                <span class="text">Three.js</span>
                            </div>
                        </li>
                        <li class="source-name" v-if="false">
                            <div>
                                <img src="/img/jquery.png" alt="jquery logo">
                                <span class="text">JQuery</span>
                            </div>
                        </li>
                    </ul>
                    <ul class="right">
                        <li class="source-content">
                            <span class="source-text">一款用于构建用户界面的 JavaScript 框架</span>
                            <div class="source-button-group">
                                <a href="https://cn.vuejs.org/" target="_blank" class="jumpButton">官网</a>
                                <a href="https://cn.vuejs.org/api/" target="_blank" class="jumpButton">API 文档</a>
                                <a href="https://github.com/vuejs/" target="_blank" class="jumpButton">Github</a>
                            </div>
                        </li>
                        <li class="source-content">
                            <span class="source-text">世界上最成熟、最稳定、最强大的专业级CSS扩展语言！</span>
                            <div class="source-button-group">
                                <a href="https://www.sass.hk/" target="_blank" class="jumpButton">官网</a>
                                <a href="https://www.sass.hk/docs/" target="_blank" class="jumpButton">API 文档</a>
                                <a href="https://github.com/sass" target="_blank" class="jumpButton">Github</a>
                            </div>
                        </li>
                        <li class="source-content">
                            <span class="source-text">该项目的目的是创建一个易于使用、轻量级、跨浏览器的通用 3D 库</span>
                            <div class="source-button-group">
                                <a href="https://threejs.org/" target="_blank" class="jumpButton">官网</a>
                                <a href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene" target="_blank" class="jumpButton">API 文档</a>
                                <a href="https://github.com/mrdoob/three.js/" target="_blank" class="jumpButton">Github</a>
                            </div>
                        </li>
                        <li class="source-content" v-if="false">
                            <span class="source-text">JQuery 是一个快速，小型且功能丰富的JavaScript库</span>
                            <div class="source-button-group">
                                <a href="https://jquery.com" target="_blank" class="jumpButton">官网</a>
                                <a href="https://jquery.cuishifeng.cn/" target="_blank" class="jumpButton">API 文档</a>
                                <a href="https://github.com/jquery/jquery" target="_blank" class="jumpButton">Github</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </accordion-item>
            <accordion-item title="素材来源" rgb="152, 224, 173">
                <div class="component-source about-source">
                    <ul class="left">
                        <li class="source-name">feather icon</li>
                        <li class="source-name">minecraft-skin-render</li>
                        <li class="source-name">skinview3d</li>
                        <li class="source-name">Minecraft PFP</li>
                        <li class="source-name">Resource-Han-Rounded</li>
                    </ul>
                    <ul class="right">
                        <li class="source-content">
                            <span class="source-text">Feather 是简单漂亮的开源图标的集合。每个图标都设计在 24x24 网格上，强调简单性、一致性和灵活性。</span>
                            <div class="source-button-group">
                                <a href="https://feathericons.com/" target="_blank" class="jumpButton">官网</a>
                                <a href="https://github.com/feathericons/feather" target="_blank"
                                    class="jumpButton">Github</a>
                            </div>
                        </li>
                        <li class="source-content">
                            <span class="source-text">我的世界皮肤渲染插件, 需要 Three.js 作为前置支持</span>
                            <div class="source-button-group">
                                <a href="https://www.npmjs.com/package/minecraft-skin-render" target="_blank"
                                    class="jumpButton">NPM</a>
                            </div>
                        </li>
                        <li class="source-content">
                            <span class="source-text">Three.js 驱动的我的世界皮肤查看器</span>
                            <div class="source-button-group">
                                <a href="https://github.com/bs-community/skinview3d" target="_blank"
                                    class="jumpButton">Github</a>
                                <a href="https://bs-community.github.io/skinview3d/" target="_blank"
                                    class="jumpButton">样例网站</a>
                            </div>
                        </li>
                        <li class="source-content">
                            <span class="source-text">生成我的世界个人资料图片的网站</span>
                            <div class="source-button-group">
                                <a href="https://minecraftpfp.com" target="_blank" class="jumpButton">官网</a>
                                <a href="https://github.com/MauritsWilke/mcpfp" target="_blank"
                                    class="jumpButton">Github</a>
                            </div>
                        </li>
                        <li class="source-content">
                            <span class="source-text">TrueType Font</span>
                            <div class="source-button-group">
                                <a href="https://github.com/CyanoHao/Resource-Han-Rounded" target="_blank" class="jumpButton">Github</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </accordion-item>
        </accordion>
    </div>
</template>

<script>
import Accordion from '@/components/accordion.vue';
import AccordionItem from '@/components/accordionItem.vue';

import { defineComponent, onMounted, onUnmounted, ref } from 'vue';

export default defineComponent({
    name: 'About',
    components: {
        Accordion,
        AccordionItem
    },
    setup() {
        const accordion = ref(null)

        function toggleItem(item) {
            const accordionContent = item.querySelector('.accordion-content')

            if (item.classList.contains('accordion-open')) {
                accordionContent.removeAttribute('style')
                item.classList.remove('accordion-open')
                return
            }

            accordionContent.style.height = accordionContent.scrollHeight + 'px'
            item.classList.add('accordion-open')
        }

        function initAccordionEventListener() {
            const accordionContainer = accordion.value.getAccordionItems()

            accordionContainer.forEach((item) => {
                item.querySelector('.accordion-header').addEventListener('click', () => {
                    const openItem = accordion.value.getAccordionItemOpen()

                    toggleItem(item)

                    if (openItem && openItem !== item) {
                        toggleItem(openItem)
                    }
                })
            })

            toggleItem(accordionContainer[0])
        }

        onMounted(() => {
            initAccordionEventListener()
        })

        onUnmounted(() => {

        })

        return {
            accordion
        }
    }
})
</script>

<style lang="scss">
@import '../global.scss';

a.jumpButton {
    @include jump-button();
}

.about {
    font-family: $global-font-family;
}

.about-container {
    @include rows();

    .author,
    .project {
        @include cols();
        align-items: center;

        .author-avatar,
        .project-img {
            width: 36px;
            height: 36px;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);
        }

        >div {
            flex: 1;
            @include rows();
            height: 36px;
            margin: 0 12px;

            >span {
                flex: 1;
            }
        }

        .author-name,
        .project-name {
            align-items: flex-start;
            font-weight: 600;
            color: $font-color;
            font-size: 15px;
        }

        .author-description,
        .project-description {
            align-items: flex-end;
            color: rgba($font-color, $alpha: .6);
            font-size: 12px;
        }


        a {
            max-height: 36px;
        }
    }

    .project {
        margin-top: 12px;
    }
}

.about-source {
    @include cols();
    color: $font-color;

    .left {
        @include rows();
        align-items: flex-start;

        .source-name {
            flex: 1;
            font-size: 16px;
            font-weight: 600;

            &:not(:first-child) {
                margin-top: 12px;
            }

            >div {
                @include cols();
            }

            img {
                max-width: 32px;
                max-height: 32px;
                margin-right: 8px;
                border-radius: 4px;
            }
        }
    }

    .right {
        @include rows();
        align-items: flex-start;
        margin-left: 12px;

        .source-content {
            flex: 1;
            @include rows();

            .source-button-group {
                @include cols();
                margin-top: 4px;
            }

            &:not(:first-child) {
                margin-top: 12px;
            }

            span.source-text {
                font-size: 14px;
            }
        }

        a:not(:first-child) {
            margin-left: 8px;
        }
    }
}
</style>