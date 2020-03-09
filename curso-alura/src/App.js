import React, { Component, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Header from "./Header";
import Tabela from "./tabela";
import Form from "./Formulario";

class App extends Component {
  state = {
    todos: [
      {
        todo: "Fazer cafe",
        doing: "Estudando React.js",
        done: "Acordar cedo"
      },
      {
        todo: "Tomar banho",
        doing: "Estudando React.js",
        done: "Guardar a louca"
      },
      {
        todo: "Caminhada",
        doing: "Estudando React.js",
        done: "Esvocar os dentes"
      },
      {
        todo: "Terminar modo react.js",
        doing: "Estudando React.js",
        done: "Fazer cafe"
      }
    ]
  };
  remove_todo = index => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo, posAtual) => {
        return posAtual !== index;
      })
    });
  };
  handlersubmit = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };
  render() {
    return (
      <Fragment>
        <Header />
        <br></br>
        <div className="container mb-10">
          <Tabela
            todos={this.state.todos}
            remove_todo={this.props.remove_todo}
          />
          <Form handlersubmit={this.handlersubmit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
