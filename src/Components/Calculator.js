import { Component } from 'react';
import Button from './Button';
import Input from './Input';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick = (name) => {
    const { total, next, operation } = calculate(this.state, name);
    this.setState({
      total,
      next,
      operation,
    });
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="row">
          <Input text={next || operation || total} />
        </div>
        <div className="row">
          <Button clickHandler={this.handleButtonClick} name="AC" />
          <Button clickHandler={this.handleButtonClick} name="+/-" />
          <Button clickHandler={this.handleButtonClick} name="%" />
          <Button clickHandler={this.handleButtonClick} className="btn btn-operator" name="÷" />
        </div>
        <div className="row">
          <Button clickHandler={this.handleButtonClick} name="7" />
          <Button clickHandler={this.handleButtonClick} name="8" />
          <Button clickHandler={this.handleButtonClick} name="9" />
          <Button clickHandler={this.handleButtonClick} className="btn btn-operator" name="x" />
        </div>
        <div className="row">
          <Button clickHandler={this.handleButtonClick} name="4" />
          <Button clickHandler={this.handleButtonClick} name="5" />
          <Button clickHandler={this.handleButtonClick} name="6" />
          <Button clickHandler={this.handleButtonClick} className="btn-operator" name="-" />
        </div>
        <div className="row">
          <Button clickHandler={this.handleButtonClick} name="1" />
          <Button clickHandler={this.handleButtonClick} name="2" />
          <Button clickHandler={this.handleButtonClick} name="3" />
          <Button clickHandler={this.handleButtonClick} name="+" className="btn-operator" />
        </div>
        <div className="row">
          <Button clickHandler={this.handleButtonClick} className="btn-zero" name="0" />
          <Button clickHandler={this.handleButtonClick} name="." />
          <Button clickHandler={this.handleButtonClick} name="=" className="btn-operator" />
        </div>
      </div>
    );
  }
}
export default Calculator;
