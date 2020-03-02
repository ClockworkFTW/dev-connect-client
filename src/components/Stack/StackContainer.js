import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchStackList } from "../../reducers/stack";

import { StackEdit } from "./StackEdit";
import { StackView } from "./StackView";

const Stack = ({ edit, stack, stackList, fetchStackList, value, setValue }) => {
	useEffect(() => {
		fetchStackList();
	}, [fetchStackList]);

	const handleSelect = id => {
		if (value.includes(id)) {
			setValue(value.filter(stack => stack !== id));
		} else {
			setValue([...value, id]);
		}
	};

	return edit ? (
		<StackEdit
			stackList={stackList}
			value={value}
			handleSelect={handleSelect}
		/>
	) : (
		<StackView stack={stack} stackList={stackList} />
	);
};

const mapStateToProps = state => ({ stackList: state.stacks.data });

export default connect(mapStateToProps, { fetchStackList })(Stack);
