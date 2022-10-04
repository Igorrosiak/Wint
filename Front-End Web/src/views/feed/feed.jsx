import "./feed.scss"
import logoFeed from "../../assets/images/logoFeed.png"

export const Feed = _ =>{
    return(
        <main className="feed">
            <article className="image">
                <div className="image-box">
                    <img src={logoFeed} alt=""/>
                </div>
            </article>
        
        <article className="images-box">

            <div className="box">

            </div>

            <div className="box">

            </div>

        </article>
        </main>
    )
}