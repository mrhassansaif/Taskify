import React from "react";

export default function test() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTodos =
    filter === "all"
      ? todos
      : filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);

  return <div>test</div>;
}
