import React, { useState } from 'react';
import Script from 'next/script';
import style from './style.module.scss'; // Importe o arquivo de estilo correto

export function ContactModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className={style.container}>
      <div className={style.titleBlock}>
        <h2 className={style.title}>
          Potencialize as suas vendas com seu estoque centralizado.
        </h2>
        <p className={style.subtitle}>
          Com a UX Group, você garante a gestão da sua operação.
        </p>
        <button onClick={openModal} className={style.link}>
          falar com um especialista
        </button>
      </div>

      {/* O modal */}
      {modalIsOpen && (
        <div className={style.modalBackdrop}>
          <div className={style.modal}>
            <div className={style.buttonBox}>
              <button onClick={closeModal} className={style.closeButton}>
              X
            </button>
            </div>

            <div className={style.modalContent}>
              <h3 className={style.titleModal} >
                Gerenciar o estoque do seu e-commerce pode ser desafiador, não é mesmo?
              </h3>
              <p className={style.subTitleModal}>
                  Garanta mais controle, visibilidade, e integração para agilizar e
                  simplificar as suas operações logísticas.  Invista nessa parceria estratégica para impulsionar o sucesso do seu e-commerce.
              </p>
              <div role="main" id="formulario-cd-homologado-home-uxg-85cbcb6fe0718a2ac440"></div>
              <Script type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js" id=''></Script>
              <Script id='' type="text/javascript">
                new RDStationForms(`formulario-cd-homologado-home-uxg-85cbcb6fe0718a2ac440`, `UA-191432220-1`).createForm();
              </Script>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
