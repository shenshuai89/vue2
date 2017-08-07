<template>
	<div>
		<ul class="list-group">
		<a href="./list" class="list-group-item active">列表列表列表列表列表列表</a>
			<li class="list-group-item"><router-link to="/first">first</router-link></li>
			<li class="list-group-item"><router-link to="/second">second</router-link></li>
			<li class="list-group-item"><router-link to="/third">third</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<style scoped>
	.list-group a{
		display:block;
		height:100px;
		line-height:80px;
	}
</style>