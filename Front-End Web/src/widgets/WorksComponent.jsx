import '../assets/scss/works.scss'
import left from '../assets/images/Left.png'
import right from '../assets/images/Right.png'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'

export const WorksComponent = _ => {
    return(
        <article className="main-all">

            <h4>-WORKS</h4>

            <div className="box-header">
                <div className="box">
                    <h1>Portfólio</h1>
                </div>
                    <div className="box-back">
                        <img src={left} alt="left"  className="back"/>
                        <img src={right} alt="right" className="back"/>
                    </div>
            </div>
                    <article className="image-box">
                        <div className='box-img'>
                            <img src={image1} />
                        </div>

                        <div className="box-img">
                            <img src={image2} />
                        </div>

                        <div className="box-img">
                            <img src={image3} />
                        </div>
                    </article>
            
        </article>
    )
}