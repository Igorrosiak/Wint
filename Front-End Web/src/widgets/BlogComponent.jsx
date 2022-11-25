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
                    <img src={ImgLeft} alt="left" />
                    <p className="desc-1">Como desenvolver um protótipo interativo</p>
                    <br />
                    <p className="date-1">Dez 15, 2021</p>
                    <br />
                    <p className='txt-1'>Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus ...
                    </p>
                    <br />
                    <p className='p-1'>Continuar lendo</p>
                </div>

                <div className="box">
                    <img src={ImgCenter} alt="center" />
                    <p className="desc-2">Seja mais produtivo com Notion</p>
                    <br />
                    <p className="date-2">Ago 8, 2020</p>
                    <br />
                    <p className='txt-2'>Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus ...
                    </p>
                    <br />
                    <p className='p-2'>Continuar lendo</p>
                </div>

                <div className="box">
                    <img src={ImgRight} alt="right" />
                    <p className="desc-3">Criando um Accordion em ReactJS</p>
                    <br />
                    <p className="date-3">Out 10, 2022</p>
                    <br />
                    <p className='txt-3'>Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus ...
                    </p>
                    <br />
                    <p className='p-3'>Continuar lendo</p>
                </div>

            </div>
        </article>
    )
}