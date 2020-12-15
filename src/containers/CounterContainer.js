import React from "react";
import { bindActionCreators } from "redux";
import Counter from "../components/counter";
import { connect } from "react-redux";
import { decrease, increase } from "../modules/counter";

function CounterContainer({ number, increase, decrease }) {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
}
// const mapStateToprops = (state) => ({
//   number: state.counter.number,
// });
// const mapDispatchToProps = (dispatch) => ({
//   //임시 함수
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });
// export default connect(mapStateToprops, mapDispatchToProps)(CounterContainer);
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   })
// )(CounterContainer);
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch
    )
)(CounterContainer);
