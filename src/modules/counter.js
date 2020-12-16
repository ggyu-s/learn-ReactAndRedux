import { createAction, handleActions } from "redux-actions";
//액션 타입 정의하기
//액션 타입은 대문자로 정의하고, 문자열 내용은 '모듈 이름/액션 이름' 과 같은 형태로 작성
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션 생성 함수 만들기
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//초기 상태 및 리듀서 함수 만들기
const initialState = {
  number: 0,
};
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }
export default counter;

// export 와 export default 차이점
// export는 여러 개를 보낼 수 있고 export default는 단 한개만 내보낼 수 있습니다.
// import {increase,decrease} from "./counter"
// import counter, {increase,decrease} from "./counter"
