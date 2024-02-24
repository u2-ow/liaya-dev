import {useEffect,useState} from "react"

import Styles from "../styles/SectionTitle.module.scss"

type Props = {
    text : string
  }

export const SectionTitle =({text}:Props)=>{
    // const [mode, setMode] = useState(null);
    // const osDark = matchMedia("(prefers-color-scheme: dark)");
    
    // useEffect(() => {
    //   const osDark = matchMedia("(prefers-color-scheme: dark)");
    //   const osDarkState = osDark.matches;
    //   setMode(osDarkState);
    // });
    return(
        <>
         <h2 className={Styles.sectionTitle}>{text}</h2>
        </>
    )
}