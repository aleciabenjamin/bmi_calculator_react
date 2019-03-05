import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import MethodSelect from './Components/MethodSelect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric',
      weightMeasureUnit: 'kg',
      heightMeasureUnit: 'cm'
    }
  }

  setInputType(e) {
    this.setState({ method: e.target.value }, () => {
      if (this.state.method === 'imperial') {
        this.setState({ weightMeasureUnit: 'lbs', heightMeasureUnit: 'inches' });
      } else if ( this.state.method === 'metric' ) {
        this.setState({ weightMeasureUnit: 'kg', heightMeasureUnit: 'cm' });
      }
    })
  }

  render() {
    return (
      <div>
        <div>
        <h1>BMI Converter</h1>
        <MethodSelect
          onChangeValue={this.setInputType.bind(this)}
        />
          <label>Weight(kg)</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })} />
        </div>

        <div>
          <label>Height(cm)</label>
          <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })} />
        </div>

        <DisplayResult
          method={this.state.method}
          weight={this.state.weight}
          height={this.state.height}
        />
      </div>
    );
  }
}

export default App;