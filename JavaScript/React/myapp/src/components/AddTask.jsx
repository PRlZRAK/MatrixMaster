import React, { Component } from "react";

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: "",
      description: "",
    };
  }
  render() {
    return (
      <div className="mainDiv">
        <h1>New Task:</h1>
        <input
          value={this.state.task}
          onChange={(e) => {
            this.setState({ task: e.target.value });
          }}
          type="text"
          placeholder="Your task..."
        />
        <textarea
          value={this.state.description}
          onChange={(e) => {
            this.setState({ description: e.target.value });
          }}
          placeholder="Task description..."
        />
        <button
          onClick={() => {
            if (this.state.task == "") {
              alert("Task cannot be empty!");
              return;
            }
            this.setState({
              tasks: [
                ...this.state.tasks,
                { task: this.state.task, description: this.state.description },
              ],
            });
          }}
        >
          Add
        </button>
        <h1>My todolist:</h1>
        <ul id="todo">
          {this.state.tasks.map((p) => (
            <li>
              <p className="taskP">{p.task}:</p> {p.description}
              <button
                onClick={() => {
                  this.setState({
                    tasks: this.state.tasks.filter((e) => e !== p),
                  });
                }}
              >
                Done
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
