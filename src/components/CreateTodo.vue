<template>
	<h1>Hello</h1>
	<form @submit.prevent="addTodo()" class=" d-flex flex-row bg-light p-0" style="margin: 12px !important; box-sizing: border-box; width: 100%">
		<input
			v-model="newTodoString"
			placeholder="What To-Do now"
			type="text"
			class="form-control flex-grow-1"
		/>
		<button class="btn btn-outline-primary flex-grow-1">Add</button>
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

<style scoped></style>
