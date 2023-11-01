"use client"

import { useState } from 'react';
import style from './style.module.scss';
import Script from 'next/script';

export function ContactForm() {
  const [rendered, setRendered] = useState<boolean>(false);

  const onLoad = () => {
    setRendered(true);
  };

  return (
    <section id="contact" className={style.container}>
      <div className={style.titleBlock}>
        <h2 className={style.title}>Saiba mais sobre nossas soluções.</h2>
        <p className={style.subtitle}>
          Nos informe qual tipo de contato gostaria de fazer.
        </p>
      </div>
      <div className={style.containerForm}>
        <div
          role="main"
          id="formulario-provisorio-novo-site-ux-ea9cfd47c9dd2de18f79"
          onLoad={onLoad}
        ></div>
        <Script
          type="text/javascript"
          src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"
          onLoad={() => {
            console.log('eval')
            eval(`new RDStationForms('formulario-provisorio-novo-site-ux-ea9cfd47c9dd2de18f79', 'UA-191432220-1').createForm()`)
          }}
        />
      </div>
    </section>
  );
}
