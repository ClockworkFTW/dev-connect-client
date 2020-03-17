import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setProjectSearch } from "../../../../reducers/project-search";
import { setProjectSort } from "../../../../reducers/project-sort";

import { ButtonLink } from "../../../Common";
import { Search } from "./Search";
import { Sort } from "./Sort";

const Menu = props => {
  const {
    projectSearch,
    setProjectSearch,
    projectSort,
    setProjectSort
  } = props;

  return (
    <Container>
      <ButtonLink path="/project/new" icon={["far", "plus"]} theme="primary">
        Create
      </ButtonLink>
      <Search value={projectSearch} setValue={setProjectSearch} />
      <Sort value={projectSort} setValue={setProjectSort} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
`;

const mapStateToProps = state => ({
  projectSearch: state.projectSearch,
  projectSort: state.projectSort
});

export default connect(mapStateToProps, { setProjectSearch, setProjectSort })(
  Menu
);
