<template>
  <div class="wrapQuote form-group">
    <form @submit.prevent="addQuote($event)">
      <label for="quoteInput">Your Quote</label>
      <textarea
        name="newQuoteText"
        class="form-control"
        id="quoteInput"
        rows="4"
        v-model="newQuote"
      ></textarea>
      <button class="btn btn-primary">Add Quote</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newQuote: ""
    };
  },
  methods: {
    addQuote() {
      console.log(this.newQuote);
      if (this.newQuote.trim() != "") {
        this.$emit("newq", this.newQuote);
        this.newQuote = "";
      }
    }
  }
};
</script>

<style scoped>
.wrapQuote {
  text-align: center;
}
h2 {
  color: #000;
  font-size: 20px;
}
button {
  margin: 2rem;
}
</style>
