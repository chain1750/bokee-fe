<template>
    <div class="col-12 col-lg-9">
        <div class="single-blog-area blog-style-2 mb-50">
            <div class="single-blog-content">
                <div class="line"></div>
                <a style="cursor: pointer" class="post-tag" v-on:click="list(article.categoryName)">{{ article.categoryName }}</a>
                <h4><a class="post-headline mb-0">{{ article.title }}</a></h4>
                <div class="post-meta mb-50">
                    <p>标签 <a v-for="(tag, i) in article.tagList">{{ tag }}<span
                                v-if="i !== article.tagList.length - 1"> | </span></a></p><br>
                    <p>日期 <a >{{ article.createTime }}</a></p><br>
                </div>
                <hr>
                <v-md-preview :text="article.content"></v-md-preview>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Detail',
    data() {
        return {
            article: {},
        }
    },
    mounted() {
        let _this = this;
        let id = _this.$route.params.id;
        _this.detail(id);

        $('.github-markdown-body').css('padding', 0);
    },
    methods: {
        detail(id) {
            let _this = this;
            Loading.show();
            _this.$ajax.get('/bokee/article/detail/' + id).then((response) => {
                Loading.hide();
                let resp = response.data;
                _this.article = resp.data;
            })
        },
        list(categoryName) {
            let _this = this;
            _this.$parent.categoryName = categoryName;
            _this.$router.push('/');
        }
    }
}
</script>