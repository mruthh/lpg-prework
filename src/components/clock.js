import React from 'react';
import { connect } from "react-redux";

const Clock = () => {
  return (
      <div>{this.props.remainingTime}</div>
    )
}

function mapStateToProps(state){
  return { remainingTime }
}

export default connect(mapStateToProps)(Clock);