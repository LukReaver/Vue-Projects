<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <appProgresBar :currentAmount="tabQuote.length" :maxAmount="maxAmount"></appProgresBar>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6 offset-3">
                <appQuoteForm @newq="newQuote($event)"></appQuoteForm>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <appQuoteList :tabQuotelink="tabQuote"></appQuoteList>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <appFooter></appFooter>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteForm from "./component/QuoteForm.vue";
import ProgresBar from "./component/ProgresBar.vue";
import QuoteList from "./component/QuoteList.vue";
import Footer from "./component/Footer.vue";

export default {
  data() {
    return {
      maxAmount: 10,
      tabQuote: [
        "Focus on every single rep.",
        "Starve your distraction, feed your focus"
      ]
    };
  },
  components: {
    appQuoteForm: QuoteForm,
    appProgresBar: ProgresBar,
    appQuoteList: QuoteList,
    appFooter: Footer
  },
  methods: {
    newQuote(evt) {
      if (this.tabQuote.length < this.maxAmount) {
        this.tabQuote.push(evt);
      } else {
        alert("Please delete Quotes first");
      }
    }
  }
};
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800");

html {
//   font-size: 62.5%;
}
body {
  font-family: "Montserrat", sans-serif;
}
.row {
  margin-bottom: 1rem;
}
</style>
