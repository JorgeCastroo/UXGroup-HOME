import style from './style.module.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';
import { useWindowSize } from '@/hooks/use-window-size';

// import images
import PlanejamentoMiniImage from '@/assets/Fluxo-Desktop/Desktop-sessao-fluxo-PLANEJAMENTO-MINI.png';
import VendasMiniImage from '@/assets/Fluxo-Desktop/Desktop-sessao-fluxo-VENDAS-MINI.png';
import EntregaMiniImage from '@/assets/Fluxo-Desktop/Desktop-sessao-fluxo-ENTREGAS-MINI.png';
import AnaliseMiniImage from '@/assets/Fluxo-Desktop/Desktop-sessao-fluxo-VENDAS-MINI.png'; 

import PlanejamentoImage from '@/assets/Fluxo-Desktop/Desktop-sessao-fluxo-PLANEJAMENTO.png';
import VendasImage from '@/assets/Fluxo-Desktop/Desktop-sessao-fluxo-VENDAS.png';
import EntregaImage from '@/assets/Fluxo-Desktop/Desktop-sessao-fluxo-ENTREGAS.png';
import AnaliseImage from '@/assets/Fluxo-Desktop/Desktop-sessao-fluxo-ANALISE.png';

import PlanejamentoImageMobile from '@/assets/Fluxo-Mobile/Mobile-sessao-fluxo-PLANEJAMENTO.png';
import VendasImageMobile from '@/assets/Fluxo-Mobile/Mobile-sessao-fluxo-VENDAS.png';
import EntregaImageMobile from '@/assets/Fluxo-Mobile/Mobile-sessao-fluxo-ENTREGAS.png';
import AnaliseImageMobile from '@/assets/Fluxo-Mobile/Mobile-sessao-fluxo-ANALISE.png';

const IMAGESINORDER = [
  {
    img: PlanejamentoMiniImage.src,
    mobileImage: PlanejamentoImageMobile.src,
    title: 'Planejamento',
    alt: '',
    description:
      'Defina público alvo, estratégia de produtos e canais de venda.',
    subtitle: 'Defina público alvo, estratégia de produtos e canais de venda.',
    longDescription:
      'É a primeira etapa e talvez uma das mais importantes. É onde as definições acontecem, fazer de forma bem pensada trará uma economia futura de tempo e com certeza de dinheiro.\n' +
      'Mas, o que envolve o planejamento?',
    links: [
      'Definir público alvo',
      'Definir mix de produtos',
      'Definir plataformas e canais de venda',
      'Escolher localização e volume de estoque',
      'Planejar malha logística',
      'Benchmarking',
    ],
    fullImage: PlanejamentoImage,
  },
  {
    img: VendasMiniImage.src,
    title: 'Vendas',
    alt: '',
    description:
      'Estruture sua loja, tenha relevância em marketplaces e uma solução para transações financeiras.',
    subtitle:
      'Estruture sua loja, tenha relevância em marketplaces e uma solução para transações financeiras.',
    longDescription:
      'Neste momento você precisa bater o martelo de quem vai auxiliar você a fazer o seu negócio funcionar. Quais soluções vão acompanhar nas suas vendas online, oferecendo informações, transparência e segurança para que foque no crescimento do negócio.',
    fullImage: VendasImage,
    mobileImage: VendasImageMobile.src,
    links: [
      'Implantar loja online',
      'Cadastro em marketplaces',
      'Definir meios de pagamento',
      'Emitir Nota Fiscal',
      'Realizar integrações',
      'Montar estrutura de SAC',
    ],
  },
  {
    img: EntregaMiniImage.src,
    title: 'Entrega',
    fullImage: EntregaImage,
    alt: '',
    description:
      'Defina parceiros logísticos, tecnologias e forneça uma boa experiência para seus clientes.',
    subtitle:
      'Defina parceiros logísticos, tecnologias e forneça uma boa experiência para seus clientes.',
    longDescription:
      'Esse é o momento que começa a ansiedade do seu cliente e o seu contato direto com ele, é a etapa final da sua venda e o início do seu pós venda. Então, o que é preciso considerar para esse processo?',
    mobileImage: EntregaImageMobile.src,
    links: [
      'Fulfillment',
      'Gestão de fretes',
      'Rastreamento',
      'Comunicação com o cliente',
      'Entrega para o cliente',
      'Logística reversa',
    ],
  },
  {
    img: AnaliseMiniImage.src,
    title: 'Análise',
    alt: '',
    description: 'Tenha controle financeiro e gestão sobre suas entregas.',
    subtitle: 'Tenha controle financeiro e gestão sobre suas entregas.',
    longDescription:
      'Agora, é hora de verificar os desempenhos de todas as etapas. Entender as evoluções, quais processos podem ser aprimorados, ou simplesmente, manter o fluxo. Nesta hora, é importante ter soluções e parceiros que lhe ofereçam relatórios para que esse processo possa ser feito com clareza.',
    fullImage: AnaliseImage,
    mobileImage: AnaliseImageMobile.src,
    links: [
      'Conciliação das vendas',
      'Conciliação de fretes',
      'Performance por região e produto',
      'Performance de entregas',
      'Inventário',
      'NPS',
    ],
  },
];

