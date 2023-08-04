import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const Section = styled.div<{height:number}>`
    width:100%; height:${props => props.height}px; background-color:red;
    color:white; font-size:100px;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    > div:nth-child(1) {position:fixed; top:0px;}
    > div:nth-child(2) {position:fixed; top:200px;}
    > div:nth-child(3) {position:fixed; top:400px;}
    > div:nth-child(4) {position:fixed; top:600px;}
`

const Scene = [
    {
        heightNum : 3,
    },
    {
        heightNum : 1,
    },
    {
        heightNum : 1,
    },
    {
        heightNum : 1,
    },
]

const Test2 = () => {
    const CurrentScene = useRef(0);
    const [WindowHeight, setWindowHeight] = useState(0);
    const [Progress, setProgress] = useState(0);
    const scrollEvent = () =>{
        const currentY = window.pageYOffset;
        const WindowHeight = window.innerHeight;
        let prevScrollHeight = 0;
        for(let i = 0; i<CurrentScene.current; i++){
            prevScrollHeight += Scene[i].heightNum * WindowHeight;
        }
        
        setProgress((currentY - prevScrollHeight)/WindowHeight);
        if(currentY >= prevScrollHeight + WindowHeight){
            CurrentScene.current++
        }
        if(currentY < prevScrollHeight){
            CurrentScene.current--;
        }
        setWindowHeight(window.innerHeight);
    }


    useEffect(()=>{
        setWindowHeight(window.innerHeight);
        window.addEventListener("scroll",scrollEvent)
        return ()=>{
            window.removeEventListener("scroll",scrollEvent)
        }
    },[]);
    return <>
        <Section height={WindowHeight * 3}>
            {
                CurrentScene.current === 0 && (<>
                    <div style={{display:((Progress > 0) && (Progress < 0.25)) ? "block" : "none"}}>TEST1</div>
                    <div style={{display:((Progress > 0.25) && (Progress < 0.5)) ? "block" : "none"}}>TEST1</div>
                    <div style={{display:((Progress > 0.5) && (Progress < 0.75)) ? "block" : "none"}}>TEST1</div>
                    <div style={{display:((Progress > 0.75) && (Progress < 1)) ? "block" : "none"}}>TEST1</div>
                </>)
            }
        </Section>
        <Section height={WindowHeight}>2</Section>
        <Section height={WindowHeight}>3</Section>
        <Section height={WindowHeight}>4</Section>
    </>
}
export default Test2;