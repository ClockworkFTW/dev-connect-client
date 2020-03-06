import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchStackList } from "../../reducers/stack";

import { StackEdit } from "./StackEdit";
import { StackView } from "./StackView";

const Stack = props => {
	const {
		edit,
		stack,
		stackList,
		fetchStackList,
		value,
		setValue,
		size
	} = props;

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
			size={size}
		/>
	) : (
		<StackView stack={stack} stackList={stackList} size={size} />
	);
};

const mapStateToProps = state => ({ stackList: state.stacks.data });

export default connect(mapStateToProps, { fetchStackList })(Stack);
