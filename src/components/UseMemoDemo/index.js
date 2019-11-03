import React, { useMemo, useState, useCallback } from 'react';


// useMemo 和useCallback 区别：
/**
 * useMemo:返回值
 * 和useCallback：返回函数
 * 
 * https://www.jianshu.com/p/585554f77ecf
 */
export default function UseMemoDemo(props) {

    const initDepend1 = 1;
    const [depend1, setDepend1] = useState(initDepend1);


    const initDepend2 = 2;
    const [depend2, setDepend2] = useState(initDepend2);


    const initDepend3 = [];
    const [depend3, setDepend3] = useState(initDepend3);

    // const compute = function (param1, param2) {
    //     console.log('compute')
    //     return param1 + param2
    // }
    // console.log(depend3)

    // const result = compute(depend1, depend2);

    function compute(val1, val2) {
        console.log('render1')
        return val1 + val2;
    }
    function compute2(val1, val2) {
        console.log('render2')
        return val1 + val2;
    }
    const result = useMemo(() =>
        compute(depend1, depend2)
        , [depend1, depend2]);


    const result2 = useCallback(() =>
        compute2(depend1, depend2)
        , [depend1, depend2]);



    return (
        <>
            <div>{depend1}  + {depend2} = {result}</div>
            <div>{depend1}  + {depend2} = {result2()}</div>
            <div>
                depend1:
            </div>
            <button onClick={() => { setDepend1(depend1 + 1) }}>depend1 +1</button>
            <button onClick={() => { setDepend1(depend1) }}>depend1=depend1</button>

            <div>
                depend2:
            </div>

            <button onClick={() => { setDepend2(depend2 + 1) }}>depend2 +1</button>
            <button onClick={() => { setDepend2(depend2) }}>depend2=depend2</button>


            <div>
                复杂数据类型depend3: {depend3.length}
            </div>
            {(() => {
                depend3.map((val, index) => {
                    return <li key={index}>val</li>
                })
            })()}
            <button onClick={() => {
                setDepend3((depend3) => {
                    let _data = depend3.slice(0); _data.push(1); return _data;
                })
            }}>depend3 push</button>
            <button onClick={() => { setDepend3(depend3) }}>depend3=depend3</button>


            <div>{result}</div>
        </>
    )
}