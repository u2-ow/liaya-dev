import Styles from "../styles/articlePostArea.module.scss"
import dayjs from "dayjs";
import { SectionTitle } from "./SectionTitle"

export const ArticlePostArea =({blog})=>{

    return(
        <>
         <div className={Styles.articlePostArea}>
         <SectionTitle text="記事一覧" client:load />
         <ul className={Styles.articlePosts}>
         {blog.contents && Array.isArray(blog.contents) && blog.contents.map((item, index) => (
            <li key={index} className={Styles.articlePostsItem}>
                <a href={item.id}>
                    <img src={item.eyecatch?.url} alt="" className={Styles.articlePostsItemThm} />
                    <p className={Styles.articlePostsItemTitle}>{item.title}</p>
                    <p className={Styles.articlePostsItemDate}>{dayjs(item.publishedAt).format('YYYY/MM/DD')}</p>
                    <p className={Styles.articlePostsItemDesc}>{item?.description}</p>
                </a>
            </li>
        ))}
         </ul>

         </div>
  
        </>
    )
}