<template>
    <label class="switch">
        <input ref="checked" type="checkbox" :checked="isChecked" @change="switchButton">
    </label>
</template>

<script>
export default {
    name: 'Switch',
    props: {
        isChecked: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        switchButton() {
            this.$emit('switchEvent', this.$refs.checked.checked)
        }
    }
}
</script>

<style lang="scss">
@import "../global.scss";

.switch {
    position: relative;
    display: inline-block;
    width: 56px;
    height: 30px;
    border-radius: 17px;
    background-color: var(--switch-not-checked);
    transition: background-color .3s ease-in-out;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 22px;
        height: 22px;
        background-color: var(--switch-ball);
        border-radius: 50%;
        transition: left .2s ease-in-out;
    }

    input[type="checkbox"] {
        display: none;
    }

    &:has(input[type="checkbox"]:checked) {
        background-color: var(--switch-checked);

        &::before {
            left: 30px;
        }
    }
}
</style>