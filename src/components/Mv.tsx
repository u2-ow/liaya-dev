import Styles from "../styles/Mv.module.scss"

export const MV =()=>{
    return(
        <>
            <div className={Styles.mv}>
                <div className={Styles.mvInner}>
                    <p className={Styles.mvInnerTitle}>Welcome to <span className={Styles.mvInnerTitleSpan}>U2.dev</span> 🥳</p>
                    <p className={Styles.mvInnerText}>週に1投稿を目標で運営をしています。自分の興味の内容を投稿します。</p>
                    <a href="/" className={Styles.mvInnerLink}>about me <i class="fa-solid fa-angles-right mvInnerLinkArrow" className={Styles.mvInnerLinkArrow}></i></a>
                </div>
            </div>
  
        </>
    )
}