<template>
    <div class="add-skin-form">
        <div class="add-skin-form-titleBar">
            <h3 class="add-skin-form-title">{{ title }}</h3>
            <a class="add-skin-form-closeButton" @click="handleClick()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-x">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </a>
        </div>
        <stepper ref="stepper" :needStepName="true" :skip="false" :step="stepNumber" :stepName="['命名', '上传', '署名', '核实']">
        </stepper>
        <div class="add-skin-form-container">
            <ul ref="skinFormContainer">
                <li>
                    <span class="add-skin-form-description">为您的皮肤起一个名字.</span>
                    <div class="add-skin-form-infoInput-container">
                        <span>皮肤名称</span>
                        <input-box ref="input_skinName" ph="命名你的皮肤">
                            <template v-slot:prefix-svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-edit-2">
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                </svg>
                            </template>
                        </input-box>
                    </div>
                </li>
                <li>
                    <span class="add-skin-form-description">设置您的皮肤模型, 并上传您的皮肤图片.</span>
                    <div class="add-skin-form-infoInput-container">
                        <div class="add-skin-form-infoInput-container-model">
                            <span>皮肤模型</span>
                            <radio-group ref="input_skinModel" :data="['Steve', 'Alex']"
                                radioName="add-skin-form-radio"></radio-group>
                        </div>
                        <div class="add-skin-form-infoInput-container-model">
                            <span>上传皮肤</span>
                            <file-upload ref="input_skinImg" :types="['png']"></file-upload>
                        </div>
                    </div>
                </li>
                <li>
                    <span class="add-skin-form-description">署上上传者的名字.</span>
                    <div class="add-skin-form-infoInput-container">
                        <span>作者署名</span>
                        <input-box ref="input_skinAuthor" ph="署名">
                            <template v-slot:prefix-svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-edit-2">
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                </svg>
                            </template>
                        </input-box>
                    </div>
                </li>
                <li>
                    <span class="add-skin-form-description">核实您要上传的信息.</span>
                    <div class="add-skin-form-infoInput-container checkInfo">
                        <span class="add-skin-form-skinName">{{ checkInfo.skinName }}</span>
                        <img :src="checkInfo.skinImg" alt="skin-img" class="add-skin-form-skinImg">
                        <span class="add-skin-form-authorName">{{ checkInfo.skinAuthor }}</span>
                    </div>
                </li>
            </ul>
        </div>
        <divider></divider>
        <div class="add-skin-form-button">
            <a class="add-skin-form-prev-button" @click="prevStep()" v-if="!thefirst">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevron-left">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span>上一个</span>
            </a>
            <a class="add-skin-form-next-button" @click="nextStep()" v-if="!thelast">
                <span>下一个</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevron-right">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </a>
            <a class="add-skin-form-submit-button" @click="submitClick()" v-if="thelast">
                <span>提交</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
import Stepper from './stepper.vue';
import InputBox from './inputBox.vue';
import RadioGroup from './radioGroup.vue';
import FileUpload from './fileUpload.vue';
import Divider from './divider.vue';

import { drawSkinCanvasToImg } from '@/assets/js/drawSkinCanvasToImg'

import { nextTick, onUnmounted, ref, watch, getCurrentInstance } from 'vue';

