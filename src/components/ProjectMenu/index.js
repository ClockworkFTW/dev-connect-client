import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setProjectSearch } from "../../reducers/project-search";
import { setProjectSort } from "../../reducers/project-sort";

import { ButtonLink } from "../Common";
import { Search } from "./Search";
import { Sort } from "./Sort";

const ProjectMenu = props => {
  const {
    projectSearch,
    setProjectSearch,
    projectSort,
    setProjectSort
  } = props;

  return (
    <Container>
      <div>
        <ButtonLink path="/project/new" icon={["far", "plus"]} theme="primary">
          Create Project
        </ButtonLink>
        <Search value={projectSearch} setValue={setProjectSearch} />
      </div>
      <Sort value={projectSort} setValue={setProjectSort} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
`;

const mapStateToProps = state => ({
  projectSearch: state.projectSearch,
  projectSort: state.projectSort
});

export default connect(mapStateToProps, { setProjectSearch, setProjectSort })(
  ProjectMenu
);
