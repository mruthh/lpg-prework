import React from 'react';
import { connect } from "react-redux";

const Clock = (props) => {
  return (
      <div>{props.settings.time}</div>
    )
}

function mapStateToProps(state){
  return { settings: state.settings }
}

export default connect(mapStateToProps)(Clock);