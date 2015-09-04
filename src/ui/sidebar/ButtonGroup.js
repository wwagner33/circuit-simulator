import React from 'react';
import parseunit from 'parseunit';

function styles({ TYPOGRAPHY, COLORS }) {
  const [ val, unit ] = parseunit(TYPOGRAPHY.lineHeight);

  return {
    title: {
      lineHeight: `${val * 1.5}${unit}`,
      paddingLeft: '5px',
      fontSize: 'larger',
      color: COLORS.highlight
    }
  };
}

export default class ButtonGroup extends React.Component {
  render() {
    return (
      <div>
        <div style={styles(this.props.theme).title} >{this.props.name}</div>
        {this.props.children}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  name: React.PropTypes.string,
  theme: React.PropTypes.object.isRequired,
  children: React.PropTypes.array.isRequired
};
