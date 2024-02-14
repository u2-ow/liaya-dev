import Styles from "../styles/articlePostArea.module.scss"
import { SectionTitle } from "./SectionTitle"

export const ArticlePostArea =({blog})=>{

    return(
        <>
         <div className={Styles.articlePostArea}>
         <SectionTitle text="記事一覧" />
         <ul className={Styles.articlePosts}>
         {blog.contents && Array.isArray(blog.contents) && blog.contents.map((item, index) => (
            <li key={index} className={Styles.articlePostsItem}>
                {/* Replace 'title' with the appropriate property you want to display */}
                <p className={Styles.articlePostsItemTitle}>{item.title}</p>
            </li>
        ))}
         </ul>

         </div>
  
        </>
    )
}