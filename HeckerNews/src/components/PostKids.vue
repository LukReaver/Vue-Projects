<template>
  <article
    class="media has-background-link has-text-light  is-marginless is-radiusless is-size-6 comments is-padingless"
  >
    <div class="media-left">
       <span class="is-link ">{{index2+1}}.</span>
      <template v-if="comentObj.kids != undefined">
        <span
          class="button is-small is-light"
          v-show="comentObj.kids"
          @click="openComents"
          style="cursor:pointer"
          :style="{rotate: comentsTwo}"
        >▼</span>
      </template>
    </div>
    <div class="media-content">
      <div class="content">
        <content class="comments__text is-size-7 is-hoverable" v-html="comentObj.text"></content>
        <div class="tags has-addons is-marginless">
          <span class="tag">by {{comentObj.by}}</span>
          <span class="tag is-success">{{convertTime(comentObj.time)}}</span>
          <template v-if="comentObj.kids != undefined">
            <span class="tag is-dark">comments {{comentObj.kids.length }}</span>
          </template>
        </div>
      </div>
      <transition-group name="fade">
        <app-post-kid-ofKid
          v-show="comentsTwo"
          v-for="(kid,key) in comentObj.kids"
          :key="key+1"
          :comentKidObj="kid"
          :index3="key"
          v-if="kid.type"
        ></app-post-kid-ofKid>
      </transition-group>
    </div>
  </article>
</template>

<script>
import { format } from 'timeago.js';
import PostKidsOfKids from './PostKidsOfKids';

export default {
  name: 'PostKids',
  components: {
    'app-post-kid-ofKid': PostKidsOfKids,
  },
  data() {
    return {
      comentsTwo: false,
      commentsFetch: false,
    };
  },
  props: ['comentObj', 'index2'],
  methods: {
    convertTime(ms) {
      return format(Date.now() - ms);
    },
    openComents(index) {
      this.comentsTwo = !this.comentsTwo;
       if(typeof(this.comentObj.kids[0]) === 'object'){       
        return
      }
      if (!this.commentsFetch && typeof(this.comentObj.kids[0]) === 'number') {
        this.$store.state.ComentsBox = [];
        this.$store.dispatch('getComents', this.comentObj.kids);
        const comentsTab = this.$store.state.ComentsBox;
        this.comentObj.kids = comentsTab;
        this.commentsFetch = true;
      }
    },
  },
};
</script>

<style lang="scss" type="text/scss" scoped>
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
// span{
//   display: block;
// }
</style>

