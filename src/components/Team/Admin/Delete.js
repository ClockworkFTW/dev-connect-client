import React, { useState } from "react";
import styled from "styled-components";

import { SectionHeader, ButtonRegular } from "../../Common";

export const Delete = ({ projectName, handleDelete }) => {
  const [safety, setSafety] = useState(true);

  const [verifyName, setVerifyName] = useState("");

  const disabled = verifyName !== projectName;

  return (
    <Container>
      <SectionHeader>Delete Team</SectionHeader>
      {safety ? (
        <div>
          <h1>Deleted teams cannot be restored</h1>
          <ButtonRegular
            onClick={() => setSafety(false)}
            icon={["far", "trash"]}
            theme="primary"
          >
            delete
          </ButtonRegular>
        </div>
      ) : (
        <div>
          <h1>Enter the team name to delete</h1>
          <Input
            type="text"
            value={verifyName}
            onChange={e => setVerifyName(e.target.value)}
          />
          <ButtonRegular
            disabled={disabled}
            icon={["far", "trash"]}
            onClick={handleDelete}
            theme="primary"
          >
            delete
          </ButtonRegular>
          <ButtonRegular onClick={() => setSafety(true)} theme="primary">
            cancel
          </ButtonRegular>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 0;
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
`;

const Input = styled.input``;
