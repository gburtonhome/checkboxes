import React from 'react'
import TableRow from './TableRow'

// data source
const users = [
  {id: 1, name: 'A'},
  {id: 2, name: 'B'},
  {id: 3, name: 'C'},
  {id: 4, name: 'D'},
];

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: {},
    }
  }

  handleSelect = (e) => {
    const selected = this.state.selected;
    selected[e.target.name] = e.target.checked;
    this.setState({ selected });
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
    }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th />
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return (
                  <TableRow
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    selected={this.state.selected[user.id]}
                    handleSelect={this.handleSelect}
                  />
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

export default Table;
