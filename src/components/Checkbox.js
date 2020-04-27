import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, labelname, labelkey} = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(labelname, labelkey);
  }

  render() {
    const { labelname, labelkey } = this.props;
    const { isChecked } = this.state;
    console.log("labelkey "+labelkey)

    return (
      <tr className="checkbox" id={labelkey}>
        <td>
          <input
            type="checkbox"
            value={labelname}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {labelname}
        </td>
      </tr>
    );
  }
}

Checkbox.propTypes = {
  labelname: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
