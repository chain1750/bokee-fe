<template>
    <nav aria-label="Page navigation example" style="margin-top: 100px">
        <ul class="pagination pagination-lg justify-content-center">
            <li class="page-item" v-bind:class="{ 'disabled': current == 1 }">
                <a class="page-link" href="#" aria-label="Previous" v-on:click="selectPage(current - 1)">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item" v-for="p in pages" v-bind:class="{ 'active': current == p }"><a class="page-link"
                    href="#" v-on:click="selectPage(p)">{{ p }}</a></li>
            <li class="page-item" v-bind:class="{ 'disabled': current == pageTotal }">
                <a class="page-link" href="#" aria-label="Next" v-on:click="selectPage(current + 1)">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
  
<script>
export default {
    name: 'Pagination',
    props: {
        list: {
            type: Function,
            default: null
        }
    },
    data: function () {
        return {
            total: 0,
            size: 6,
            current: 1,
            pageTotal: 0,
            pages: [],
        }
    },
    methods: {
        render(current, total) {
            let _this = this;
            _this.current = current;
            _this.total = total;
            _this.pageTotal = Math.ceil(total / _this.size);
            _this.pages = _this.getPageItems(_this.pageTotal, current, 5);
        },
        selectPage(current) {
            let _this = this;
            if (current < 1) {
                current = 1;
            }
            if (current > _this.pageTotal) {
                current = _this.pageTotal;
            }
            if (_this.current !== current) {
                _this.current = current;
                if (_this.list) {
                    _this.list(current);
                }
            }
        },
        getPageItems(total, current, length) {
            let items = [];
            if (length >= total) {
                for (let i = 1; i <= total; i++) {
                    items.push(i);
                }
            } else {
                let base = 0;
                if (current - 0 > Math.floor((length - 1) / 2)) {
                    base = Math.min(total, current - 0 + Math.ceil((length - 1) / 2)) - length;
                }
                for (let i = 1; i <= length; i++) {
                    items.push(base + i);
                }
            }
            return items;
        }
    }
}
</script>