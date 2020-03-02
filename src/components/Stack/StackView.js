import React from "react";
import { Link } from "react-router-dom";

import * as Styled from "./StackStyles";

export const StackView = ({ stack, stackList }) => (
	<div>
		{stackList.map(stackItem =>
			stack.includes(stackItem._id) ? (
				<Link key={stackItem._id} to={`/stack/${stackItem._id}`}>
					<Styled.StackIcon
						src={stackItem.icon}
						alt={stackItem.name}
					/>
				</Link>
			) : null
		)}
	</div>
);
