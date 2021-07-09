<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h1 class="display-3">Vue To Do List</h1>
			</div>
		</div>
		<div class="row">
			<CreateTodo @on-create="addTodo($event)" />
		</div>
		<div class="row">
			<div class="col12 col-lg-6">
				<ul class="list-group">
					<Todo
						v-for="(todo, index) in todos"
						:key="index"
						:todoString="todo.todoString"
						:completed="todo.completed"
						@on-delete="deleteTodo(todo)"
						@on-toggle="toggleTodo(todo)"
						@on-edit="editTodo(todo, $event)"
					/>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Todo from "./Todo.vue"
import CreateTodo from "./CreateTodo.vue"
export default {
	components: {
		Todo,
		CreateTodo,
	},
	data() {
		return {
			todos: [
				{ todoString: "Learn Vue", completed: false },
				{ todoString: "Launch Dp Course", completed: false },
				{ todoString: "Trim your nails", completed: false },
				{ todoString: "Try out cornflakes", completed: true },
			],
		}
	},
	methods: {
		addTodo(newTodo) {
			this.todos.push({
				todoString: newTodo,
				completed: false,
			})
		},
		toggleTodo(todo) {
			todo.completed = !todo.completed
		},
		editTodo(todo, newTodoString) {
			todo.todoString = newTodoString
		},
		deleteTodo(deleteTodo) {
			this.todos = this.todos.filter(todo => todo !== deleteTodo)
		},
	},
}
</script>

<style></style>
