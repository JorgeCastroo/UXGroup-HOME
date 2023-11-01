// import './globals.css'

import { LogisticaEficiente } from '@/components/Logistica-eficiente';
import { Banner } from './components/banner/index';
import { ContactForm } from './components/contactForm/index';
import { Footer } from './components/footer/index';
import { Header } from './components/header/';
import Head from 'next/head';
import { ControleTotal } from '@/components/ControleTotal';
import { ArmazenagemInteligente } from '@/components/ArmazenagemInteligente';
import { EstoqueAvancado } from '@/components/EstoqueAvancado';
import { ValorCliente } from '@/components/ValorCliente';
import { Cta } from '@/components/cta';

export default function Home() {
  return (
    <>
      <Head>
        <title>UX | Operações</title>
        <meta name="description" content="TECNOLOGIA E GESTÃO LOGÍSTICA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        <LogisticaEficiente />
        <ControleTotal />
        <ArmazenagemInteligente />
        <EstoqueAvancado />
        <Cta />
        <ValorCliente />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
