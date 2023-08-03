import style from './style.module.scss';
export function ContactLink() {
  return (
    <section className={style.container}>
      <div className={style.titleBlock}>
        <h2 className={style.title}>Entre em contato com um especialista.</h2>
        <p className={style.subtitle}>Preencha as informações abaixo que um dos nossos especialistas em vendas digitais entrará em contato.</p>
        <a href="#contact" className={style.link}>entrar em contato</a>
      </div>
    </section>
  );
}
