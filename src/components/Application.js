import React, { Component } from 'react';
import Checkbox from './Checkbox';

const items = [
  {id: 1, name: 'A'},
  {id: 2, name: 'B'},
  {id: 3, name: 'C'},
  {id: 4, name: 'D'},
];

class Application extends Component {
    constructor(props){
        super(props)

        this.state ={
            chklist: [],
            list: []
        };
    }
  componentDidMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    this.setState({list: []})
    const chklist = items.map(item => item.checked ? "TRUE" : "FALSE")
    console.log("CHECKLIST >>>"+ chklist)
    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
      this.state.list.push(checkbox)
    }
    console.log("LIST >>>"+ this.state.list)
  }

  createCheckbox = label => (
    <Checkbox
            labelname = {label.name}
            labelkey = {label.id}
            handleCheckboxChange={this.toggleCheckbox}
            key = {label.id}
        />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
          <table className="container">
            <thead className="row">
              <tr className="col-sm-12">
                <th>Label</th>
              </tr>
            </thead>
            <tbody>
                  {this.createCheckboxes()}
            </tbody>
          </table>

          <button className="btn btn-default" type="submit">Save</button>
      </form>
    );
  }
}

export default Application;
