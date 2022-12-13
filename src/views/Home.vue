<template>
    <div>
        <header class="header-area">
            <div class="top-header">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 col-sm-8"></div>
                        <div class="col-12 col-sm-4">
                            <div class="top-social-area">
                                <a href="https://github.com/chain1750" data-toggle="tooltip" data-placement="bottom" title="Github"><i
                                        class="fa fa-github" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="微博"><i
                                        class="fa fa-weibo" aria-hidden="true"></i></a>
                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="微信公众号"><i
                                        class="fa fa-wechat" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="logo-area text-center">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-12 h1" style="cursor: pointer">
                            <span v-on:click="list('')">ChainCat的个人博客</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="blog-wrapper section-padding-50 clearfix">
            <div class="container">
                <div class="row">
                    <router-view />

                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="post-sidebar-area">
                            <div class="sidebar-widget-area">
                                <h5 class="title">Tags</h5>
                                <div class="widget-content">
                                    <ul class="tags">
                                        <li v-for="tag in tags"><a>{{ tag }}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="sidebar-widget-area">
                                <h5 class="title">Categories</h5>
                                <div class="widget-content">
                                    <ul class="tags">
                                        <li v-for="(category, i) in categories"><a href="#"
                                                v-on:click="list(category.categoryName)">
                                                <span v-if="i === 0">全部({{
                                                        category.count
                                                }})</span>
                                                <span v-if="i !== 0">{{ category.categoryName }}({{
                                                        category.count
                                                }})</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="footer-area text-center">
            Copyright &copy;2022 ChainCat的个人博客
        </footer>
    </div>
</template>

<script>
import router from '@/router';

export default {
    name: "Home",
    data() {
        return {
            tags: [],
            categories: [],
            categoryName: "", // 记录当前查询分类
        };
    },
    mounted() {
        let _this = this;
        _this.allTag();
        _this.allCategory();
    },
    methods: {
        allTag() {
            let _this = this;
            _this.$ajax.get("/bokee/article/tags").then((response) => {
                let resp = response.data;
                _this.tags = resp.data;
            });
        },
        allCategory() {
            let _this = this;
            _this.$ajax.get("/bokee/article/categories").then((response) => {
                let resp = response.data;
                _this.categories = resp.data;
            });
        },
        list(categoryName) {
            let _this = this;
            _this.categoryName = categoryName;
            _this.$router.push("/blank");
        }
    }
}
</script>