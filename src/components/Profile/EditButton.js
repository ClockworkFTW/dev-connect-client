import React from "react";

export const EditButton = ({ owner, edit, setEdit }) =>
	owner && (
		<button type="button" onClick={() => setEdit(!edit)}>
			{edit ? "discard changes" : "edit profle"}
		</button>
	);
