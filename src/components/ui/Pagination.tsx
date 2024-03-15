import { useEffect, useRef } from "react"
import Styles from "../../styles/Pagination.module.scss"



export const Pagination =({data}:any)=>{
    const ulRef = useRef(null);
    const post = Number(data.lastPage);
    const paginationArray:number[] = []
    for(let i = 1; i <= post; i++){
        paginationArray.push(i)
    }
    useEffect(() => {
        const pathSegments = window.location.pathname.split('/');
        const lastSegment = Number(pathSegments[pathSegments.length - 1]);
        const anchorElements = (ulRef.current as HTMLElement | null)?.querySelectorAll('a');
        const currentNumber = anchorElements? anchorElements[lastSegment -1 ] : undefined
        currentNumber?.classList.add("paginationActive")
    }, [location]);
    return(
        <>
            <ul className={Styles.pagination} ref={ulRef}>
                {
                    paginationArray.map((item, index) => {
                        return <li key={index} className={Styles.paginationItem} ><a href={"/blogs/page/" + `${item}`} >{item}</a></li>;
                    })
                }
            </ul>
        </>
    )
}