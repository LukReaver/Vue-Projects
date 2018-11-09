<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
// import {dataBus} from '../main';

export default {
  props: {
    tabQuotelink2: {
      type: [Array, String]
    }
  },
  methods: {
    removeItem(event) {
      let index = this.tabQuotelink2.indexOf(event.target.textContent);
      this.tabQuotelink2.splice(index, 1);
    }
  }
};
</script>

<style lang='scss' scoped>
@import url("https://fonts.googleapis.com/css?family=Shadows+Into+Light");

.card {
  font-family: "Shadows Into Light", cursive;
  width: 100%;
  background: rgb(15, 66, 107);
  color: #eee;
  display: inline-block;
  border: 0.1rem solid #000;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.7rem;
  overflow-wrap: break-word;
  cursor: pointer;
}
</style>
