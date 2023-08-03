import style from './style.module.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

// image imports
import InovacaoImage from '@/assets/ESG/Mobile/Mobile-ESG---Inovação.gif';
import IntegracaoImage from '@/assets/ESG/Mobile/Mobile-ESG---Integração.gif';
import ResponsabilidadeImage from '@/assets/ESG/Mobile/Mobile-ESG---Responsabilidade.gif';

import LeafImage from '@/assets/ESG/Mobile/folha.png';
import MaosImage from '@/assets/ESG/Mobile/mãos.png';
import QuebraCabecaImage from '@/assets/ESG/Mobile/quebra-cabeça.png';

export function ESGMobile() {
  const [index, setIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const slides = [
    {
      id: 1,
      backgroundImage: ResponsabilidadeImage,
      backgroundAlt: 'Responsabilidade',
      icon: LeafImage,
      iconAlt: 'Folha',
      title: 'Cuidado com o meio ambiente.',
      description:
        'Na UX Group, excelência vai além da entrega de soluções eficientes. Ela engloba atenção com uma agenda importante que visa amenizar os impactos do processo da venda digital no meio ambiente. Por isso, reconhecemos o nosso papel em apoiar essa transformação, através da conscientização do nosso time com ações de redução de resíduos tanto no dia a dia como na operação e oferecendo inovações para o mercado que reforcem essa prática.',
    },
    {
      id: 2,
      backgroundImage: IntegracaoImage,
      backgroundAlt: 'Integração',
      icon: MaosImage,
      iconAlt: 'Mãos',
      title: 'Ações sociais e de desenvolvimento.',
      description:
        'Os pilares da UX são as pessoas, por isso investimos para fortalecer e desenvolver os profissionais que farão acontecer a venda digital. Além de estimular a formação e inclusão de pessoas, a UX leva tecnologia e logística para regiões e comunidades nem sempre atendidas.',
    },
    {
      id: 3,
      backgroundImage: InovacaoImage,
      backgroundAlt: 'Inovacao',
      icon: QuebraCabecaImage,
      iconAlt: 'Peça de quebra-cabeça',
      title: 'Governança aplicada no dia a dia.',
      description:
        'Pouco se valoriza essa iniciativa que é fundamental para sustentação de um negócio do futuro. Em um segmento tão dinâmico como o varejo digital, a transparência e a gestão financeira são pilares fundamentais para garantir a sustentabilidade e o sucesso a longo prazo. Essas são as práticas da UX internas e para o mercado.',
    },
  ];

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
    <section className={style.container}>
      <div className={style.titleBlock}>
        <h2 className={style.title}>
          A experiência de compra com a prática ESG.
        </h2>
        <p className={style.subtitle}>
          Entenda como o ESG é uma realidade para colaboradores, produtos e
          clientes.
        </p>
      </div>
      <div className={style.carousel}>
        <div
          className={style.slider}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {slides.map((item, idx) => (
            <div className={style.slide} key={item.id}>
              <Image
                src={item.backgroundImage}
                alt={item.backgroundAlt}
                fill={true}
                style={{ zIndex: -1, left: `${idx * 100}%` }}
              />
              <div className={style.titleBlock}>
                <h2 className={style.title}>{item.title}</h2>
                <p className={style.description}>{item.description}</p>
                <a href="https://esg.uxgroup.com.br/" target="_blank">
                  Acessar <span>&gt;</span>
                </a>
              </div>
              <div className={style.control} style={{
                transform: `translateX(${idx * 100}vw)`
              }}>
                <button
                  type="button"
                  className={style.leftButton}
                  onClick={prev}
                >
                  <FaArrowLeft size={15} />
                </button>
                <div className={style.content}>
                  <Image src={item.icon} alt={item.iconAlt} />
                </div>
                <button
                  type="button"
                  className={style.rightButton}
                  onClick={next}
                >
                  <FaArrowRight size={15} />
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
