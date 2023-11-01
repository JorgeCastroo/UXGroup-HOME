import style from './style.module.scss'; 
import { AiFillCheckSquare }  from 'react-icons/ai'



const itemsList = [

    {
        icon: AiFillCheckSquare,
        text: 'Tecnologia atrelada em todas as etapas do processo do pedido.'
    },

    {
        icon: AiFillCheckSquare,
        text: 'Concentração da comunicação e toda a gestão de transportes em um único lugar com TMS Transportador.'
    },

    {
        icon: AiFillCheckSquare,
        text: 'Gerenciamento do fluxo do pedido do first ao last mile através do app para motoristas.'
    },

    {
        icon: AiFillCheckSquare,
        text: 'Live tracking pró-ativo com auto atendimento ao cliente.'
    },

    {
        icon: AiFillCheckSquare,
        text: 'Gestão de Performance com dashboards da operação.'
    },

]

export function ControleTotal(){
    return (
        <section className={style.container}>

            <div className={style.containerBox}>
                <div className={style.titleListBox}>

                    <div className={style.boxTitle}>
                        <h1 className={style.title}> 
                            Garanta controle total da sua logística.
                        </h1>
                        <h3 className={style.subTitle}>
                            Tecnologia atrelada em todas as etapas do processo do pedido.
                        </h3>
                    </div>
                    <div className={style.listBox}>
        
                        {
                            itemsList.map((item) =>(
                                <div key={'div'} className={style.itemList}>

                                    <h1 className={style.iconItem}>
                                        <AiFillCheckSquare style={{ color: '#FAD303' }} />
                                    </h1>
                                    <h2 className={style.titleItem}>
                                        {item.text}
                                    </h2>

                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>

        </section>
    )
}