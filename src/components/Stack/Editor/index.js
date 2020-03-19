import React, { useState } from "react";
import styled from "styled-components";

import { ButtonRegular } from "../../Common";
import { Menu } from "./Menu";
import { Tech } from "./Tech";

export const Editor = ({ stack, stackList, handleSelect, setEdit }) => {
  const [search, setSearch] = useState("");
  const filteredStackList = stackList.filter(e =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Wrapper>
      <Menu search={search} setSearch={setSearch} />
      <Container>
        {filteredStackList.map(tech => (
          <Tech
            key={tech._id}
            tech={tech}
            stack={stack}
            handleSelect={handleSelect}
          />
        ))}
      </Container>
      <ButtonRegular onClick={() => setEdit(false)} theme="primary">
        done
      </ButtonRegular>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
`;

const Container = styled.div``;
