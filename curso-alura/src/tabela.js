import React, { Component } from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>To do</th>
        <th>Doing</th>
        <th>Done</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const line = props.todos.map((line, index) => {
    return (
      <tr key={index}>
        <td>{line.todo}</td>
        <td>{line.doing}</td>
        <td>{line.done}</td>
        <td>
          <button
            onClick={() => {
              props.remove_todo(index);
            }}
            className="waves-effect waves-light "
          >
            Remover
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{line}</tbody>;
};

class Tabela extends Component {
  render() {
    const { todos, remove_todo } = this.props;
    return (
      <table className="centered highlight">
        <TableHead />
        <TableBody todos={todos} remove_todo={remove_todo} />
      </table>
    );
  }
}

export default Tabela;
