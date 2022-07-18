import React from "react";

function NewTaskForm({ onTaskFormSubmit, categories}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({text, category})
  }

  function handleChange(event) {
     setCategory(event.target.value)
  }

  function handleCategoryChange(event){
    setCategory(event.target.value)
  }

  const newCategories = categories.slice(1);

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input onChange={handleChange} value={text} type="text" name="text" />
      </label>
      <label>
        Category
        <select value={category} onChange={handleCategoryChange} name="category">
          {/* render <option> elements for each category here */}
          {newCategories.map((category, index) => {
            return <option key={index} >{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
