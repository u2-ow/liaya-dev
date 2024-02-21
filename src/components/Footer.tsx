import Styles from "../styles/Footer.module.scss"

export const Footer =()=>{
    return(
        <>
            <footer className={Styles.footer}>
                <div className={Styles.footerInner}>
                    <p className={Styles.footerInnerCopyright}>@u2.dev</p>
                </div>
            </footer>
        </>
    )
}