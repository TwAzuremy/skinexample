<template>
    <div class="settings-option">
        <div class="settings-top">
            <div class="settings-label">
                <p class="settings-label-title">{{ title }}</p>
                <span class="settings-label-description">{{ description }}</span>
            </div>
            <div class="settings-switch">
                <Switch v-if="model === 'switch'"></Switch>
                <Dropdown v-if="model === 'dropdown'" :data="data" @dd-select="dropdownCondition"></Dropdown>
            </div>
        </div>
        <div class="settings-extension" :class="{ 'open': open }" v-if="extension" ref="extensionContainer">
            <slot></slot>
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
            if (props.extension && index === props.condition) {
                toggleExtension(true)
            } else {
                toggleExtension(false)
            }
        }

        return {
            extensionContainer, dropdownCondition, open
        }
    }
}
</script>

<style lang="scss">
@import "../global.scss";

.settings {
    &-option {
        @include rows();
        background-color: $panelBg;
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
            color: $font-color;
            font-size: 16px;
            font-weight: 600;
        }

        &-description {
            color: rgba($font-color, $alpha: .4);
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