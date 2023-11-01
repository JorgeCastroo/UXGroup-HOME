import style from './style.module.scss'; 
import { BiCheckCircle } from 'react-icons/bi'

import gereValorImage from '../../assets/gereValor/gereValor.gif'
import Image from 'next/image';

export function ValorCliente(){
    return(
        <section className={style.container}> 
                <div className={style.containerBox}>

                    <div className={style.ImageText}>
                        <div className={style.textContent}>
                            <h1 className={style.titleValorCliente}>
                                Gere valor para o seu cliente.
                            </h1>
                            <h2 className={style.subTitleValorCliente}>
                                Tenha seu e-commerce alinhado às melhores práticas de mercado.
                            </h2>
                            <div className={style.iconText}>
                                <h3>
                                    <BiCheckCircle/>
                                </h3>
                                <span className={style.textItem}>
                                    Entregas 100% compensadas.
                                </span>
                            </div>
                            <div className={style.iconText}>
                                <h3>
                                    <BiCheckCircle />
                                </h3>
                                <span className={style.textItem}>
                                    Auto atendimento de SAC 24 com chatbot.
                                </span>
                            </div>
                            <div className={style.iconText}>
                                <h3>
                                    <BiCheckCircle/>
                                </h3>
                                <span className={style.textItem}>
                                    Entregas com motos elétricas.
                                </span>
                            </div>
                            <div className={style.iconText}>
                                <h3>
                                    <BiCheckCircle />
                                </h3>
                                <span className={style.textItem}>
                                    Notificação de aviso de próxima entrega ao cliente.
                                </span>
                            </div>
                            <a className={style.buttonValorCliente} href="">
                                <button>
                                    fale com um especialista
                                </button>
                            </a>
                        </div>
                        <div className={style.ImageContent}>
                            <div className={style.controllerImage}>
                                <Image key={'imagem'} width={100} height={100} src={gereValorImage.src} alt="homem ruivo sorrindo olhando o laptop" />
                            </div>
                        </div>
                    </div>

                </div>
        </section>
    )
}