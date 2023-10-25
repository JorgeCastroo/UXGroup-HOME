import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import style from './style.module.scss';
import { useState } from 'react';

// image imports
import ClientsImage from '@/assets/Clientes/banner-clientes.gif';
import ClientDafiti from '@/assets/Clientes/logo-dafiti-152.png';
import ClientCarrefour from '@/assets/Clientes/carrefour.png';
import ClientKabum from '@/assets/Clientes/kabum.png';
import ClientLemonBasic from '@/assets/Clientes/lemon.png';
import ClientMultimoveis from '@/assets/Clientes/mm.png';
import ClientPetlove from '@/assets/Clientes/petlove.png';
import ClientShopee from '@/assets/Clientes/shopee.png';
import ClientVeste from '@/assets/Clientes/vest.png';
import ClientWhirpol from '@/assets/Clientes/logo-whirpool-152.png';
import ClientVia from '@/assets/Clientes/via-varejo.png';
import LogoVesteClientes from '@/assets/Clientes/logo-veste-clientes.png';
import LogoPetClientes from '@/assets/Clientes/logo-pet-cliente.png';

const IMAGES = [
  { img: ClientVia, alt: 'Cliente Via Varejo' },
  { img: ClientCarrefour, alt: 'Cliente Carrefour' },
  { img: ClientPetlove, alt: 'Cliente Petlove' },
  { img: ClientShopee, alt: 'Cliente Shopee' },
  { img: ClientKabum, alt: 'Cliente Kabum' },
  { img: ClientMultimoveis, alt: 'Cliente Multimoveis' },
  { img: ClientWhirpol, alt: 'Cliente Whirpol' },
  { img: ClientVeste, alt: 'Cliente Veste' },
  { img: ClientLemonBasic, alt: 'Cliente Lemon Basic' },
  { img: ClientDafiti, alt: 'Cliente Dafiti' },
];

const VIDEOS = [
  "https://www.youtube.com/embed/ol6t0mJNRU8",
  "https://www.youtube.com/embed/Qie6x7vB2k8",
  "https://www.youtube.com/embed/_XEjiXn8vQ0",
];

export function Clients() {
  const [index, setIndex] = useState(1);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);
  const length = 1;

  const [videoIndex, setVideoIndex] = useState(0);

  const nextVideo = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % VIDEOS.length);
  };

  const prevVideo = () => {
    setVideoIndex((prevIndex) => (prevIndex - 1 + VIDEOS.length) % VIDEOS.length);
  };

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
      <div className={style.division}>
        <div className={style.left}>
          <Image
            src={ClientsImage}
            alt="Fundo cinza e na frente há homem de pele negra e camisa branca utilizando um celular branco"
          />
        </div>
        <div className={style.margin}>
          <div className={style.right}>
            <div className={style.titleBlock}>
              <h2 className={style.title}>
                Relatos de quem vive a experiência UX:
              </h2>
              <p className={style.subtitle}>
                UX (User Experience), em português, experiência do usuário,
                consiste na experiência gerada com as interações de um usuário
                com determinada solução ou produto de uma marca.
              </p>
            </div>
            <div className={style.carousel}>
              <div
                className={style.slider}
                style={{ transform: `translateX(-${index * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                <div className={style.slide}>
                </div>
                <div className={style.slide}>
                  <div className={style.control}>
                    <button className={style.left} onClick={prev}>
                      <FaArrowLeft size={14} />
                    </button>
                    <Image
                      src={LogoVesteClientes}
                      width={180}
                      height={178}
                      alt="Logo Veste"
                    />
                    <button className={style.right} onClick={next}>
                      <FaArrowRight size={14} />
                    </button>
                  </div>
                  <div className={style.content}>
                    <p className={style.quote}>
                      “Super parceria com a UX, muito bacana, que pra gente é
                      muito importante pra Restoque, e a UX tem nos atendido de
                      forma excelente. A equipe é voltada totalmente para o que
                      a gente precisa na velocidade, no tempo e na qualidade do
                      serviço que prestam.  O time está de parabéns! Uma excelente
                      parceria que estamos tendo.”
                    </p>
                    <p className={style.author}>Marcelo Rafael</p>
                    <p className={style.company}>Veste</p>
                  </div>
                </div>

                <div className={style.slide}>
                  <div className={style.control}>
                    <button className={style.left} onClick={prev}>
                      <FaArrowLeft size={14} />
                    </button>
                    <Image
                      src={LogoPetClientes}
                      width={180}
                      height={178}
                      alt="Logo Pet Lovers"
                    />
                    <button className={style.right} onClick={next}>
                      <FaArrowRight size={14} />
                    </button>
                  </div>
                  <div className={style.content}>
                    <p className={style.quote}>
                      “Sinto-me honrado de fazer parte desta jornada que está
                      apenas começando! Sendo parceiros de um time de
                      profissionais super competentes como o time UX
                      Fulfillment, tenho certeza que a petlove está em boas mãos
                      e que seus clientes terão o mais alto nível de serviço,
                      qualidade e agilidade para que juntos possamos tornar seus
                      pets muito mais felizes e saudáveis.”
                    </p>
                    <p className={style.author}>Alvaro</p>
                    <p className={style.company}>Petlove</p>
                  </div>
                </div>
              </div>
              <div className={style.indicators}>
                <ul>
                  <li>
                    <button
                      className={index === 1 ? style.active : ''}
                      onClick={() => setIndex(1)}
                    ></button>
                  </li>
                  <li>
                    <button
                      className={index === 2? style.active : ''}
                      onClick={() => setIndex(2 )}
                    ></button>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.boxVideos}>
              <h2 className={style.titleVideos}>Um pouco mais dos nossos parceiros:</h2>
              <div className={style.videos}>
                <iframe className={style.iframe} width="400" height="220" src="https://www.youtube.com/embed/ol6t0mJNRU8" title="Depoimento Lemon Basics" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <iframe className={style.iframe}  width="400" height="220" src="https://www.youtube.com/embed/Qie6x7vB2k8" title="Depoimento Carrefour" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                <iframe className={style.iframe}  width="400" height="220" src="https://www.youtube.com/embed/_XEjiXn8vQ0" title="Depoimento Kabum" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
            </div>
            <div className={style.titleBlock}>
              <h2 className={style.title}>Alguns dos nossos cases:</h2>
              <p className={style.subtitle}>
              UX, pra nós, também significa Unique Experience, ou seja, uma experiência única com as soluções integradas que geram valor ao negócio.
              </p>
            </div>

            <div className={style.cards}>
              {new Array(10).fill(0).map((_, index) => (
                <div className={style.card} key={index}>
                  <Image
                    src={IMAGES[index].img}
                    alt={IMAGES[index].alt}
                    width={152}
                    height={152}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
