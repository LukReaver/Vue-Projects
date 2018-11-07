<template>
  <div>
    <h1>Quote Added</h1>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style="width: 25%"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{width: currentAmount * maxAmount + '%'}"
      >{{currentAmount}}/{{maxAmount}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentAmount: {
      type: Number
    },
    maxAmount: {
      type: Number
    }
  }
};
</script>

<style scoped>
</style>
