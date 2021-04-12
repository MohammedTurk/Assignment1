import React, { Component } from 'react';
import Home from "./Component/Home/Home";
import List from "./Component/ToDoList/List";
import ToDo from "./Component/ToDoList/ToDo";


import { Route, Switch } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';




class App extends Component {
  state = {
    forms: [{ name: "username" }, { name: "password" }, { name: "date" }],

    users: [],
  };

  handleAddToList = e => {
    const users = [...this.state.users];
    users.push(e);
    this.setState({
      users
    })
  };

  handleDelete = e => {
    const users = this.state.users.filter(f => {
      return f.id !== e.id
    })
    this.setState({
      users
    })
    console.log(users);

  };
  handleEdit = e => {
    const users = [...this.state.users];
    const Index = users.indexOf(e);
    users[Index].editing = true;
    this.setState({
      users
    })
    console.log(users[Index]);
  };
  onChange = (event, e) => {
    const users = [...this.state.users];
    const Index = users.indexOf(e);
    const Type = event.currentTarget.id;
    users[Index][Type] = event.currentTarget.value;

    this.setState({
      users
    })

  };



  submitedInput = (event, e) => {
    const users = [...this.state.users];
    const Index = users.indexOf(e);
    if (event.keyCode == 13) {
      users[Index].editing = false;

      this.setState(
        users
      )
    }
  };

  onCheck = e => {
    const users = [...this.state.users];
    const Index = users.indexOf(e);
    users[Index].check = !users[Index].check;
    this.setState({
      users
    })
  }


  componentDidMount() {
    localStorage.getItem("State") && this.setState({
      users: JSON.parse(localStorage.getItem("State"))
    })
  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("State", JSON.stringify(nextState.users))
  };


  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" render={() => <ToDo forms={this.state.forms} addToList={this.handleAddToList} />} />
          <Route path="/all-list" render={() => <List users={this.state.users} users={this.state.users} onDelete={this.handleDelete} onEdit={this.handleEdit} onChange={this.onChange} submitedInput={this.submitedInput} onCheck={this.onCheck} />} />


        </Switch>
      </div >
    )
  }

}


export default App;