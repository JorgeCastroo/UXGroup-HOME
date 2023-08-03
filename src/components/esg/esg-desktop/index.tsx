import style from '@/components/esg/esg-desktop/style.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useWindowSize } from '@/hooks/use-window-size';

// import images
import ESGFolha from '@/assets/ESG/Desktop/folha.png';
import ESGLogo from '@/assets/ESG/Desktop/logo-3pilares.gif';
import ESGMaos from '@/assets/ESG/Desktop/mãos.png';
import ESGQuebraCabeca from '@/assets/ESG/Desktop/quebra-cabeça.png';
import Inovacao from '@/assets/ESG/Desktop/Desktop ESG - Inovação.png';
import Integracao from '@/assets/ESG/Desktop/Desktop ESG - Integração.png';
import Responsabilidade from '@/assets/ESG/Desktop/Desktop ESG - Responsabilidade.png';

export const ESGDesktop = () => {
  const [overlapIndex, setOverlapIndex] = useState(0);
  const overlaps = [Inovacao, Integracao, Responsabilidade];
  const size = useWindowSize();
  const isDesktopMedia = size.width === undefined || size.width > 1024;
  const isMediumDesktopMedia =
    size.width !== undefined && isDesktopMedia && size.width < 1440;

  useEffect(() => {
    const interval = setInterval(() => {
      setOverlapIndex((overlapIndex) => (overlapIndex + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.margin}>
        <div className={style.pillars}>
          <div className={style.titleBlock}>
            <h2 className={style.title}>
              A experiência de compra com a prática ESG.
            </h2>
            <p className={style.subtitle}>
              Entenda como o ESG é uma realidade para colaboradores, produtos e
              clientes.
            </p>
          </div>
          <div className={style.content}>
            <div className={style.left}>
              <div className={style.pilar}>
                <div className={style.icon}>
                  <Image
                    src={ESGFolha}
                    width={30}
                    height={30}
                    alt="Ícone de folhas representando pilar da responsabilidade"
                  />
                </div>
                <div
                  className={`${style.description} ${style.colorLightGreen}`}
                >
                  <h3>Cuidado com o meio ambiente.</h3>
                  <p>
                    Na UX Group, excelência vai além da entrega de soluções
                    eficientes. Ela engloba atenção com uma agenda importante
                    que visa amenizar os impactos do processo da venda digital
                    no meio ambiente. Por isso, reconhecemos o nosso papel em
                    apoiar essa transformação, através da conscientização do
                    nosso time com ações de redução de resíduos tanto no dia a
                    dia como na operação e oferecendo inovações para o mercado
                    que reforcem essa prática.
                  </p>
                  <a href="#" className={style.colorLightGreen}>
                    Entrenda &gt;
                  </a>
                </div>
              </div>
            </div>
            <div className={style.image}>
              <Image src={ESGLogo} alt="3 pilares do ESG" />
              <Image
                className={`${style.overlap} ${
                  !isMediumDesktopMedia && overlapIndex === 0
                    ? style.active
                    : ''
                }`}
                src={overlaps[0]}
                alt="Inovação"
                width={300}
                height={300}
              />
              <Image
                className={`${style.overlap} ${
                  !isMediumDesktopMedia && overlapIndex === 1
                    ? style.active
                    : ''
                }`}
                src={overlaps[1]}
                alt="Integração"
                width={300}
                height={300}
              />
              <Image
                className={`${style.overlap} ${
                  !isMediumDesktopMedia && overlapIndex === 2
                    ? style.active
                    : ''
                }`}
                src={overlaps[2]}
                alt="Responsabilidade"
                width={300}
                height={300}
              />
              <a className={style.knowMore} target="_blank" href="https://esg.uxgroup.com.br/">saiba mais</a>
            </div>
            <div className={style.right}>
              <div className={style.first}>
                <div className={style.pilar}>
                  <div className={style.icon}>
                    <Image
                      src={ESGMaos}
                      width={30}
                      height={30}
                      alt="Ícone de aperto de mãos representando o pilar da integração"
                    />
                  </div>
                  <div className={`${style.description} ${style.colorGreen}`}>
                    <h3>Ações sociais e de desenvolvimento.</h3>
                    <p>
                      Os pilares da UX são as pessoas, por isso investimos para
                      fortalecer e desenvolver os profissionais que farão
                      acontecer a venda digital. Além de estimular a formação e
                      inclusão de pessoas, a UX leva tecnologia e logística para
                      regiões e comunidades nem sempre atendidas.
                    </p>
                    <a href="#" className={style.colorGreen}>
                      Entrenda &gt;
                    </a>
                  </div>
                </div>
              </div>
              <div className={style.second}>
                <div className={style.pilar}>
                  <div className={style.icon}>
                    <Image
                      src={ESGQuebraCabeca}
                      width={30}
                      height={30}
                      alt="Ícone de uma peça de quebra cabeça representando o pilar da inovação"
                    />
                  </div>
                  <div
                    className={`${style.description} ${style.colorDarkGreen} ${style.inovation}`}
                  >
                    <h3>Governança aplicada no dia a dia.</h3>
                    <p>
                      Pouco se valoriza essa iniciativa que é fundamental para
                      sustentação de um negócio do futuro. Em um segmento tão
                      dinâmico como o varejo digital, a transparência e a gestão
                      financeira são pilares fundamentais para garantir a
                      sustentabilidade e o sucesso a longo prazo. Essas são as
                      práticas da UX internas e para o mercado.
                    </p>
                    <a href="#" className={style.colorDarkGreen}>
                      Entrenda &gt;
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.shortly}>
              <button>em breve</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
