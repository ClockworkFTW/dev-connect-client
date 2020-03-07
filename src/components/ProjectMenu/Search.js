import React from "react";
import styled from "styled-components";

export const Search = ({ value, setValue }) => (
	<Input
		type="text"
		placeholder="Search..."
		value={value}
		onChange={e => setValue(e.target.value)}
	/>
);

const Input = styled.input``;
