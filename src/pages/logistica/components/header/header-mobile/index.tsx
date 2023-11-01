import style from './header-mobile.module.scss';
import Image from 'next/image';
import logo from '../../../../../assets/ux-branco.svg';
import burgerIcon from '../../../../../assets/burger-icon.svg';
import { useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

enum SubSelect {
  NULL = 0,
  ECOMMERCE = 1,
  ESG = 2,
  CONTACT = 3,
  BLOG = 4,
}

export function HeaderMobile() {
  const [navState, setNavState] = useState<'open' | 'close'>('close');
  const [subSelected, setSubSelected] = useState<SubSelect>(SubSelect.NULL);
  const scrollRef = useRef<HTMLDivElement>(null);

  const selectTexts = {
    [SubSelect.NULL]: { title: '', description: '' },
    [SubSelect.ESG]: { title: '', description: '' },
    [SubSelect.BLOG]: { title: '', description: '' },
    [SubSelect.CONTACT]: { title: '', description: '' },
    [SubSelect.ECOMMERCE]: {
      title: 'PARA E-COMMERCE & MARKETPLACE',
      description:
        'Soluções que atendem desde o desenvolvimento do site, gestão de estoque, gestão de fretes, gestão de transportes até a entrega para o cliente, garantindo a melhor experiência em todas as etapas.',
    },
  };

  const toggleNavBar = () => {
    setSubSelected(SubSelect.NULL);
    setNavState(navState === 'open' ? 'close' : 'open');
  };

  const toggleSub = (select: SubSelect) => {
    return () => {
      if (subSelected === select) {
        setSubSelected(SubSelect.NULL);
        return;
      }
      setSubSelected(select);
    };
  };

  const scrollToRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(scrollRef.current.scrollLeft + 100, 0);
    }
  };

  return (
    <header className={style.container}>
      <nav className={style.navBar}>
        <section>
          <div className={style.navControl}>
            <Link href="/" className={style.navBrand}>
              <Image
                src={logo}
                width={73}
                height={40}
                alt="UX Group Logo"
              ></Image>
            </Link>
            <button className={style.toggle} onClick={toggleNavBar}>
              <Image src={burgerIcon} alt="Menu Burger" />
            </button>
          </div>
        </section>

        <section>
          <div className={`${style.collapse} ${style[navState]}`}>
            <ul>
              <li>
                <button
                  type="button"
                  aria-expanded={subSelected === SubSelect.ECOMMERCE}
                  onClick={toggleSub(SubSelect.ECOMMERCE)}
                >
                  E-COMMERCE
                </button>
              </li>
              <li>
                <Link href="/#esg">PROGRAMA ESG</Link>
              </li>
              <li>
                <Link href="/#contact">CONTATO</Link>
              </li>
              <li>
                <a
                  href="https://blog.uxgroup.com.br"
                  target="_blank"
                  onClick={toggleSub(SubSelect.NULL)}
                >
                  BLOG
                </a>
              </li>
            </ul>
            <section className={style.more}>
              <div
                className={`${style.subcollapse} ${
                  style[
                    [SubSelect.ECOMMERCE, SubSelect.ECOMMERCE].includes(
                      subSelected,
                    )
                      ? 'open'
                      : 'close'
                  ]
                }`}
              >
                <div className={style.verticals} ref={scrollRef}>
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
                </div>
                <button className={style.buttonRight} onClick={scrollToRight}>
                  <FaArrowRight size={9} />
                </button>
              </div>
            </section>
          </div>
        </section>
        <section
          className={`${style.ecommerceContainer} ${
            [SubSelect.ECOMMERCE, SubSelect.ESG].includes(subSelected)
              ? style[navState]
              : style['close']
          }`}
        >
          <div className={style.ecommerce}>
            <h2>{selectTexts[subSelected].title}</h2>
            <p>{selectTexts[subSelected].description}</p>
          </div>
        </section>
        <section className={`${style.ondeTah} ${style[navState]}`}>
          <span className={style.label}>Localizar meu pedido:</span>
          <a
            href="https://ondetah.com.br/"
            target="_blank"
            className={style.ondeTahButton}
          >
            ondetah minha entrega
          </a>
        </section>
      </nav>
    </header>
  );
}
