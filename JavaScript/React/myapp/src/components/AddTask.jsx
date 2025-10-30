import React, { Component } from 'react';

export default class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            task:'',
            description:''
        };
    }
  render() {
    return (
        <div>
            <h1>New Task:</h1>
        <input value={this.state.task} onChange={(e)=>{this.setState({task:e.target.value})}} type="text" placeholder='Your task...' />
        <input value={this.state.description} onChange={(e)=>{this.setState({description:e.target.value})}} type="text"placeholder='Task description...' />
        <button onClick={() =>{this.setState({
             tasks: [...this.state.tasks, {task: this.state.task, description: this.state.description}]
           })}}>Add</button>
        <h1>My todolist:</h1>
        <ul id='todo'>
{
            this.state.tasks.map((item) => (
                <li>{item.task} - {item.description} <button onClick={()}>Done</button></li>
            ))
}
        </ul>
        </div>

    );}}
    