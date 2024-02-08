import Styles from "../styles/Mv.module.scss"

export const MV =()=>{
    return(
        <>
            <div className={Styles.mv}>
                <div className={Styles.mvInner}>
                    <p className={Styles.mvInnerTitle}>Welcome to <span className={Styles.mvInnerTitleSpan}>U2.dev</span> 🥳</p>
                    <p className={Styles.mvInnerText}>週に1投稿を目標で運営をしていきます。自分の興味の内容を投稿します。</p>
                </div>
            </div>
  
        </>
    )
}