<template>
  <app-postsgroup :postsList="getPostsTab"></app-postsgroup>
</template>

<script>
// @ is an alias to /src
import PostsGroup from '@/components/PostsGroup.vue';
import debounce from 'lodash.debounce';

export default {
  name: 'ask',
  data() {
    return {};
  },
  components: {
    'app-postsgroup': PostsGroup,
  },
  computed: {
    getPostsTab() {
      return this.$store.state.AscStoriesArticles;
    },
  },
  methods: {
    async handleScroll() {
      const pageTop = window.pageYOffset;
      const pageHeight = window.innerHeight;
      const docScrollHeight = document.body.scrollHeight;
      if ((pageTop + pageHeight) / docScrollHeight > 1 - 0.1) {
        await this.$store.dispatch('getIdPosts', 'askstories');
        await this.$store.dispatch('getArticlesAsc', 'IdAscList');
        this.$store.commit('SET_STEP_ASC', 1);
      }
    },
    convertTime(ms) {
      return format(Date.now() - ms);
    },
  },
  async created() {
    // --- Set mutation name for getIdPosts ---
    await this.$store.commit('SET_SETTER_ADD_ID_TAB', 'ADD_ID_ASC');
    // ---  Set mutation name for getArticles ---
    await this.$store.commit(
      'SET_SETTER_ADD_ARTICLES_IN_TAB', 'ADD_ARTICLES_ASC',
    );
    // --- Add listener for load after scrol bottom ---
    window.addEventListener('scroll', debounce(this.handleScroll, 200));
    // --- get first part of posts ---
    if (this.$store.state.AscStoriesArticles.length === 0) {
      await this.$store.dispatch('getIdPosts', 'askstories');
      await this.$store.dispatch('getArticlesAsc', 'AscStoriesID');
      this.$store.commit('SET_STEP_ASC', 1);
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
