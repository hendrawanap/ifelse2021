<template>
    <Loading v-if="isLoading"/>
    <div v-else class="container py-4">
        <template v-if="notFound">
            <h3 class="text-center">Berita Tidak Ditemukan</h3>
        </template>
        <template v-else>
            <h1 class="text-center mb-2 text-primary font-medium">{{ title }}</h1>
            <div class="text-muted text-center mb-3" style="font-size: 1.15rem">Dipublikasikan pada {{ publishedAt }}</div>
            <img :src="image" :alt="`news-${$route.params.slug}`" class="d-block img-fluid mb-3 content-image" data-toggle="modal" data-target="#imgModal">
            <div v-html="content" class="news-content py-3"/>
            <div class="modal fade" id="imgModal" tabindex="-1" aria-labelledby="imgModal" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <img :src="image" :alt="`news-${$route.params.slug}`" class="d-block img-fluid" style="margin: 0 auto">
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import apiRoutes from "../../../router/api";
    import Connection from "../../../store/Connection";
    import Loading from "../../components/Loading";
    export default {
        name: "NewsDetails",
        components: {Loading},
        data() {
            return {
                notFound: null,
                publishedAt: null,
                title: null,
                image: null,
                content: null,
                isLoading: true,
            };
        },
        methods: {
            async getNews(){
                let self = this;
                let id = this.$route.params.slug;
                let r = await Connection.get(apiRoutes.news + id);
                if(r.data.error){
                    self.notFound = true;
                } else {
                    self.publishedAt = r.data.published_at;
                    self.title = r.data.title;
                    self.image = '/images/' + r.data.image;
                    self.content = marked(r.data.content);
                }
            }
        },
        async mounted() {
            // const newsList = await this.getNews();
            // const news = newsList.find((news) => news.id === parseInt(this.$route.params.slug));
            // this.content = marked(news.content);
            // this.publishedAt = news.publishedAt;
            // this.title = news.title;
            // this.image = news.image;
            await this.getNews();
            setTimeout(()=>{
                this.isLoading = false;
            }, 1000);
        }
    }
</script>

<style>
    .news-content {
        max-width: 680px;
        margin: 0 auto;
    }
    .news-content h1, .news-content h2, .news-content h3, .news-content h4, .news-content h5, .news-conten h6 {
        color: var(--primary)
    }

    .news-content h1 {
        font-size: 1.8rem;
    }

    .news-content h2 {
        font-size: 1.575rem;
    }

    .news-content h3 {
        font-size: 1.35rem;
    }

    .news-content h4 {
        font-size: 1.125rem;
    }

    .news-content h5 {
        font-size: 0.9rem;
    }

    .news-content h6 {
        font-size: 0.875rem;
    }

    .news-content p, .news-content li {
        font-size: 1.15rem;
        color: rgba(0, 0, 0, 0.8);
    }

    .news-content p {
        line-height: 1.5rem;
    }

    .news-content a {
        color: var(--primary);
    }
    .news-content strong {
        font-weight: 500;
        color: var(--primary);
    }

    @media (min-width: 768px) {
        .news-content h1 {
            font-size: 2.25rem;
        }

        .news-content h2 {
            font-size: 1.8rem;
        }

        .news-content h3 {
            font-size: 1.575rem;
        }

        .news-content h4 {
            font-size: 1.35rem;
        }

        .news-content h5 {
            font-size: 1.125rem;
        }

        .news-content h6 {
            font-size: 0.9rem;
        }
        .news-content p, .news-content li {
            font-size: 1.25rem;
        }
        .news-content p {
            line-height: normal;
        }
    }
</style>

<style scoped>
    .content-image {
        width: 100%;
        max-height: 300px;
        margin: 0 auto;
        object-fit: cover;
    }
    .content-image:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    @media (min-width: 576px) {
        .content-image {
            max-height: 300px;
        }
    }

    @media (min-width: 768px) {
        .content-image {
            max-height: 400px;
        }
    }

    @media (min-width: 992px) {
        .content-image {
            max-height: 540px;
        }

    }

    @media (min-width: 1200px) {
        .content-image {
            max-width: 930px;
            max-height: 540px;
        }
    }
</style>
