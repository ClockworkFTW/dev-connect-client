import React from "react";

import { Card } from "../Feed/Card";
import Stack from "../../Stack";

export const View = ({ project }) => (
  <div>
    <Card project={project} />
    <Stack stack={project.stack} />
  </div>
);