export default {
    name: 'addSkinForm',
    components: {
        Stepper, InputBox, RadioGroup, FileUpload, Divider
    },
    props: {
        title: {
            type: String
        }
    },
    setup() {
        const { emit } = getCurrentInstance()

        const stepper = ref(null)
        const stepNumber = 4
        const thelast = ref(false)
        const thefirst = ref(true)
        const skinFormContainer = ref(null)
        const input_skinName = ref(null)
        const input_skinAuthor = ref(null)
        const input_skinModel = ref(null)
        const input_skinImg = ref(null)

        const checkInfo = ref({
            skinName: 'Name',
            skinImg: null,
            skinAuthor: 'Author'
        })

        const canvas = document.createElement('canvas')
        canvas.height = 160
        canvas.width = 120

        const nextStep = () => {
            stepper.value.next()

            switch (stepper.value.getStep()) {
                case 2:
                    const skinName = input_skinName.value.value
                    checkInfo.value.skinName = skinName || 'Name'
                    break;
                case 3:
                    const file = input_skinImg.value.getFiles()

                    if (file) {
                        const reader = new FileReader()
                        reader.readAsDataURL(file)
                        reader.onload = function (event) {
                            updateSkin(
                                event.target.result,
                                input_skinModel.value.getValue()
                            )
                        }
                    } else {
                        updateSkin(
                            require('@/assets/skin/Steve.png'),
                            'Steve'
                        )
                    }

                    function updateSkin(skin, model) {
                        const skinData = [{
                            skin: skin,
                            model: model
                        }]

                        drawSkinCanvasToImg(canvas, skinData)

                        setTimeout(() => {
                            checkInfo.value.skinImg = skinData[0].imgURL
                        }, 200);
                    }

                    break;
                case 4:
                    const skinAuthor = input_skinAuthor.value.value
                    checkInfo.value.skinAuthor = skinAuthor || 'Author'
                    break
            }
        }

        const prevStep = () => {
            stepper.value.prev()
        }

        const setStep = (number) => {
            stepper.value.setStep(number)
        }

        const updateStep = () => {
            thefirst.value = stepper.value.getStep() <= 1
            thelast.value = stepper.value.getStep() >= stepNumber
            skinFormContainer.value.style.marginLeft = `${-284 * (stepper.value.getStep() - 1)}px`
        }

        const handleClick = () => {
            emit('close', false)
            setStep(1)
        }

        const submitClick = () => {
            nextStep()

            setTimeout(handleClick, 250);

            input_skinName.value.clear()
            input_skinImg.value.clear()
            input_skinAuthor.value.clear()
        }

        let stopWatching

        nextTick(() => {
            stopWatching = watch(() => stepper.value?.getStep?.(), () => {
                if (stepper.value?.getStep?.()) {
                    updateStep()
                }
            })
        })

        onUnmounted(() => {
            nextTick(() => {
                stopWatching && stopWatching()
            })
        })

        return {
            stepper, stepNumber, thelast,
            thefirst, nextStep, prevStep,
            setStep, handleClick, skinFormContainer,
            submitClick, checkInfo, input_skinName,
            input_skinAuthor, input_skinModel, input_skinImg
        }
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.add-skin-form {
    @include rows();
    padding: 12px;
    background-color: var(--panel-background);
    border-radius: 8px;
    box-shadow: 0 0 4px rgba($color: #000000, $alpha: .08);
    width: 300px;
    min-height: 400px;
    font-family: var(--font-family);

    &-titleBar {
        @include cols();
        align-items: center;

        .add-skin-form-title {
            flex: 1;
            color: var(--font-color-white);
        }

        .add-skin-form-closeButton {
            @include button();

            &:hover {
                color: $red;
            }
        }
    }

    .stepper {
        margin: 16px 0;
    }

    &-button {
        @include cols();
        gap: 12px;
        user-select: none;

        >a {
            flex: 1;
            @include button();
            @include center();
            gap: 12px;

            span {
                font-size: 14px;
                line-height: 20px;
            }

            &:hover {
                color: var(--minor-color);
            }
        }
    }

    &-container {
        overflow-x: hidden;
        flex: 1;
        @include rows();
        align-items: flex-start;

        >ul {
            flex: 1;
            @include cols();
            gap: 8px;
            width: auto;
            height: 100%;
            transition: margin-left .2s ease-in-out;

            li {
                @include rows();
                align-items: center;
                padding: 0 4px 4px;
                min-width: calc(300px - 24px);
                max-width: calc(300px - 24px);

                >span {
                    flex: 1;
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--font-color-white);
                    user-select: none;
                }

                .add-skin-form-infoInput-container,
                .add-skin-form-infoInput-container-model {
                    width: 100%;
                    @include cols();
                    align-items: center;
                    gap: 8px;

                    span {
                        font-size: 14px;
                        white-space: nowrap;
                    }

                    &.checkInfo {
                        @include rows();
                        align-items: center;
                        gap: 4px;

                        .add-skin-form-skinName {
                            font-family: 'minecraft';
                            font-size: 16px;
                            color: var(--font-color-white);
                        }

                        img {
                            width: 120px;
                            height: 160px;
                            user-select: none;
                            pointer-events: none;
                        }

                        .add-skin-form-authorName {
                            font-size: 14px;
                            color: var(--minor-color);
                            margin-top: -12px;
                        }
                    }
                }

                .add-skin-form-infoInput-container:has(>.add-skin-form-infoInput-container-model) {
                    @include rows();
                }
            }
        }
    }
}
</style>