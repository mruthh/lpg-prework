//shows the active license plate

//needs to know where we are in licensePlates array

import React from 'react';

class Puzzle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputWord: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
        {this.props.currentLicensePlate}
        <form>
          <input type="text" 
            value={this.state.inputWord} 
            onChange={this.handleInputChange} />
        </form>
      </div>
    )
  }
}