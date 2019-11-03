import React, { useReducer,useEffect } from 'react'

export default function UseReducerDemo() {
    const initval = 1;
    const init = function (initval) {
        return { count: initval };
    }

    const reducer = function (state, action) {
        switch (action.type) {
            case 'add':
                return { count: state.count + action.val }
            case 'sub':
                return { count: state.count - action.val }
            case 'reset':
                return { count: action.val }
            case 'none':
                return state;
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initval, init);


    useEffect(() => {
        console.log('useEffect')
    })


    return (
        <div>
            <div>{state.count}</div>
            <div onClick={() => { dispatch({ type: 'add', val: 1 }) }}>+</div>
            <div onClick={() => { dispatch({ type: 'sub', val: 1 }) }}>-</div>
            <div onClick={() => { dispatch({ type: 'reset', val: initval }) }}>reset</div>

            {/* 如果 Reducer Hook 的返回值与当前 state 相同，React 将跳过子组件的渲染及副作用的执行。 */}
            <div onClick={() => { dispatch({ type: 'none', val: 0 }) }}>不变=</div>


        </div>
    )
}
