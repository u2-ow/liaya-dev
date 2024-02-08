import Styles from "../styles/Header.module.scss"

export const Header=()=>{
    return(
        <header className={Styles.header}>
            <div className={Styles.headerInner}>
                <h1 className={Styles.headerInnerH1}>u2.dev</h1>
            </div>
        </header>
    )
}