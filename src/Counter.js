import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decreaseAction, increaseAction} from "./actions";

const Counter = () => {
    const dispatch = useDispatch()
    const countValue = useSelector(state => state.counter.count)
    function decreaseCount() {
        dispatch(decreaseAction)
    }
    function increaseCount() {
        dispatch(increaseAction)
    }

    return (
        <div className="container">
            <button className="buttons"
                    onClick={() => decreaseCount()}>-</button>
            <span>{countValue}</span>
            <button className="buttons"
                    onClick={() => increaseCount()}>+</button>
        </div>
    );
}
export default Counter;