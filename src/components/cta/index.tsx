import style from './style.module.scss';

export function Cta(){
    return (
            <section className={style.container}> 
                <div className={style.containerBox}>
                    <div className={style.contentCta}>
                        <h1 className={style.titleCta}>
                            Conquiste sua autonomia logística
                        </h1>
                        <p className={style.subTitleCta}>
                            Atue de forma independente e complementar à logística dos marketplaces.
                        </p>
                        <div className={style.boxButtonsCta}>
                            <a className={style.buttonCtaOne} href="#contact">
                                <button>
                                    solicite uma demo
                                </button>
                            </a>
                            <a className={style.buttonCtaTwo} target='blank' href="https://calendly.com/natielen-campos/ux-group-voce?month=2023-09">
                                <button>
                                    agende uma reunião
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    )
}