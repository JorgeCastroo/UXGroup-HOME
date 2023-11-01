"use client"
import { useState } from 'react';
import style from './style.module.scss'; 
import { FaBoxOpen } from 'react-icons/fa';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

interface ModalData {
    title: string;
    subtitle: string;
    text: string;
    image: string;
}

// import armazenagemImage from '/assets/ArmazenagemInteligente/modal/armazenagem.png';
// import embalagemImage from '/assets/ArmazenagemInteligente/modal/embalagem.png';
// import layoutAutomacao from '/assets/ArmazenagemInteligente/modal/layout-e-automacao.png';
// import pickingPacking from '/assets/ArmazenagemInteligente/modal/picking.png';
// import auditoria from '/assets/ArmazenagemInteligente/modal/auditoria.png';
// import gestaoEstoque from '/assets/ArmazenagemInteligente/modal/gestao-de-estoque.png'
// import reversa from '/assets/ArmazenagemInteligente/modal/reversa.png'
import Image from 'next/image';

const buttonsAndModal = [
    {
        text: 'Armazenagem',
        modal: {
            title: 'Armazenagem inteligente',
            subtitle: 'Armazenagem:',
            text: 'Todos os produtos armazenados e geridos com garantia de que todos os SLAs serão cumpridos para a melhor experiência do seu cliente.',
            href: 'http://',
            image: "/assets/ArmazenagemInteligente/modal/embalagem.png"
        }
    },
    {
        text: 'Embalagem',
        modal: {
            title: 'Armazenagem inteligente',
            subtitle: 'Embalagem:',
            text: 'Embalagem como diferencial. Personalizamos o pedido com recados, aromas para que tudo chegue do seu jeito e encante o seu cliente.',
            image: "/assets/ArmazenagemInteligente/modal/embalagem.png"
        }
    },
    {
        text: 'Layout e Automação',
        modal: {
            title: 'Armazenagem inteligente',
            subtitle: 'Layout e Automação:',
            text: 'Agilidade na hora da separação. Com a criação do fluxo lógico na armazenagem dos produtos de acordo com as vendas e automação das etapas, garantimos o cumprimento de prazos.',
            image: "/assets/ArmazenagemInteligente/modal/layout-e-automacao.png"
        }
    },
    {
        text: 'Picking e Packing',
        modal: {
            title: 'Armazenagem inteligente',
            subtitle: 'Picking e Packing:',
            text: 'Qualidade e cuidado nas etapas de separação, conferência e empacotamento para que o pedido saia com rapidez e intacto para o cliente.',
            // image: pickingPacking.src
            image: "/assets/ArmazenagemInteligente/modal/picking.png"
        }
    },
    {
        text: 'Auditoria de Estoque',
        modal: {
            title: 'Armazenagem inteligente',
            subtitle: 'Auditoria de Estoque',
            text: 'Controle total do estoque. Por calendário fixo, fechamento de ciclos ou de forma permanente. Com a UX seu estoque é 100% auditado internamente e por auditoria externa.',
            // image: auditoria.src
            image: "/assets/ArmazenagemInteligente/modal/auditoria.png"
        }
    },
    {
        text: 'Gestão de Estoque',
        modal: {
            title: 'Armazenagem inteligente',
            subtitle: 'Gestão de Estoque',
            text: 'Evite desperdícios e reduza custos com uma gestão de estoque com controle total da quantidade de produtos em estoque, volume de vendas e sazonalidade.',
            // image: gestaoEstoque.src
            image: "/assets/ArmazenagemInteligente/modal/gestao-de-estoque.png"
        }
    },
    {
        text: 'Logística Reversa',
        modal: {
            title: 'Armazenagem inteligente',
            subtitle: 'Logística Reversa',
            text: 'Tão importante quanto a entrega é o processo de reversa. Controlamos as trocas e devoluções com a mesma eficiência e gestão de estoque da venda.',
            // image: reversa.src
            image: "/assets/ArmazenagemInteligente/modal/reversa.png"
        }
    },
];

export function ArmazenagemInteligente() {
    const [currentModalIndex, setCurrentModalIndex] = useState<number | null>(null);

    const openModal = (modalData: ModalData, index: number) => {
        setCurrentModalIndex(index);
    };

    const closeModal = () => {
        setCurrentModalIndex(null);
    };

    const navigateToPrevious = () => {
        if (currentModalIndex !== null && currentModalIndex > 0) {
            setCurrentModalIndex(currentModalIndex - 1);
        }
    };

    const navigateToNext = () => {
        if (currentModalIndex !== null && currentModalIndex < buttonsAndModal.length - 1) {
            setCurrentModalIndex(currentModalIndex + 1);
        }
    };

    return (
        <section className={style.container}>
            <div className={style.containerBox}>
                <div className={style.contentImageBox}>
                    <div className={style.contentText}>
                        <h1 className={style.titleArmazenagemInteligente}>
                            Armazenagem <span style={{ color: '#FAD303' }}>inteligente</span>
                        </h1>
                        <Image width={100} height={100} className={style.imageMobile} src={'https://uxff.com.br/wp-content/uploads/2023/06/Armazenagem-inteligente-1.gif'} alt="" />
                        <h2 className={style.subtitleArmazenagemInteligente}>
                            O seu produto armazenado, conferido e despachado de maneira rápida e eficiente. Desde o
                            recebimento até a expedição.
                        </h2>
                        <div className={style.boxButtonsArmazenagem}>
                            {buttonsAndModal.map((item, index) => (
                                <button
                                    key={index}
                                    className={style.buttonArmazenagem}
                                    onClick={() => openModal(item.modal, index)}
                                >
                                    {item.text}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={style.contentImage}>
                        <Image width={100} height={100}
                            className={style.imageBannerArmazenagem}
                            src="https://uxff.com.br/wp-content/uploads/2023/06/Armazenagem-inteligente-1.gif"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {currentModalIndex !== null && (
                <div className={style.modalBackdrop}>
                    <div className={style.modal}>
                        <div className={style.imageModalBox}>
                            <Image width={100} height={100} className={style.imageModal} src={buttonsAndModal[currentModalIndex].modal.image} alt="Image Modal" />
                        </div>
                        <div className={style.customModal}>
                            
                            <div className={style.contentTextModal}>
                                <div className={style.closeModal} onClick={closeModal}>
                                    <AiFillCloseCircle/>
                                </div>
                                <div className={style.iconTitle} style={{ display: 'flex', alignItems: 'center', gap: '2%' }}>
                                    <span style={{display:'flex', alignItems:'center', fontSize:'1.4rem'}}>
                                         <FaBoxOpen></FaBoxOpen>
                                    </span>
                                   
                                    <h1 className={style.titleMinModal}>armazenagem <span style={{color:'#FAD303'}}>inteligente</span></h1>
                                </div>
                                <h2 className={style.titleModal}>{buttonsAndModal[currentModalIndex].modal.subtitle}</h2>
                                <p className={style.textModal}>{buttonsAndModal[currentModalIndex].modal.text}</p>
                                <div className={style.navModal}>
                                    <button className={style.buttonModal}>
                                        <a style={{textDecoration:'none', color:'#000'}} href="#contact" onClick={closeModal}>falar com um especialista</a>
                                    </button>
                                    <div style={{display:'flex', gap:'10px'}}>
                                        <span className={style.arrows} onClick={navigateToPrevious}>
                                            <BsFillArrowLeftCircleFill />
                                        </span>
                                        <span className={style.arrows} onClick={navigateToNext}>
                                            <BsFillArrowRightCircleFill />
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
