import React from 'react';

const INITIAL_STATE = {
  list: [1, 2, 3 , "a"],
};

class Push extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }
  onClearArray = () => {
    this.setState({ list: [] });
  };
  onResetArray = () => {
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button type="button" onClick={this.onClearArray}>
          Clear Array
        </button>
        <button type="button" onClick={this.onResetArray}>
          Reset Array
        </button>
      </div>
    );
  }
}
export default Push;