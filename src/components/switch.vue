<template>
    <label class="switch">
        <input type="checkbox">
    </label>
</template>

<script>
export default {
    name: 'Switch'
}
</script>

<style lang="scss">
@import "../global.scss";

.switch {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 30px;
    border-radius: 17px;
    background-color: #CCCCCC;
    transition: background-color .3s ease-in-out;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 22px;
        height: 22px;
        background-color: #FFFFFF;
        border-radius: 50%;
        transition: left .2s ease-in-out;
    }

    input[type="checkbox"] {
        display: none;
    }

    &:has(input[type="checkbox"]:checked) {
        background-color: $minorBg;

        &::before {
            left: 22px;
        }
    }
}
</style>