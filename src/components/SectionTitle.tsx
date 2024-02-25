import {useEffect,useState} from "react"

import Styles from "../styles/SectionTitle.module.scss"

type Props = {
    text : string
  }

export const SectionTitle =({text}:Props)=>{
    return(
        <>
         <h2 className={Styles.sectionTitle}>{text}</h2>
        </>
    )
}