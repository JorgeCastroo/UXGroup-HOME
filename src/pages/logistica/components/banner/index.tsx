'use client';

import style from './style.module.scss';
import { useEffect, useState } from 'react';

import gestaoDesktop from '../../../../assets/Banner/gestao/desktop/gestaoLogistica.png';
import gestaoMobile from '../../../../assets/banner/gestao/mobile/gestaoMobile.png';
import eficienciaDesktop from '../../../../assets/banner/eficiencia/desktop/eficienciaDesk.png';
import eficienciaMobile from '../../../../assets/banner/eficiencia/mobile/eficienciaMobile.png';
import sustentavelDesktop from '../../../../assets/banner/sustentavel/desktop/sustentavelDesk.png';
import sustentavelMobile from '../../../../assets/banner/sustentavel/mobile/sustentavelMobile.png';
import agilidadeDesktop from '../../../../assets/banner/agilidade/desktop/agilidadeDesk.png';
import agilidadeMobile from '../../../../assets/banner/agilidade/mobile/agilidadeMobile.png';

export function Banner() {
  const [index, setIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const slides = [
    {
      id: 0,
      title: 'Gestão Logística com Tecnologia embarcada.',
      description:
        'Visibilidade completa que possibilita tomadas de decisões rápidas.',
      link: 'Saiba mais',
      href: 'https://uxgroup.com.br/tecnologia/',
      blocked: false,
      target: '_self',
      image: {
        desktop: gestaoDesktop.src,
        mobile: gestaoMobile.src,
      },
    },
    {
      id: 1,
      title: 'Melhore a eficiência logística do seu e-commerce.',
      description:
        'Garanta os melhores prazos e preços de frete com a logística 100% integrada.',
      link: 'Saiba mais',
      href: '#verticals',
      blocked: false,
      target: '_self',
      image: {
        desktop: eficienciaDesktop.src,
        mobile: eficienciaMobile.src,
      },
    },
    {
      id: 2,
      title: 'Delivery Sustentável: Um novo modelo de fazer entregas.',
      description:
        'Suas entregas com motos elétricas fazem sua marca ir mais longe.',
      link: 'Saiba mais',
      target: '_blank',
      href: 'https://esg.uxgroup.com.br/',
      blocked: false,
      image: {
        desktop: sustentavelDesktop.src,
        mobile: sustentavelMobile.src,
      },
    },
    {
      id: 3,
      title:
        'Mais agilidade logística com um time de fulfillment especializado.',
      description:
        'O seu produto armazenado, conferido e despachado de maneira rápida e eficiente.',
      link: 'Saiba mais',
      target: '_blank',
      href: 'https://ondetah.com.br/',
      blocked: false,
      image: {
        desktop: agilidadeDesktop.src,
        mobile: agilidadeMobile.src,
      },
    },
  ];
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 3) setIndex(0);
      else setIndex(index + 1);
    }, 5000);
    return () => clearInterval(interval);
  });

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
    <section
      className={style.container}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className={style.carousel} aria-label="carousel">
        <p className={style.screenReaderOnly}></p>
        <div
          className={style.pictureSlider}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((item) => (
            <picture key={item.id}>
              <source media="(min-width:763px)" srcSet={item.image.desktop} />
              <img src={item.image.mobile} alt="Qualquer Texto" />
            </picture>
          ))}
        </div>
        <div
          className={style.slider}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((item) => (
            <div
              key={item.id}
              className={`${style.slide} ${
                item.id === index ? style.active : ''
              }`}
              aria-hidden={item.id !== index}
            >
              <div className={style.content}>
                <h2 className={style.title}>{item.title}</h2>
                <p className={style.description}>{item.description}</p>
                <a
                  target={item.target}
                  href={item.href}
                  className={
                    style.knowMore + ' ' + (item.blocked ? style.blocked : '')
                  }
                  aria-disabled={item.blocked}
                  tabIndex={item.id === index ? 0 : -1}
                  onFocus={() => setIndex(item.id)}
                >
                  {item.link}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={style.indicators}>
          <ul role="tablist">
            {slides.map((item) => (
              <li key={item.id} role="tab">
                <button
                  onClick={() => setIndex(item.id)}
                  className={item.id === index ? style.active : ''}
                  aria-current={item.id === index}
                >
                  <span className={style.screenReaderOnly}>
                    Vai para o slide {item.id}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
