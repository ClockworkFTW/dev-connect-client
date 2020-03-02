import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchStackList } from "../reducers/stack";

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
		<div>
			{stackList.map(stackItem => (
				<div
					key={stackItem._id}
					style={{
						background: `${
							value.includes(stackItem._id) ? "grey" : "none"
						}`
					}}
					onClick={() => handleSelect(stackItem._id)}
				>
					<h3>{stackItem.name}</h3>
					<img
						style={{ width: "100px", height: "100px" }}
						src={stackItem.icon}
						alt={stackItem.name}
					/>
				</div>
			))}
		</div>
	) : (
		<div>
			{stackList.map(stackItem =>
				stack.includes(stackItem._id) ? (
					<div key={stackItem._id}>
						<h3>{stackItem.name}</h3>
						<img
							style={{ width: "100px", height: "100px" }}
							src={stackItem.icon}
							alt={stackItem.name}
						/>
					</div>
				) : null
			)}
		</div>
	);
};

const mapStateToProps = state => ({ stackList: state.stacks.data });

export default connect(mapStateToProps, { fetchStackList })(Stack);
