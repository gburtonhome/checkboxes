import React from 'react';



class TableRow extends React.PureComponent {
  defaultProps = {
    selected: false
  }

  render() {
    const { selected, id, name, handleSelect } = this.props;

    console.log(`render TableRow :: ${id} :: ${name}`);
    return (
      <tr>
        <td>
          <input
            name={id}
            type="checkbox"
            checked={selected}
            onChange={handleSelect}
          />
        </td>
        <td>{id}</td>
        <td>{name}</td>
      </tr>
    );
  }
}


export default TableRow
