import { useEffect, useRef, useState } from "react"
import Styles from "../styles/Pagination.module.scss"



export const Pagination =({data}:any)=>{
    const [count,setCount] = useState(1)
    const liRef = useRef(null);
    const ulRef = useRef(null);
    const post = Number(data.lastPage);
    const paginationArray:number[] = []
    for(let i = 1; i <= post; i++){
        paginationArray.push(i)
    }
    useEffect(() => {
        const paginationNumber = liRef.current;
        const paginationUl = ulRef.current
        if (paginationUl) {
            const liElements = (paginationUl.current as HTMLElement).querySelectorAll('li');
        }

        const pathSegments = window.location.pathname.split('/');
        const lastSegment = Number(pathSegments[pathSegments.length - 1]);
        console.log("最後")
        console.log(paginationUl)
        console.log(lastSegment)

    }, [location]);
    return(
        <>
            <ul className={Styles.pagination} ref={ulRef}>
                {
                    paginationArray.map((item, index) => {
                        return <li key={index} className={Styles.paginationItem} ref={liRef} onClick={()=>setCount(item)}><a href={"/blogs/page/" + `${item}`} >{item}</a></li>;
                    })
                }
            </ul>



        </>
    )
}