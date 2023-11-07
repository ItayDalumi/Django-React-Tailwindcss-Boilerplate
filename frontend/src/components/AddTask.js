import React, { Component } from "react";
import axios from "axios";

class AddTask extends Component {
  state = {
    title: "",
    description: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to your Django API to create a new task
    axios
      .post("http://localhost:8000/todo/", {
        title: this.state.title,
        description: this.state.description,
      })
      .then((res) => {
        // Handle the response, update the state, or show a success message
        // You can also clear the input fields if needed
      })
      .catch((err) => {
        // Handle errors
      });
  };

  render() {
    return (
      <div className="my-4">
        <h2>Add a New Task</h2>
        <form onSubmit={this.handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="title" className="block font-bold">
              Title
            </label>
            <input
              type="text"
              className="border p-2"
              placeholder="Title of the task"
              value={this.state.title}
              name="title"
              onChange={this.handleInput}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-bold">
              Description
            </label>
            <textarea
              className="border p-2 w-full"
              placeholder="Task description"
              value={this.state.description}
              name="description"
              onChange={this.handleInput}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

export default AddTask;
