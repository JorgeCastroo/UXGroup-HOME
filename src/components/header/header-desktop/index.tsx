import style from './header-desktop.module.scss';
import Image from 'next/image';
import logo from '@/assets/ux-branco.svg';
import { useState } from 'react';
import Link from "next/link";

enum SelectStates {
  NULL = 0,
  ECOMMERCE = 1,
  ESG = 2,
  CONTACT = 3,
  BLOG = 4,
}

export function HeaderDesktop() {
  const [selected, setSelected] = useState<SelectStates>(SelectStates.NULL);
  const selectTexts = {
    [SelectStates.ECOMMERCE]: {
      title: 'PARA E-COMMERCE & MARKETPLACE',
      description:
        'Soluções que atendem desde o desenvolvimento do site, gestão de estoque, gestão de fretes, gestão de transportes até a entrega para o cliente, garantindo a melhor experiência em todas as etapas.',
    },
    [SelectStates.NULL]: { title: '', description: '' },
    [SelectStates.ESG]: { title: '', description: '' },
    [SelectStates.CONTACT]: { title: '', description: '' },
    [SelectStates.BLOG]: { title: '', description: '' },
  };

  const toggleSub = (select: SelectStates) => {
    return () => {
      if (selected === select) {
        setSelected(SelectStates.NULL);
        return;
      }
      setSelected(select);
    };
  };

  return (
    <header className={style.container}>
      <nav>
        <div className={style.navBar}>
          <div className={style.navControl}>
            <Link href="/" className={style.navBrand}>
              <Image
                src={logo}
                width={73}
                height={40}
                alt="UX Group Logo"
              ></Image>
            </Link>
          </div>
          <div className={style.navLinks}>
            <ul>
              <li>
                <button
                  type="button"
                  aria-expanded={selected === SelectStates.ECOMMERCE}
                  onClick={toggleSub(SelectStates.ECOMMERCE)}
                >
                  E-COMMERCE
                </button>
              </li>
              <li>
                <Link href="/#esg">
                  PROGRAMA ESG
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  CONTATO
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.uxgroup.com.br"
                  target="_blank"
                  onClick={toggleSub(SelectStates.NULL)}
                >
                  BLOG
                </a>
              </li>
            </ul>
          </div>
          <a
            href="https://ondetah.com.br/"
            target="_blank"
            className={style.ondeTahButton}
          >
            ondetah minha entrega
          </a>
        </div>
        <div
          className={`${style.collapse} ${
            style[
              [SelectStates.ECOMMERCE, SelectStates.ECOMMERCE].includes(selected)
                ? 'open'
                : 'close'
            ]
          }`}
        >
          <div className={style.collapseItem}>
            <div className={style.ecommerceContainer}>
              <div className={style.ecommerce}>
                <h2>{selectTexts[selected].title}</h2>
                <p>{selectTexts[selected].description}</p>
              </div>
            </div>
            <div className={style.verticals}>
              <div className={style.vertical}>
                <h2>
                  UX <span className={style.colorYellow}>FULFILLMENT</span>
                </h2>
                <p>EXCELÊNCIA NA GESTÃO DE OPERAÇÕES.</p>
                <a href="https://uxff.com.br/" target="_blank">
                  Acessar <span>&gt;</span>
                </a>
              </div>
              <div className={style.vertical} data-glayson="oi">
                <h2>
                  UX <span className={style.colorBlue}>SOLUTIONS</span>
                </h2>
                <p>TECNOLOGIA PARA GESTÃO LOGÍSTICA.</p>
                <a href="https://uxsolutions.com.br/" target="_blank">
                  Acessar <span>&gt;</span>
                </a>
              </div>
              <div className={style.vertical}>
                <h2>
                  UX <span className={style.colorPurple}>CONNECT</span>
                </h2>
                <p>EXPERIÊNCIA INTEGRADA NA GESTÃO DO CLIENTE.</p>
                <a href="https://uxconnect.com.br" target="_blank">
                  Acessar <span>&gt;</span>
                </a>
              </div>
              <div className={style.vertical}>
                <h2>
                  UX <span className={style.colorRed}>DELIVERY</span>
                </h2>
                <p>INOVAÇÃO NA GESTÃO DE TRANSPORTES.</p>
                <a href="https://uxdelivery.com.br/" target="_blank">
                  Acessar <span>&gt;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
