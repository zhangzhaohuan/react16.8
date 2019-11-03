import React, { useState, useEffect, useReducer } from 'react';

function UseReducerDemo() {
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






export default function UseEffectDemo(props) {

    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    }, []);

    const [name, setName] = useState('zhangsan');
    useEffect(() => {
        // setName(name + name);
        let timer = setTimeout(() => {
            console.log('name:' + name)
        }, 2000);
    }, [name]);


    const [age, setAge] = useState(10);
    useEffect(() => {
        console.log('age')
    });

    return (
        <div>
            <div>{count}</div>
            <div onClick={() => { setCount(count + 1) }}>设置count</div>

            <div>{name}</div>
            <div onClick={() => { setName(name + name) }}>设置name</div>


            {/* 调用 State Hook 的更新函数并传入当前的 state 时[即setAge((preAge) => preAge)]]，React 将跳过子组件的渲染及 effect 的执行。（React 使用 Object.is 比较算法 来比较 state。） */}
            <div>{age}</div>
            <div onClick={() => { setAge((preAge) => preAge) }} >设置age</div>



            {/* reducerDemo */}

            <UseReducerDemo />


        </div>
    )
}


