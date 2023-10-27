import style from './style.module.scss';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import UXBannerMidia from '@/assets/banner-uxnamidia.gif';

import InteligenciaOperacional from '@/assets/UX-na-midia/inteligencia-operacional-e-seus-impactos-na-performance-logistica-e-commerce-brasil.png';
import PetLoveEleva from '@/assets/UX-na-midia/petlove-eleva-performance-logistica-em-90-no-sul-do-pais-sbvc.png';
import Chatbots from '@/assets/UX-na-midia/como-os-chatbots-podem-apoiar-a-logistica-mundo-logistica.png';
import Fulfillment from '@/assets/UX-na-midia/fulfillment-por-que-interessa-aos-pequenos-e-grandes.png';
import Estrategias from '@/assets/UX-na-midia/estrategias-para-ser-diferente-aos-olhos-da-geracao-z-clientesa.png';
import Amazon from '@/assets/UX-na-midia/ux-group-sela-acordo-com-amazon-para-integrar-o-grupo-de-parceiros-spn - mundo-do-marketing.png';
import Gestao from '@/assets/UX-na-midia/ux-group-desenvolve-sistema-de-gestao-de-parceiros-e-aprimora-operacionalizacao-das-entregas.png';
import ImageCaio from '@/assets/UX-na-midia/ImageCaio.jpg';
import ImageOndetah from '@/assets/UX-na-midia/imageOndetah.png';
import {useEffect, useRef} from "react";

