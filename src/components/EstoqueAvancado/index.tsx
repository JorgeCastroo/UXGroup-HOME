import Image from 'next/image';
import style from './style.module.scss'; 

import estoqueAvancadoImage from '../../assets/EstoqueAvancado/estoque-avancado.gif'

export function EstoqueAvancado(){
    return (
        <section className={style.container}> 
            <div className={style.containerBox}>
                <div className={style.boxTitle}>
                    <h1 className={style.titleEstoqueAvancado}>
                       Estoque  
                        <span style={{color:'#FAD303'}}> avancado</span>    
                    </h1>
                </div>
                <div className={style.textImageText}>
                    <Image width={100} height={100} className={style.imageMobile} src={estoqueAvancadoImage.src} alt="" />
                    <div className={style.listOne}>
                        <div className={style.itemList}>
                            <h2 className={style.titleItemList}>
                                Localização estratégica:
                            </h2>
                            <p className={style.textItemList}>
                                CDs distintos para operação de itens
                                leves e pesados localizados na região
                                metropolitana de São Paulo, local de
                                maior volume de vendas do e-commerce
                                brasileiro.
                            </p>
                        </div>
                        <div className={style.itemList}>
                            <h2 className={style.titleItemList}>
                                CDs homologados:
                            </h2>
                            <p className={style.textItemList}>
                                pelos principais marketplaces que
                                possibilita a concentração em um
                                único estoque ou estoque avançado
                                (Curva A).
                            </p>
                        </div>
                    </div>
                    <div className={style.imageBox}>
                        <Image width={100} height={100} className={style.imageEstoque} src={estoqueAvancadoImage.src} alt="mulher segurando caixa sorrindo" />
                    </div>
                    <div className={style.listTwo}>
                        <div className={style.itemList}>
                            <h2 className={style.titleItemList}> 
                                140 pontos de PUDOs (pontos de coleta e entrega)
                            </h2>
                            <p className={style.textItemList}>
                                espalhados no centro da cidade em
                                parceria com marketplaces.
                            </p>
                        </div>
                        <div className={style.itemList}>
                            <h2 className={style.titleItemList}>
                                Gestão logística:
                            </h2>
                            <p className={style.textItemList}>
                                integrada com um time especializado em
                                fulfillment trabalhando lado a lado a
                                uma equipe de transportes para redução
                                de prazo de entrega (Same Day e Next Day
                                Delivery).
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.boxButtonEstoqueAvancado}>
                    <a href="#contact">
                        <button className={style.ButtonEstoqueAvancado}>
                            fale com um especialista
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}