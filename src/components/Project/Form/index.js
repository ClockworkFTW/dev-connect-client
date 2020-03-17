import React, { useState } from "react";
import { connect } from "react-redux";

import { createProject } from "../../../reducers/project";

import Stack from "../../Stack";

const ProjectForm = ({ createProject }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [stack, setStack] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    const project = {
      name,
      description,
      difficulty,
      stack
    };
    createProject(project);
  };

  return (
    <div>
      <h1>New Project</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <input
          type="text"
          placeholder="difficulty"
          value={difficulty}
          onChange={event => setDifficulty(event.target.value)}
        />
        <Stack allowEdit={true} stack={stack} setStack={setStack} />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default connect(null, { createProject })(ProjectForm);
