import '../assets/scss/works.scss'
import left from '../assets/images/Left.png'
import right from '../assets/images/Right.png'

export const WorksComponent = _ => {
    return(
        <article className="main">

            <h4>-WORKS</h4>

            <div className="box-header">

                <div className="box">
                    <h1>Portfólio</h1>
                </div>

                <div className="box">
                    <img src={left} alt="left"/>
                    <img src={right} alt="right"/>
                </div>

            </div>
        </article>
    )
}