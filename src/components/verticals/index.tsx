import style from './style.module.scss';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useWindowSize } from '@/hooks/use-window-size';
import Image from 'next/image';

import CommerceImage from '@/assets/Verticais-Mobile/ux-commerce.png';
import PayImage from '@/assets/Verticais-Mobile/ux-pay.png';
import ConnectImage from '@/assets/Verticais-Mobile/ux-connect.png';
import DeliveryImage from '@/assets/Verticais-Mobile/ux-delivery.png';
import FulfillmentImage from '@/assets/Verticais-Mobile/ux-fulfillment.png';
import SolutionsImage from '@/assets/Verticais-Mobile/ux-solutions.png';

import UXCommerceLogo from '@/assets/Verticais-Mobile/ux-commerce-logo.svg';
import UXFulfillmentLogo from '@/assets/Verticais-Mobile/ux-fulfillment-logo.svg';
import UXPayLogo from '@/assets/Verticais-Mobile/ux-pay-logo.svg';
import UXSolutionsLogo from '@/assets/Verticais-Mobile/ux-solutions-logo.svg';
import UXConnectLogo from '@/assets/Verticais-Mobile/ux-connect-logo.svg';
import UXDeliveryLogo from '@/assets/Verticais-Mobile/ux-delivery-logo.svg';

const IMAGES = [
  {
    img: FulfillmentImage,
    href: 'https://uxff.com.br/',
    title: 'Excelência na gestão de operações.',
    description:
      'A UX possui know how e estruturas próprias localizadas em regiões estratégicas para oferecer um serviço de armazenagem e movimentação de pedidos de forma ágil, permitindo não só o controle, como também um melhor prazo para entregas.',
    buttons: [
      'Fale agora com um especialista em fulfillment',
      'Visite o site da UX Fulfillment para saber mais',
    ],
    color: 'Yellow',
  },
  {
    img: SolutionsImage,
    logoImg: UXSolutionsLogo,
    alt: 'UX Solutions',
    href: 'https://uxsolutions.com.br/',
    title: 'Tecnologia para gestão logística.',
    description:
      'Toda a tecnologia necessária para gerenciar a logística de uma operação de e-commerce. A UX, como diferencial, possui as soluções de TMS embarcador, TMS transportador, WMS e aplicativos desenvolvidos dentro de casa, com o objetivo de oferecer uma experiência única de gestão ao parceiro.',
    buttons: [
      'Fale agora com um especialista em tecnologia',
      'Visite o site da UX Solutions para saber mais',
    ],
    color: 'Blue',
  },
  {
    img: ConnectImage,
    logoImg: UXConnectLogo,
    alt: 'UX Connect',
    href: 'https://uxconnect.com.br/',
    title: 'Experiência integrada na gestão do cliente.',
    description:
      'A experiência do usuário ao longo da compra e da entrega são dois fatores essenciais para a retenção e atração de clientes, por isso a UX desenvolveu ferramentas que permitem o consumidor a ter informação em tempo real sobre seus pedidos com a possibilidade de interagir com os agentes responsáveis por sua entrega.',
    buttons: [
      'Fale agora com um especialista em customer experience',
      'Visite o site da UX Connect para saber mais',
    ],
    color: 'Purple',
  },
  {
    img: DeliveryImage,
    logoImg: UXDeliveryLogo,
    alt: 'UX Delivery',
    title: 'Inovação na gestão de transportes.',
    href: 'https://uxdelivery.com.br/',
    description:
      'A UX entende que o transporte pode ser um grande diferencial como etapa final deste processo. Por isso a UX investe em soluções que irão transformar a experiência de compra com tecnologia, performance e preocupação com o meio ambiente. Toda entrega UX Delivery é livre de emissão de CO².',
    buttons: [
      'Fale agora com um especialista em transporte',
      'Visite o site da UX Delivery para saber mais',
    ],
    color: 'Red',
  },
];

export function Verticals() {
  const size = useWindowSize();
  const isDesktopMedia = size.width === undefined || size.width > 1024;
  const [index, setIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const slides = [0, 1, 2, 3 ];
  const length = slides.length;

  const next = () => {
    if (index < length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      if (index < length - 1) {
        next();
      }
    }

    if (diff < -5) {
      if (index > 0) {
        prev();
      }
    }

    setTouchPosition(null);
  };

  return (
    <section id="verticals" className={style.container}>
      <div className={style.titleBlock}>
        <h2 className={style.title}>A solução UX.</h2>
        <p className={style.subtitle}>
          Para cada etapa do processo de venda digital, a UX possui uma solução
          própria, com especialistas em e-commerce.
        </p>
      </div>
      <div className={style.carousel}>
        <div className={style.control}>
          <button className={style.left} onClick={prev}>
            <FaArrowLeft />
          </button>
          <div
            className={style.controlSlider}
            style={{
              transform: isDesktopMedia
                ? 'initial'
                : `translateX(-${index * 100}%)`,
            }}
          >
            <div className={style.controlSlide}>
              <button
                onClick={() => setIndex(0)}
                className={`${style.colorYellow} ${
                  index === 0 ? style.active : ''
                }`}
              >
                Fulfillment 
              </button>
            </div>
            <div className={style.controlSlide}>
              <button
                onClick={() => setIndex(1)}
                className={`${style.colorBlue} ${
                  index === 1 ? style.active : ''
                }`}
              >
                Tecnologia
              </button>
            </div>
            <div className={style.controlSlide}>
              <button
                onClick={() => setIndex(2)}
                className={`${style.colorPurple} ${
                  index === 2 ? style.active : ''
                }`}
              >
                Experiência
              </button>
            </div>
            <div className={style.controlSlide}>
              <button
                onClick={() => setIndex(3)}
                className={`${style.colorRed} ${
                  index === 3 ? style.active : ''
                }`}
              >
                Entrega
              </button>
            </div>
          </div>
          <button className={style.right} onClick={next}>
            <FaArrowRight />
          </button>
        </div>
        <div
          className={style.slider}
          style={{
            transform: isDesktopMedia
              ? index == 5
                ? 'translateX(-474%)'
                : index < 1
                ? `translateX(-${index * 75}%)`
                : `translateX(-${180 + (index - 2) * 110}%)`
              : `translateX(${10 - index * 80}%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`${style.slide} ${index === idx ? style.active : ''}`}
              onClick={() => setIndex(idx)}
              style={{
                backgroundImage: `url("${IMAGES[idx].img.src}")`,
                transform: `${
                  idx !== index
                    ? `scale(${1 - Math.abs(index - idx) * 0.15})`
                    : ''
                } translateX(${(index - idx) * 56}%)`,
                zIndex: index === idx ? 0 : -Math.abs(index - idx),
              }}
            >
              <div className={style.content}>
                <h3>{IMAGES[idx].title}</h3>
                <p className={style.description}>{IMAGES[idx].description}</p>
              </div>
              <div className={style.buttons}>
                <a href={IMAGES[idx].href} target="_blank" className={style[`color${IMAGES[idx].color}`]}>
                  acessar o site
                </a>
                <a href="https://calendly.com/natielen-campos/ux-group-voce?month=2023-08">agende uma reunião</a>
                
              </div>
            </div>
          ))}
        </div>

        <div className={style.indicators}>
          <ul>
            {slides.map((_, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setIndex(idx)}
                  className={idx === index ? style.active : ''}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
