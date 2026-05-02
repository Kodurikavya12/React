function Home({name, age}) {
    return (
        <>
        <h1>Welcome {name} </h1>
        </>
    )
}

import { useState } from "react"

// // function Home(props){
// //     return (
// //         <>
// //         <h1>Welcome {props.name} {props.age} </h1>
// //         </>
// //     )
// // }


// function Home(){
//     const [count, setCount] = useState(0)

//     const incCount = () => {
//         setCount((prev) => prev + 1)
//         setCount((prev) => prev + 1)

//         // console.log(count);
        

//         //setCount(count + 1) -> will not pass the value to prev one
//     }

//     return (
//         <>
//             <h1> useState - Hook</h1>
//             <h3>{count}</h3>
//             <button onClick={incCount}>inc</button>
//         </>
//     )
// }

// function Home() {
//     const [isShow, setIsShow] = useState(true)

//     return(
//         <>
//             <h1>useState- Hook</h1>
//             <button onClick={ () => setIsShow(!isShow)}>
//                 {isShow ? "Hide" : "show"}
//             </button>

//             <h1>{isShow && "Heyy"}</h1>
//         </>
//     )
// }
export default Home