<template>
  <article
    class="media has-background-link has-text-light is-marginless is-radiusless is-size-6 comments"
  >
    <div class="media-left">{{index3+1}}.</div>
    <div class="media-content">
      <div class="content">
        <content class="comments__text is-size-7 is-hoverable" v-html="comentKidObj.text"></content>
        <div class="tags has-addons is-marginless">
          <span class="tag">by {{comentKidObj.by}}</span>
          <span class="tag is-success">{{convertTime(comentKidObj.time)}}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { format } from 'timeago.js';

export default {
  name: 'PostKids',
  props: ['comentKidObj', 'index3'],
  methods: {
    convertTime(ms) {
      return format(Date.now() - ms);
    },
  },
};
</script>



