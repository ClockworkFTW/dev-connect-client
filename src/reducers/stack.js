import stackServices from "../services/stack";

const STACK_API_PENDING = "STACK_API_PENDING";
const STACK_API_SUCCESS = "STACK_API_SUCCESS";
const STACK_API_FAILURE = "STACK_API_FAILURE";

const stackApiPending = () => ({
  type: STACK_API_PENDING
});

const stackApiSuccess = data => ({
  type: STACK_API_SUCCESS,
  data
});

const stackApiFailure = error => ({
  type: STACK_API_FAILURE,
  error
});

export const fetchStackList = () => async dispatch => {
  dispatch(stackApiPending);
  let cachedStackList = localStorage.getItem("dev-connect-stack-list");
  if (cachedStackList) {
    cachedStackList = JSON.parse(cachedStackList);
    dispatch(stackApiSuccess(cachedStackList));
  } else {
    try {
      const fetchedStackList = await stackServices.fetch();
      cachedStackList = JSON.stringify(fetchedStackList);
      localStorage.setItem("dev-connect-stack-list", cachedStackList);
      dispatch(stackApiSuccess(fetchedStackList));
    } catch (error) {
      dispatch(stackApiFailure(error));
    }
  }
};

const INITIAL_STATE = { pending: false, data: [], error: null };

const stackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STACK_API_PENDING:
      return { ...state, pending: true };
    case STACK_API_SUCCESS:
      return { ...state, data: action.data, pending: false };
    case STACK_API_FAILURE:
      return { ...state, error: action.error, pending: false };
    default:
      return state;
  }
};

export default stackReducer;
