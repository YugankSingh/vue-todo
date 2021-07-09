<template>
<div>
	<h1>H</h1>
	<TodoList/>
</div>
	
</template>

<script>
import TodoList from "./components/TodoList.vue"
export default {
	name: "App", 
	components: {
		TodoList
	}
}
</script>

<style>
body{
	background-color: #666666;
	color: #ffffff;
}
</style>