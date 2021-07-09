<template>
	<h1>Hello</h1>
	<form @submit.prevent="addTodo()" class="col12 col-lg-6">
		<input
			v-model="newTodoString"
			placeholder="What To-Do now"
			type="text"
		/>
		<button class="btn btn-outline-primary">Add</button>
	</form>
</template>

<script>
export default {
	data() {
		return {
			newTodoString: "",
		}
	},
	methods: {
		addTodo() {
			if (this.newTodoString.length > 1) {
				this.$emit("on-create", this.newTodoString)
				this.newTodoString = ""
			}
		},
	},
}
</script>
<style scoped>
	form{
		display: flex;
		margin: 12px;
		margin-left: 0;
	}
	input{
		flex-grow: 1;
	}
	button{
		background-color: #fff;
	}
	</style>
