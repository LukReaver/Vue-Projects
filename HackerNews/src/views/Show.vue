<template>
  <app-postsgroup :postsList="getPostsTab"></app-postsgroup>
</template>

<script>
// @ is an alias to /src
import PostsGroup from '@/components/PostsGroup.vue';
import debounce from 'lodash.debounce';

export default {
  name: 'show',
  data() {
    return {};
  },
  components: {
    'app-postsgroup': PostsGroup,
  },
  computed: {
    getPostsTab() {
      return this.$store.state.ShowStoriesArticles;
    },
  },
  methods: {
    async handleScroll() {
      const pageTop = window.pageYOffset;
      const pageHeight = window.innerHeight;
      const docScrollHeight = document.body.scrollHeight;
      if ((pageTop + pageHeight) / docScrollHeight > 1 - 0.1) {
        await this.$store.dispatch('getIdPosts', 'showstories');
        await this.$store.dispatch('getArticlesShow', 'IdShowList');
        this.$store.commit('SET_STEP_JOB', 1);
      }
    },
    convertTime(ms) {
      return format(Date.now() - ms);
    },
  },
  async created() {
    // --- Set mutation name for getIdPosts ---
    await this.$store.commit('SET_SETTER_ADD_ID_TAB', 'ADD_ID_SHOW');
    // ---  Set mutation name for getArticles ---
    await this.$store.commit(
      'SET_SETTER_ADD_ARTICLES_IN_TAB', 'ADD_ARTICLES_SHOW',
    );
    // --- Add listener for load after scrol bottom ---
    window.addEventListener('scroll', debounce(this.handleScroll, 200));
    // --- get first part of posts ---
    if (this.$store.state.ShowStoriesArticles.length === 0) {
      await this.$store.dispatch('getIdPosts', 'showstories');
      await this.$store.dispatch('getArticlesShow', 'ShowStoriesID');
      this.$store.commit('SET_STEP_SHOW', 1);
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
