import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { TechView } from "./TechView";

const TechContainer = ({ stacks }) => {
  const { id } = useParams();
  const tech = stacks.find(e => e._id === id);
  return <TechView tech={tech} />;
};

const mapStateToProps = state => ({ stacks: state.stacks.data });

export default connect(mapStateToProps)(TechContainer);