export function UXMedia() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const step = 300;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = 'smooth'
    }
  }, [])

  const left = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(scrollRef.current.scrollLeft - step, 0);
    }
  }

  const right = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(scrollRef.current.scrollLeft + step, 0);
    }
  };

  return (
    <section id="ux-media" className={style.container}>
      <div className={style.margin}>
        <div className={style.titleBlock}>
          <h2 className={style.title}>UX na mídia.</h2>
          <p className={style.subtitle}>Saiba o que estão dizendo sobre nós.</p>
        </div>
        <div className={style.galery}>
          <div className={style.cards} ref={scrollRef}>
            <a
              className={style.card}
              href="https://portal.clientesa.com.br/cliente-sa/os-influencers-como-nicho-promissor-para-o-fulfillment/"
              target="_blank"
            >
              <div className={style.img}>
                <Image
                  src={ImageCaio}
                  width={248}
                  height={126}
                  alt="Placement Area"
                />
              </div>
              <div className={style.content}>
                <h3 className={style.title}>
                  Os influencers como nicho promissor para o fulfillment
                </h3>
                <span>Acessar &gt;</span>
              </div>
            </a>
            <a
              className={style.card}
              href="https://mundologistica.com.br/noticias/dafiti-firma-parceria-com-ux-group-para-automatizar-operacoes-logisticas"
              target="_blank"
            >
              <div className={style.img}>
                <Image
                  src={ImageOndetah}
                  width={248}
                  height={126}
                  alt="Placement Area"
                />
              </div>
              <div className={style.content}>
                <h3 className={style.title}>
                  Dafiti firma parceria com UX Group para automatizar operações logísticas
                </h3>
                <span>Acessar &gt;</span>
              </div>
            </a>
            <a
              className={style.card}
              href="https://www.ecommercebrasil.com.br/artigos/inteligencia-operacional-e-seus-impactos-na-performance-logistica"
              target="_blank"
            >
              <div className={style.img}>
                <Image
                  src={InteligenciaOperacional}
                  width={248}
                  height={126}
                  alt="Placement Area"
                />
              </div>
              <div className={style.content}>
                <h3 className={style.title}>
                  Inteligência operacional e seus impactos na performance
                  logística E-commerce Brasil
                </h3>
                <span>Acessar &gt;</span>
              </div>
            </a>
            <a
              className={style.card}
              target="_blank"
              href="https://mundologistica.com.br/revista-extra/como-os-chatbots-podem-apoiar-a-logistica"
            >
              <div className={style.img}>
                <Image
                  src={Chatbots}
                  width={248}
                  height={126}
                  alt="Placement Area"
                />
              </div>
              <div className={style.content}>
                <h3 className={style.title}>
                  Como os chatbots podem apoiar a logística? - Mundo Logística
                </h3>
                <span>Acessar &gt;</span>
              </div>
            </a>
            <a
              className={style.card}
              target="_blank"
              href="https://sbvc.com.br/petlove-eleva-performance-logistica-em-90-no-sul-do-pais/"
            >
              <div className={style.img}>
                <Image
                  src={PetLoveEleva}
                  width={248}
                  height={126}
                  alt="Placement Area"
                />
              </div>
              <div className={style.content}>
                <h3 className={style.title}>
                  Petlove eleva performance logística em 90% no Sul do país-
                  SBVC
                </h3>
                <span>Acessar &gt;</span>
              </div>
            </a>
            <a
              className={style.card}
              target="_blank"
              href="https://www.ecommercebrasil.com.br/artigos/fulfillment-por-que-interessa-aos-pequenos-e-grandes"
            >
              <div className={style.img}>
                <Image
                  src={Fulfillment}
                  width={248}
                  height={126}
                  alt="Placement Area"
                />
              </div>
              <div className={style.content}>
                <h3 className={style.title}>
                  Fulfillment: por que interessa aos pequenos e grandes?
                  E-commerce Brasil
                </h3>
                <span>Acessar &gt;</span>
              </div>
            </a>
            <a
              className={style.card}
              target="_blank"
              href="https://portal.clientesa.com.br/cliente-sa/estrategias-para-ser-diferente-aos-olhos-da-geracao-z/"
            >
              <div className={style.img}>
                <Image
                  src={Estrategias}
                  width={248}
                  height={126}
                  alt="Placement Area"
                />
              </div>
              <div className={style.content}>
                <h3 className={style.title}>
                  Estratégias para ser diferente aos olhos da geração Z-
                  ClienteSA
                </h3>
                <span>Acessar &gt;</span>
              </div>
            </a>
            <a
              className={style.card}
              target="_blank"
              href="https://www.mundodomarketing.com.br/noticias-corporativas/conteudo/285412/ux-group-sela-acordo-com-amazon-para-integrar-o-grupo-de-parceiros-spn/"
            >
              <div className={style.img}>
                <Image
                  src={Amazon}
                  width={248}
                  height={126}
                  alt="Placement Area"
                />
              </div>
              <div className={style.content}>
                <h3 className={style.title}>
                  UX Group sela acordo com Amazon para integrar o grupo de
                  parceiros SPN- Mundo do Marketing
                </h3>
                <span>Acessar &gt;</span>
              </div>
            </a>
            <a
              className={style.card}
              target="_blank"
              href="https://www.tecnologistica.com.br/noticias/lancamento-de-produtos/16917/ux-group-desenvolve-sistema-de-gestao-de-parceiros-e-aprimora-operacionalizacao-das-entregas/#:~:text=UX%20Group%20desenvolve%20sistema%20de%20gest%C3%A3o%20de%20parceiros%20e%20aprimora%20operacionaliza%C3%A7%C3%A3o%20das%20entregas,-Empresa%20espera%20atender&text=A%20UX%20Group%20anuncia%20o,das%20entregas%2C%20denominado%20Rede%20Credenciada."
            >
              <div className={style.img}>
                <Image
                  src={Gestao}
                  width={248}
                  height={126}
                  alt="Placement Area"
                />
              </div>
              <div className={style.content}>
                <h3 className={style.title}>
                  UX Group desenvolve sistema de gestão de parceiros e aprimora
                  operacionalização das entregas-Tecnologística
                </h3>
                <span>Acessar &gt;</span>
              </div>
            </a>
          </div>
          <div className={style.control}>
            <button onClick={left}>
              <FaArrowLeft size={12} />
            </button>
            <span>01/56</span>
            <button onClick={right}>
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
      <div className={style.image}>
        <Image src={UXBannerMidia} alt="UX Banner mídia" />
      </div>
    </section>
  );
}
