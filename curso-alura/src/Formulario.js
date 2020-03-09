import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.stateInicial = {
      todo: "",
      doing: "",
      done: ""
    };

    this.state = this.stateInicial;
  }

  handlerInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    this.props.handlersubmit(this.state);
    this.setState(this.stateInicial);
  };

  render() {
    const { todo, doing, done } = this.state;

    return (
      <form>
        <div className="row">
          <div className="input-field col s4">
            <label className="input-field" htmlFor="todo">
              todo
            </label>
            <input
              className="validate"
              id="todo"
              type="text"
              name="todo"
              value={todo}
              onChange={this.handlerInput}
            />
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="doing">
              Doing
            </label>
            <input
              className="validate"
              id="doing"
              type="text"
              name="doing"
              value={doing}
              onChange={this.handlerInput}
            />
          </div>
          <div className="input-field col s4">
            <label className="input-field" htmlFor="done">
              Done
            </label>
            <input
              className="validate"
              id="done"
              type="text"
              name="done"
              value={done}
              onChange={this.handlerInput}
            />
          </div>
        </div>
        <button
          className="waves-effect waves-light"
          onClick={this.submitForm}
          type="button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Formulario;
