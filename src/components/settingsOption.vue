<template>
    <div class="settings-option">
        <div class="settings-top">
            <div class="settings-label">
                <p class="settings-label-title">{{ title }}</p>
                <span class="settings-label-description">{{ description }}</span>
            </div>
            <div class="settings-switch">
                <Switch v-if="model === 'switch'" @switchEvent="switchCondition"></Switch>
                <Dropdown v-if="model === 'dropdown'" :data="data" :default="defaultData" @dd-select="dropdownCondition">
                </Dropdown>
                <slot name="custom" v-if="model === 'custom'"></slot>
            </div>
        </div>
        <div class="settings-extension" :class="{ 'open': open }" v-if="extension" ref="extensionContainer">
            <slot name="extension"></slot>
        </div>
    </div>
</template>

<script>
import Switch from '@/components/switch.vue'
import Dropdown from './dropdown.vue';
import { ref } from 'vue';

export default {
    name: 'SettingsOption',
    props: {
        title: { type: String },
        description: { type: String },
        model: {
            type: String,
            default: 'switch'
        },
        data: {
            type: Array,
            default: []
        },
        extension: {
            type: Boolean,
            default: false
        },
        alwaysOn: {
            type: Boolean,
            default: false
        },
        condition: {
            default: ''
        },
        defaultData: {
            type: Number,
            default: 0
        },
        func: {
            type: Function,
            default: null
        }
    },
    components: {
        Switch,
        Dropdown
    },
    setup(props) {
        let open = ref(props.alwaysOn)
        const extensionContainer = ref(null)

        function toggleExtension(condition) {
            if (!props.extension || props.alwaysOn) { return; }

            open.value = condition

            if (condition) {
                extensionContainer.value.style.height = extensionContainer.value.scrollHeight + 'px'
            } else {
                extensionContainer.value.removeAttribute('style')
            }
        }

        function dropdownCondition(index) {
            toggleExtension(props.extension && index === props.condition)

            props.func?.(index)
        }

        function switchCondition(bool) {
            toggleExtension(props.extension && bool === props.condition)

            props.func?.(bool)
        }

        return {
            extensionContainer, dropdownCondition, open, switchCondition
        }
    }
}
</script>

<style lang="scss">
@import "../global.scss";

.settings {
    &-option {
        @include rows();
        background-color: var(--panel-background);
        border-radius: 4px;
        padding: 12px;
        box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);
    }

    &-top {
        @include cols();
    }

    &-label {
        flex: 1;

        &-title {
            color: var(--font-color-white);
            font-size: 16px;
            font-weight: 600;
        }

        &-description {
            color: var(--font-color-white);
            opacity: .6;
            font-size: 12px;
        }
    }

    &-switch {
        @include cols();
        align-items: center;
    }

    &-extension {
        height: 0;
        overflow: hidden;
        transition: height .25s ease;

        .custom-extension {
            padding-top: 12px;
            padding-bottom: 4px;
        }
    }
}
</style>