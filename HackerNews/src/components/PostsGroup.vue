<template>
  <div class="container">
    <transition-group name="fade">
      <app-post v-for="(post,key) in postsList" :key="key+1" :postObj='post' :index="key" ></app-post>
    </transition-group>
  </div>
</template>

<script>
import Post from './Post';

export default {
  name: 'PostsGroup',
  components: {
    'app-post': Post,
  },
  props: ['postsList'],
};
</script>

<style lang="scss">
.container {
  background: rgb(0, 209, 177);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter {
  opacity: 0;
}
.notification{
  padding: 1em 1em 0.3em ;
}

</style>
