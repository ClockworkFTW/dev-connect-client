import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { SectionHeader } from "../../Common";

const List = ({ id, projects }) => {
  const teams = projects.filter(project => project.manager._id === id);

  return (
    <Container>
      <SectionHeader>Teams</SectionHeader>
      {teams.length === 0 ? (
        <h1>This user is not part of any teams</h1>
      ) : (
        teams.map(team => (
          <div key={team._id}>
            <h1>{team.name}</h1>
          </div>
        ))
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
`;

const mapStateToProps = state => ({ projects: state.projects.data });

export default connect(mapStateToProps)(List);
