import React, { useState, useEffect } from 'react';



export default function UseEffectDemo(props) {
    console.log('render')
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
        return () => {
            console.log('unnount');
        }
    }, []);

    const [name, setName] = useState('zhangsan');
    useEffect(() => {
        // setName(name + name);
        let timer = setTimeout(() => {
            console.log('name:' + name);//每次打印都不一样
        }, 2000);
    }, [name]);


    const [age, setAge] = useState(10);
    useEffect(() => {
        console.log('age')
    });
    useEffect(() => {
        console.log(age);
    }, [age]);

    return (
        <div>
            <div>{count}</div>
            <div onClick={() => { setCount(count + 1) }}>设置count</div>

            <div>{name}</div>
            <div onClick={() => { setName(name + name) }}>设置name</div>


            {/* 调用 State Hook 的更新函数并传入当前的 state 时[即setAge((preAge) => preAge)]]，React 将跳过子组件的渲染及 effect 的执行。（React 使用 Object.is 比较算法 来比较 state。） */}
            <div>{age}</div>
            <button onClick={() => { setAge(age) }} >设置age</button>



        </div>
    )
}


