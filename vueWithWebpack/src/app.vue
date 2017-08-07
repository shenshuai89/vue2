<template>
	<div class="message">
	<div >Value is: {{ count }}</div>
	<a href="#" @click.prevent="increment">Increment</a>
	</div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count ++;
    }
  }
}
</script>

<style>
	.message{
		color:red;
		font-size:24px;
	}
</style>