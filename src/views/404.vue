<template>
    <div class="err-notfound">
        <div class="notfound-container">
            <h1 class="notfound-code">404</h1>
            <h2 class="notfound-title">页面未找到</h2>
            <p class="notfound-description">很抱歉, 您所请求的页面可能被<span>Creeper</span>炸没了.</p>
            <div class="notfound-buttonGroup">
                <a class="goback" @click="goback">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-arrow-left">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    <span>返回</span>
                </a>
                <a class="gohome" @click="gohome">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-home">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>主页</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    name: 'NotFound',
    setup() {
        const router = useRouter()

        function goback() {
            if (window.history.length > 1) {
                window.history.back()
            }
        }

        function gohome() {
            router.push({
                name: 'home'
            })
        }

        return {
            goback, gohome
        }
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.err-notfound {
    @include cols();
    @include center();
    height: 100%;
    font-family: var(--font-family);
}

.notfound {
    &-container {
        @include rows();
        gap: 8px;
        user-select: none;
    }

    &-code {
        font-family: 'minecraft';
        font-size: 136px;
        color: rgba($font-color, $alpha: .8);
        text-shadow: 0 2px 4px rgba($color: #000000, $alpha: .2);
    }

    &-title {
        font-size: 32px;
        color: $font-color;
    }

    &-description {
        font-size: 16px;
        color: rgba($font-color, $alpha: .6);

        span {
            color: $green;
            font-weight: 600;
            font-size: 18px;
            font-family: 'minecraft';
            padding: 0 4px 0 8px;
        }
    }

    &-buttonGroup {
        @include cols();
        gap: 12px;

        a {
            flex: 1;
            @include button();
            gap: 8px;
            min-width: 100px;
            max-height: 40px;
            justify-content: center;
            border: 1px solid $font-color;
            font-size: 14px;
            color: $font-color;
            background-color: transparent;
            transition: color .15s ease-in-out,
                background-color .2s ease-in-out;

            &:hover {
                transform: none;
                box-shadow: none;
                border-color: $minorBg;
                color: $minorBg;
                background-color: rgba($minorBg, $alpha: .08);
            }
        }
    }
}
</style>