export function Flows() {
  const [current, setCurrent] = useState(1);
  const size = useWindowSize();
  const isDesktopMedia = size.width == undefined || size.width > 1024;

  const increment = () => {
    if (current < 3) {
      setCurrent(current + 1);
    }
  };

  const decrement = () => {
    if (current > 1) {
      setCurrent(current - 1);
    }
  };

  const getStyle = () => {
    return isDesktopMedia
      ? {}
      : { transform: `translateX(-${(current - 1) * 100}%)` };
  };

  return (
    <section id="flows" className={style.container}>
      <div className={style.cards}>
        <div className={style.cardContainer}>
          <div className={style.titleBlock}>
            <h2 className={style.title}>Os 4 pilares da venda digital.</h2>
            <p className={style.subtitle}>
              Entenda as principais atividades para um processo de venda eficaz.
            </p>
          </div>
          <div className={style.carousel}>
            <button
              type="button"
              className={style.leftButton}
              onClick={decrement}
            >
              <FaArrowLeft size={11} />
            </button>
            <div className={style.slider} style={getStyle()}>
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  className={`${style.card} ${
                    current - 1 === index ? style.active : ''
                  }`}
                  key={index}
                  onClick={() => setCurrent(index + 1)}
                >
                  <div className={style.number}>
                    {item.toString().padStart(2, '0')}
                  </div>
                  <div className={style.image}>
                    <img
                      src={
                        isDesktopMedia
                          ? IMAGESINORDER[index].img
                          : IMAGESINORDER[index].mobileImage
                      }
                      alt={IMAGESINORDER[index].alt}
                    />
                  </div>
                  <div className={style.description}>
                    <h3 className={style.title}>
                      {IMAGESINORDER[index].title}
                    </h3>
                    <p>{IMAGESINORDER[index].description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              className={style.rightButton}
              onClick={increment}
            >
              <FaArrowRight size={11} />
            </button>
          </div>
        </div>
        {!isDesktopMedia && (
          <ul className={style.numbers}>
            <li
              className={current === 0 ? style.active : ''}
              onClick={() => setCurrent(1)}
            >
              01
            </li>
            <li
              className={current === 1 ? style.active : ''}
              onClick={() => setCurrent(2)}
            >
              02
            </li>
            <li
              className={current === 2 ? style.active : ''}
              onClick={() => setCurrent(3)}
            >
              03
            </li>
            <li
              className={current === 3 ? style.active : ''}
              onClick={() => setCurrent(4)}
            >
              04
            </li>
          </ul>
        )}
      </div>
      <div className={style.content}>
        <div className={style.carousel}>
          <div
            className={style.slider}
            style={{ transform: `translateX(-${(current - 1) * 100}%)` }}
          >
            {[1, 2, 3, 4].map((item, index) => (
              <div className={style.step} key={index}>
                <div className={style.image}>
                  <div className={style.number}>
                    {item.toString().padStart(2, '0')}
                  </div>
                  <Image
                    src={IMAGESINORDER[index].fullImage}
                    alt={IMAGESINORDER[index].title}
                  />
                </div>
                <div className={style.stepContent}>
                  <h2 className={style.title}>{IMAGESINORDER[index].title}</h2>
                  <h3 className={style.subtitle}>
                    {IMAGESINORDER[index].subtitle}
                  </h3>
                  <p className={style.description}>
                    {IMAGESINORDER[index].longDescription}
                  </p>
                  <ul className={style.links}>
                    {IMAGESINORDER[index].links.map((link, index) => (
                      <li className={style.link} key={index}>
                        <h4>{link}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isDesktopMedia && (
          <ul className={style.numbers}>
            <li
              className={current === 1 ? style.active : ''}
              onClick={() => setCurrent(1)}
            >
              01
            </li>
            <li
              className={current === 2 ? style.active : ''}
              onClick={() => setCurrent(2)}
            >
              02
            </li>
            <li
              className={current === 3 ? style.active : ''}
              onClick={() => setCurrent(3)}
            >
              03
            </li>
            <li
              className={current === 4 ? style.active : ''}
              onClick={() => setCurrent(4)}
            >
              04
            </li>  
          </ul>
        )}
      </div>
    </section>
  );
}
