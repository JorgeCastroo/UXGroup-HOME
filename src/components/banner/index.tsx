import style from './style.module.scss';
import {useEffect, useState} from 'react';

export function Banner() {
  const [index, setIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const slides = [
    {
      id: 0,
      title: 'Tecnologia integrada para gestão logística da sua venda digital.',
      description:
        'Ofereça a mais completa solução de tecnologia do cálculo de frete até o Live tracking.',
      link: 'Saiba mais',
      href: 'https://uxsolutions.com.br/',
      blocked: false,
      target: '_self',
      image: {
        desktop: 'https://uxsolutions.com.br/wp-content/uploads/2023/07/Shipn-1440x440-1.png',
        mobile: 'https://uxsolutions.com.br/wp-content/uploads/2023/07/Shipn-1440x440-1.png',
      },
    },
    {
    id: 1,
    title: 'Inovações que transformam a venda digital.',
    description:
      'O seu parceiro Full Commerce com tecnologias e operações próprias.',
    link: 'Saiba o que é full commerce',
    href: '#flows',
    blocked: false,
    target: '_self',
    image: {
      desktop: '/Site%20UX%20Group/banners/desktop/slide-1.gif',
      mobile: '/Site%20UX%20Group/banners/mobile/slide-1.gif',
    },
  },
    {
      id: 2,
      title:
        'Entenda cada etapa e solução necessária para uma experiência completa do seu cliente.',
      description:
        'A UX possui soluções integradas de ponta a ponta para que o gestor de um e-commerce converse com um só parceiro.',
      link: 'Conheça as soluções',
      target: '_self',
      href: '#verticals',
      blocked: false,
      image: {
        desktop: '/Site%20UX%20Group/banners/desktop/slide-2.gif',
        mobile: '/Site%20UX%20Group/banners/mobile/slide-2.gif',
      },
    },
    {
      id: 3,
      title:
        'Saiba como a UX pode aplicar práticas ESG em suas vendas e aproximar sua loja do público do presente e do futuro.',
      description:
        'A tecnologia apoiando a operação para melhores práticas socioambientais e de gestão.',
      link: 'Saiba mais',
      target: '_blank',
      href: 'https://esg.uxgroup.com.br/',
      blocked: false,
      image: {
        desktop: '/Site%20UX%20Group/banners/desktop/slide-4.gif',
        mobile: '/Site%20UX%20Group/banners/mobile/slide-4.gif',
      },
    },
  ];
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === 3) setIndex(0)
      else setIndex(index + 1)
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
                  className={style.knowMore + ' ' + (item.blocked ? style.blocked : '')}
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
