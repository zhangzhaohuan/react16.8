import React, { useState,useEffect } from 'react'
import UseEffectDemo from '../UseEffectDemo';

function Child(props) {

    console.log('child render')
    return (
        <div>
            <h3>子组件：</h3>
            <span>{props.count}</span>
        </div>
    )
}
export default function UseStateDemo(props) {
    console.log('father render1');
    const initial = 1;
    const [count, setCount] = useState(initial);
    console.log('father render2');
    useEffect(()=>{
        console.log('useEffect');
    });
    useEffect(()=>{
        console.log('useEffect2');
    });
    return (
        <>
            <div>{count}</div>
            <div onClick={() => { setCount(count + 1) }} >count+1</div>
            <div onClick={() => { setCount(count) }} >count不变:都不重新return</div>
            <Child count={count} />
        </>
    )
}