<template>
    <div class="col-12 col-lg-9">
        <div class="single-blog-area blog-style-2 mb-50 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1000ms"
            v-for="article in articles">
            <div class="row align-items-center">
                <div class="col-12 col-md-6">
                    <div class="single-blog-thumbnail">
                        <img v-bind:src="article.cover" alt="">
                        <div class="post-date">
                            <a style="cursor: default">{{ article.month }} <span>- {{ article.year }} -</span></a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="single-blog-content">
                        <div class="line"></div>
                        <a style="cursor: pointer" class="post-tag" v-on:click="list2(article.categoryName)">{{ article.categoryName }}</a>
                        <h4><router-link v-bind:to="'/detail/' + article.id" class="post-headline">{{ article.title
                        }}</router-link></h4>
                        <p>{{ article.articleAbstract }}</p>
                        <div class="post-meta">
                            <p>标签 <a v-for="(tag, i) in article.tagList">{{ tag }}<span
                                        v-if="i !== article.tagList.length - 1"> | </span></a></p><br>
                            <p>日期 <a >{{ article.createTime }}</a></p><br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <pagination ref="pagination" v-bind:list="list"></pagination>
    </div>
</template>

<script>
import Pagination from '../components/Pagination';
export default {
    name: 'List',
    components: { Pagination },
    data() {
        return {
            articles: [],
        }
    },
    mounted() {
        let _this = this;
        _this.list(1);
    },
    methods: {
        list(current) {
            let _this = this;

            let param = '?current=' + current + '&size=' + _this.$refs.pagination.size;
            let categoryName = _this.$parent.categoryName;
            if (!Validator.isEmpty(categoryName)) {
                param = param + '&categoryName=' + categoryName;
            }

            Loading.show();
            _this.$ajax.get('/bokee/article/list' + param).then((response) => {
                Loading.hide();
                let resp = response.data;
                _this.articles = resp.data.records;
                _this.$refs.pagination.render(current, resp.data.total);
            })
        },
        list2(categoryName) {
            let _this = this;
            _this.$parent.categoryName = categoryName;
            _this.list(1);
        }
    }
}
</script>