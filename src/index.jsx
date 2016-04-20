import React from 'react';
import ReactDOM from 'react-dom';

class ColorPicker extends React.Component {
  render() {
    return (
      <div>
        <input type="range" min="0" max="255" ref="colour" onChange={this.props.change} defaultValue={this.props.initial} />
      </div>
      );
  }
}

const ColorShower = (props) => {
    let { r, g, b } = props.rgb;
    let divStyle = {
      height: '50px',
      width: '50px',
      backgroundColor: `rgba(${r}, ${g}, ${b}, 0.5)`
    };
    return <div style={divStyle}></div>;
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 0, g: 0, b: 0
    }
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({
      r: this.refs.red.refs.colour.value,
      g: this.refs.green.refs.colour.value,
      b: this.refs.blue.refs.colour.value
    });
  }
  render() {
    return (
      <div>
        <ColorPicker ref="red" change={this.update} initial={this.state.r} />
        <ColorPicker ref="green" change={this.update} initial={this.state.g}/>
        <ColorPicker ref="blue" change={this.update} initial={this.state.b}/>
        <ColorShower rgb={this.state} />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.querySelector('#app'));
