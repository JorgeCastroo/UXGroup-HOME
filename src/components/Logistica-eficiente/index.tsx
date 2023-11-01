import Image from 'next/image';
import style from './style.module.scss'; 

import imageLogisticaEficiente from '../../assets/LogisticaEficiente/logisticaEficiente.gif';

const image = [
    {
        Image: imageLogisticaEficiente.src
    }
]

const indicadoresBox = [
    
    {
        number: '+30K m²',
        text: 'CDs próprios para Fulfillment.'
    },
    {
        number: '99,3%',
        text: 'Armazenagem e CD no prazo D0.'
    },
    {
        number: '+99.86%',
        text: 'Acurácia de Inventário.'
    },
    {
        number: '20 ton',
        text: 'de carbono compensado no mês.'
    },
    {
        number: '70K',
        text: 'pedidos pesados faturados por mês.'
    },
    {
        number: '98%',
        text: 'performance de last mile.'
    },


]


export function LogisticaEficiente(){
    return(
        <section
        className={style.container}>

            <div className={style.Logisticabox}>
                <div className={style.logisticaBoxTextImage}>
                    <div className={style.textBoxLogisticaEficiente}>
                        <h1 className={style.titleLogisticaEficiente}>
                            Sua logística pode ser mais eficiente.
                        </h1>
                        <h2 className={style.subTitleLogisticaEficiente}>
                            Garanta a satisfação do seu cliente com uma gestão logística 100% integrada em todas as etapas.
                        </h2>
                        <p className={style.textLogisticaEficiente}>
                            Do first mile a reversa, oferecemos uma estrutura completa de fulfillment e transportes com 
                            tecnologia de ponta para otimização da operação. Oferecendo ao gestor de e-commerce, atuar de 
                            forma independente ou atrelada aos principais marketplaces, com mais visibilidade do ciclo do 
                            pedido, redução de custos e melhora na performance logística.
                        </p>
                    </div>
                    <div className={style.imageBoxLogisticaEficiente}>
                        {
                            image.map((item) => (
                                <img key={'imagem'} alt='mulher segurando uma caixa, sorrindo' className={style.imageLogisticaEficiente} src={item.Image} />
                            ))
                        }
                    </div>
                </div>
                <div className={style.indicadoresBox}>
                        <div className={style.indicadoresBoxOne}>
                            {   
                                indicadoresBox.map((item) => (
                                    <div key={'divControladora'} className={style.indicador}>
                                        <h2 className={style.titleIndicador}>{item.number}</h2>
                                        <p className={style.textIndicador}>{item.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                </div>
            </div>

        </section>
    )
}