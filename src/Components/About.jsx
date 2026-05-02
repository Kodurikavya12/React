// function About() {
//     return (
//         <>
//         <h3>About</h3>


//         <p>I am a dedicated fresher with a strong interest in technology and learning new skills. I enjoy building projects, exploring new ideas, and improving myself every day. I am hardworking, adaptable, and excited to begin my professional journey with confidence and enthusiasm. ✨</p>

//         </>
        
//     )
// }

import { useEffect, useState} from "react";


export default function About(){
    const[count, setCount] = useState(0)
    useEffect(() => {
        console.log("count changed");
        
    }, [count])

    return(
        <>
            <div>About</div>
            <h3>{count}</h3>
            <button onClick={() => setCount(prev => prev + 1)}>inc</button>


        </>

    )
}
