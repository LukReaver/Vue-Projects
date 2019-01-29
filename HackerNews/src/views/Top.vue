<template>
  <app-postsgroup :postsList="getPostsTab"></app-postsgroup>
</template>

<script>
// @ is an alias to /src
import PostsGroup from '@/components/PostsGroup.vue';
import debounce from 'lodash.debounce';

export default {
  name: 'top',
  data() {
    return {};
  },
  components: {
    'app-postsgroup': PostsGroup,
  },
  computed: {
    getPostsTab() {
      return this.$store.state.TopStoriesArticles;
    },
  },
  methods: {
    async handleScroll() {
      const pageTop = window.pageYOffset;
      const pageHeight = window.innerHeight;
      const docScrollHeight = document.body.scrollHeight;
      if ((pageTop + pageHeight) / docScrollHeight > 1 - 0.1) {
        await this.$store.dispatch('getIdPosts', 'topstories');
        await this.$store.dispatch('getArticlesTop', 'IdTopList');
        this.$store.commit('SET_STEP_TOP', 1);
      }
    },
    convertTime(ms) {
      return format(Date.now() - ms);
    },
  },
  async created() {
    // --- Set mutation name for getIdPosts ---
    await this.$store.commit('SET_SETTER_ADD_ID_TAB', 'ADD_ID_TOP');
    // ---  Set mutation name for getArticles ---
    await this.$store.commit(
      'SET_SETTER_ADD_ARTICLES_IN_TAB', 'ADD_ARTICLES_TOP',
    );
    // --- Add listener for load after scrol bottom ---
    window.addEventListener('scroll', debounce(this.handleScroll, 200));
    // --- get first part of posts ---
    if (this.$store.state.TopStoriesArticles.length === 0) {
      await this.$store.dispatch('getIdPosts', 'topstories');
      await this.$store.dispatch('getArticlesTop', 'TopStoriesID');
      this.$store.commit('SET_STEP_TOP', 1);
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
