import Styles from "../styles/Header.module.scss"

export const Header=()=>{
    return(
        <header className={Styles.header}>
            <div className={Styles.headerInner}>
                <h1 className={Styles.headerInnerH1}><a href="/">u2.dev</a></h1>
                <div className={Styles.headerInnerMode}>
                    <img src="../../assets/light.svg" alt="" width="20px" height="20" />
                </div>
            </div>
     
        </header>
    )
}