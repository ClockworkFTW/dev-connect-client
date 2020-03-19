import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { Layout } from "../../Common";
import { View } from "./View";

const Page = ({ stacks }) => {
  const { id } = useParams();
  const tech = stacks.find(e => e._id === id);

  return (
    <Layout>
      <h1>Tech Menu</h1>
      <View tech={tech} />;
    </Layout>
  );
};

const mapStateToProps = state => ({ stacks: state.stacks.data });

export default connect(mapStateToProps)(Page);
