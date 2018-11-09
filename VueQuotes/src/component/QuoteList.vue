<template>
  <div class="card-columns">
    <appQuote
      @click.native="removeItem(key)"
      v-for="(item,key) in tabQuotelink"
      :key="key"
    >{{tabQuotelink[key]}}</appQuote>
  </div>
</template>

<script>
// import {dataBus} from '../main';
import Quote from "./Quote.vue";

export default {
  props: {
    tabQuotelink: {
      type: [Array, String]
    }
  },
  components: {
    appQuote: Quote
  },
  methods: {
    removeItem(key) {
      this.tabQuotelink.splice(key, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.card-columns {
  column-count: 3;
}
@media (max-width: 992px) {
  .card-columns {
    column-count: 2;
  }
}
@media (max-width: 576px) {
  .card-columns {
    column-count: 1;
  }
}
</style>
