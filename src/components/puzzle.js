//shows the active license plate
//current license plate needs to know its index in license plates array
//needs to know where we are in licensePlates array

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import actions


class Puzzle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputWord: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount(){
    //set clock to maxTime, then setInterval for countdown
    //maxTime will eventually be props, but hard-code it for now.
    
  }

  componentWillUnmount(){
    //clearInterval
  }

  handleInputChange(event){
    this.setState({inputWord: event.target.value})
  }

  handleFormSubmit(event){
    event.preventDefault();
    //check if this.state.inputWord matches an array item in current license plate
    //if so, grab next word
    //else, show error (generic for now)
  }

  render(){
    return (
      <div>
        {/* {this.props.currentLicensePlate} */}
        <h1>DKP</h1>
        <form>
          <input type="text" 
            value={this.state.inputWord} 
            onChange={this.handleInputChange} />
            <button disabled="true">Skip</button>
            <button onClick={this.handleFormSubmit}>
              Solve
            </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { currentLicensePlate }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ adjustTime }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Puzzle);