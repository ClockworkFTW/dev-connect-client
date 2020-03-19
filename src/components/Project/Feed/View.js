import React from "react";

import { Card } from "./Card";

export const View = ({ projects }) =>
  projects.map(project => <Card key={project._id} project={project} />);
