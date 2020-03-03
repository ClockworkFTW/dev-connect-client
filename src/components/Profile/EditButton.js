import React from "react";

export const EditButton = ({ owner, edit, toggle }) =>
	owner && (
		<button type="button" onClick={toggle}>
			{edit ? "discard changes" : "edit profle"}
		</button>
	);
