import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchStackList } from "../../reducers/stack";

import { Editor } from "./Editor";
import { List } from "./List";

const Stack = ({ allowEdit, stack, setStack, stackList, fetchStackList }) => {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchStackList();
  }, [fetchStackList]);

  const handleSelect = id => {
    if (stack.includes(id)) {
      setStack(stack.filter(stack => stack !== id));
    } else {
      setStack([...stack, id]);
    }
  };

  return edit ? (
    <Editor
      stack={stack}
      setStack={setStack}
      stackList={stackList}
      handleSelect={handleSelect}
      setEdit={setEdit}
    />
  ) : (
    <List
      allowEdit={allowEdit}
      stack={stack}
      stackList={stackList}
      setEdit={setEdit}
    />
  );
};

const mapStateToProps = state => ({
  stackList: state.stacks.data
});

export default connect(mapStateToProps, { fetchStackList })(Stack);
