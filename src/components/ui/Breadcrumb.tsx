import Styles from "../../styles/breadcrumb.module.scss"

type Props = {
    title: string
  }
export const Breadcrumb =({title}:Props)=>{
    return(
        <>
            <ul className={Styles.breadcrumb}>
                <li className={Styles.breadcrumbItem}><a href="/">Top</a></li>
                <li className={Styles.breadcrumbItem}>{">"}</li>
                <li className={Styles.breadcrumbItem}>{title}</li>
             </ul>
        </>
    )
}