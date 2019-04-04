import React, { Component } from 'react';

class Text extends Component {
  state = {
    content: this.props.content,
  };

  componentDidMount() {
    console.log('Mounting', this.props.content);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updating', prevProps.content, 'To', this.props.content);
  }

  componentWillUnmount() {
    console.log('Unmounting', this.props.content);
  }

  render() {
    return <p>{this.state.content}</p>;
  }
}

class Test extends Component {
  state = {
    toggled: false,
  };

  render() {
    return (
      <div>
        {this.state.toggled ? (
          <div>
            <Text key="Farbod" content="Farbod" />
            <Text key="Eddie" content="Eddie" />
            <Text key="Mamad" content="Mamad" />
            {/* <Text content="Farbod" />
            <Text content="Eddie" />
            <Text content="Mamad" /> */}
          </div>
        ) : (
          <div>
            <Text key="Eddie" content="Eddie" />
            <Text key="Farbod" content="Farbod" />
            <Text key="Mamad" content="Mamad" />

            {/* <Text content="Mamad" />
            <Text content="Eddie" />
            <Text content="Farbod" /> */}
          </div>
        )}
        <button
          onClick={() =>
            this.setState(prevState => ({ toggled: !prevState.toggled }))
          }>
          Toggle
        </button>
      </div>
    );
  }
}

export default Test;