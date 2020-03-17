import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { View } from "./View";

const Tech = ({ stacks }) => {
  const { id } = useParams();
  const tech = stacks.find(e => e._id === id);

  return <View tech={tech} />;
};

const mapStateToProps = state => ({ stacks: state.stacks.data });

export default connect(mapStateToProps)(Tech);
