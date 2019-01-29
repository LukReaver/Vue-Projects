<template>
  <article
    class="media has-background-link has-text-light notification is-marginless is-radiusless"
  >
    <div class="media-left">
      <span class="is-link">{{index+1}}.</span>
      <template v-if="postObj.kids != undefined">
        <span
          class="button is-small is-light"
          v-show="postObj.kids"
          @click="openComents"
          style="cursor:pointer"
          :class="{ rotate: comentsOne}"
        >▼</span>
      </template>
    </div>
    <div class="media-content">
      <div class="content is-marginless">
        <p>
          <a
            class="is-size-4-desktop is-size-6-mobile is-size-5-tablet has-text-light is-hoverable"
            :href="postObj.url"
            target="_blank"
          >{{postObj.title}}</a>
        </p>
        <div class="tags has-addons is-marginless">
          <span class="tag is-dark">{{postObj.score}} points</span>
          <span class="tag">by {{postObj.by}}</span>
          <span class="tag is-success">{{convertTime(postObj.time)}}</span>
          <template v-if="postObj.kids != undefined">
            <span class="tag is-dark" v-show="postObj.kids">comments {{postObj.kids.length || 0}}</span>
          </template>
        </div>
      </div>
      <transition-group name="fade">
        <app-post-kid
          v-show="comentsOne"
          v-for="(kid,key) in postObj.kids"
          :key="key+1"
          :comentObj="kid"
          :index2="key"
          v-if="kid.type"
        ></app-post-kid>
      </transition-group>
    </div>
  </article>
</template>

<script>
import { format } from 'timeago.js';
import PostKids from './PostKids';

export default {
  name: 'Post',
  data() {
    return {
      comentsOne: false,
      commentsFetch: false,
    };
  },
  props: ['postObj', 'index'],
  components: {
    'app-post-kid': PostKids,
  },
  methods: {
    convertTime(ms) {
      return format(Date.now() - ms);
    },
    openComents(index) {
      this.comentsOne = !this.comentsOne;
      if(typeof(this.postObj.kids[0]) === 'object'){       
        return
      }
      if (!this.commentsFetch && typeof(this.postObj.kids[0]) === 'number') {       
        this.$store.state.ComentsBox = [];
        this.$store.dispatch('getComents', this.postObj.kids);
        const comentsTab = this.$store.state.ComentsBox;
        this.postObj.kids = comentsTab;
        this.commentsFetch = true;
      }
    },
  },
};
</script>

<style lang="scss" type="text/scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter {
  opacity: 0;
}

.media-left {
  & span:nth-of-type(1){
    margin-bottom: 0.7em ;   
  } 
  display: flex;
  flex-direction: column;
}
.rotate {
  transform: rotate(180deg);
}
</style>
