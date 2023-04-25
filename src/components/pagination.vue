<template>
    <div class="pagination">
        <ul>
            <li class="feed prev" @click="prev(currentPage !== 1)" :class="{ 'notClick': currentPage === 1 }">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevron-left">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <span class="text">上一页</span>
            </li>
            <li class="pageNumb" v-for="(page, index) in this.paginationList" :key="index" :data-page="page"
                :class="{ 'current': currentPage === page }" @click="select(page)">
                {{ page }}
            </li>
            <li class="feed next" @click="next(currentPage !== total)" :class="{ 'notClick': currentPage === total }">
                <span class="text">下一页</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevron-right">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        total: {
            type: Number,
            default: 20
        },
        mostDisplayed: {
            type: Number,
            default: 5
        },
        current: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            currentPage: this.current,
            paginationList: []
        }
    },
    methods: {
        updatePaginationList(currentPage) {
            this.paginationList = []
            this.paginationList.push(1)

            if (this.total === 0 || this.total === 1) {
                return;
            }

            if (currentPage >= this.mostDisplayed && currentPage !== 3) {
                this.paginationList.push('...')
            }

            const intermediatePage = Math.min(this.total, this.mostDisplayed)
            const leftRightDisplayedNumb = Math.floor(this.mostDisplayed / 2)
            const prevNumb = currentPage >= this.total - 2 ? leftRightDisplayedNumb + 2 - (this.total - currentPage) : leftRightDisplayedNumb
            const nextNumb = Math.min(currentPage, leftRightDisplayedNumb)

            for (let i = 0 - prevNumb; i < intermediatePage - nextNumb; i++) {
                let page = currentPage + i

                if (page > 1 && page < this.total) {
                    this.paginationList.push(page)
                }
            }

            if (currentPage < this.total - 1 - leftRightDisplayedNumb) {
                this.paginationList.push('...')
            }

            this.paginationList.push(this.total)
        },
        prev(isClick) {
            if (!isClick) {
                return
            }

            this.currentPage--

            if (this.currentPage < 1) {
                this.currentPage = 1
            }

            this.updatePaginationList(this.currentPage)
            this.$emit('update:current', this.currentPage)
        },
        next(isClick) {
            if (!isClick) {
                return
            }

            this.currentPage++

            if (this.currentPage > this.total) {
                this.currentPage = this.total
            }

            this.updatePaginationList(this.currentPage)
            this.$emit('update:current', this.currentPage)
        },
        select(page) {
            if (page === '...') {
                return
            }

            this.currentPage = page

            this.updatePaginationList(this.currentPage)
            this.$emit('update:current', this.currentPage);
        }
    },
    mounted() {
        this.updatePaginationList(this.currentPage)
    },
    watch: {
        current(value) {
            this.currentPage = value
            this.updatePaginationList(this.currentPage)
        },
        total(value) {
            this.updatePaginationList(this.currentPage)
        },
        mostDisplayed() {
            this.updatePaginationList(this.currentPage)
        }
    }
}
</script>

<style lang="scss">
@import '../global.scss';

.pagination {
    user-select: none;

    ul {
        @include cols();
        @include center();
        color: $font-color;

        li {
            height: 40px;
            @include cols();
            @include center();
            border-radius: 4px;
            transition: all .2s ease-in-out;

            &.pageNumb {
                width: 40px;
            }

            &:not(:first-child) {
                margin-left: 8px;
            }

            &:not([data-page="..."]) {
                cursor: pointer;
            }

            &.feed {
                background-color: $panelBg;
                border-radius: 4px;
                box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);
                font-size: 14px;
                text-align: center;
                line-height: 40px;

                &:first-child {
                    padding: 0 8px 0 4px;
                    border-top-left-radius: 20px;
                    border-bottom-left-radius: 20px;

                    svg {
                        margin-right: 4px;
                    }
                }

                &:last-child {
                    padding: 0 4px 0 8px;
                    border-top-right-radius: 20px;
                    border-bottom-right-radius: 20px;

                    svg {
                        margin-left: 4px;
                    }
                }

                &.notClick {
                    cursor: not-allowed;
                }
            }

            &:not([data-page="..."]):hover {
                color: $minorBg;
            }

            &.current {
                font-weight: 600;
                color: $minorBg;
                background-color: $panelBg;
                box-shadow: 0 2px 4px rgba($color: #000000, $alpha: .08);
            }
        }
    }
}
</style>