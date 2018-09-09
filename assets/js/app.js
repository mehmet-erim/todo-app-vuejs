window.addEventListener('load', () => {
    window.vue = new Vue({
        el: '#app',
        data: {
            todo: "",
            todos: [],
            isLoading: true
        },
        created() {
            fetch('assets/mockdata/data.json')
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    this.todos = res.data;
                    this.isLoading = false;
                    console.log(this.todos);
                })
        },
        methods: {
            addTodo() {
                if (!this.todo) {
                    alert('Warning! Todo is required.');
                    return;
                }
                this.todos.push({
                    todo: this.todo
                });
                this.todo = "";
            },
            removeTodo(index) {
                if (index !== 0 && !index) {
                    alert('Warning!');
                    return;
                }
                this.todos.splice(index, 1);
            }
        }
    })
})