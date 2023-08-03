import style from './style.module.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import Image from "next/image";



import UXCommerce from '@/assets/Verticais-Desktop/Desktop sessão vertical - UX COMMERCE CLARO.png';
import UXConnect from '@/assets/Verticais-Desktop/Desktop sessão vertical - UX CONNECT CLARO.png';
import UXDelivery from '@/assets/Verticais-Desktop/Desktop sessão vertical - UX DELIVERY CLARO.png';
import UXFulfillment from '@/assets/Verticais-Desktop/Desktop sessão vertical - UX FULFILLMENT CLARO.png';
import UXSolutions from '@/assets/Verticais-Desktop/Desktop sessão vertical - UX SOLUTIONS CLARO.png';
import UXPay from '@/assets/Verticais-Desktop/Desktop  sessão vertical - UX PAY CLARO.png';

const IMAGES = [
  {img: UXCommerce, title: 'UX COMMERCE', description: 'Inteligência para gestão de vendas.', backgroundColor: 'var(--color-primary-orange)'},
  {img: UXConnect, title: 'UX CONNECT', description: 'Inteligência para gestão de vendas.', backgroundColor: 'var(--color-primary-yellow)'},
  {img: UXDelivery, title: 'UX DELIVERY', description: 'Inteligência para gestão de vendas.', backgroundColor: 'var(--color-primary-green)'},
  {img: UXFulfillment, title: 'UX FULFILLMENT', description: 'Inteligência para gestão de vendas.', backgroundColor: 'var(--color-primary-blue)'},
  {img: UXSolutions, title: 'UX SOLUTIONS', description: 'Inteligência para gestão de vendas.', backgroundColor: 'var(--color-primary-purple)'},
  {img: UXPay, title: 'UX PAY', description: 'Inteligência para gestão de vendas.', backgroundColor: 'var(--color-primary-red)'},
]

export function Section3() {
  const [index, setIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const slides = [0, 1, 2, 3, 4, 5];
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
        <h2 className={style.title}>Lorem ipsum dolor sit amet.</h2>
        <p className={style.subtitle}>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={style.cards}>
        <button className={style.left} onClick={prev}>
          <FaArrowLeft size={11} />
        </button>
        <div
          className={style.slider}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {slides.map((slide, i) => (
            <div
              className={style.card}
              key={i}
              style={{ backgroundColor: IMAGES[i].backgroundColor }}
            >
              <div className={style.image}>
                <Image src={IMAGES[i].img} alt={IMAGES[i].title} fill={true} />
              </div>
              <div className={style.content}>
                <h3 className={style.title} style={{color: IMAGES[i].backgroundColor}}>{IMAGES[i].title}</h3>
                <p className={style.description}>
                  {IMAGES[i].description}
                </p>
              </div>
              <button>saiba mais</button>
            </div>
          ))}
        </div>
        <button className={style.right} onClick={next}>
          <FaArrowRight size={11} />
        </button>
      </div>


    </section>
  );
}
