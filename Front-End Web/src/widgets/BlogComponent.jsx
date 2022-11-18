import '../assets/scss/blog.scss'
import ImgLeft from '../assets/images/img-left.png'
import ImgRight from '../assets/images/img-right.png'
import ImgCenter from '../assets/images/center.png'

export const BlogComponent = _ => {
    return (
        <article className="main">
            <h1>Blog Pessoal</h1>

            <div className="images-box">

                <div className="box">
                    <img src={ImgLeft} alt="left"/>
                </div>

                <div className="box">
                    <img src={ImgCenter} alt="center"/>
                </div>

                <div className="box">
                    <img src={ImgRight} alt="right"/>
                </div>

            </div>
        </article>
    )
}