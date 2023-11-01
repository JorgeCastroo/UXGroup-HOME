import Image from 'next/image';
import style from './style.module.scss';
import logo from '../../../../assets/ux-branco.svg';
import logoLinkedin from '../../../../assets/Footer/logo-linkedin.svg';
import logoInstagram from '../../../../assets/Footer/logo-instagram.svg';
import logoFacebook from '../../../../assets/Footer/logo-facebook.svg';
import logoYoutube from '../../../../assets/Footer/logo-youtube.svg';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className={style.container}>
      <div className={style.margin}>
        <div className={style.footerLinks}>
          <div className={style.logo}>
            <a href="#">
              <Image src={logo} width={100} height={53} alt="UX Group Logo" />
            </a>
          </div>

          <div className={style.socialMedia}>
            <a href="https://www.instagram.com/uxgroup_/">
              <Image
                src={logoLinkedin}
                width={30}
                height={30}
                alt="Logo Linkedin"
              />
            </a>
            <a href="https://www.linkedin.com/company/uxgroup/">
              <Image
                src={logoInstagram}
                width={30}
                height={30}
                alt="Logo Instagram"
              />
            </a>
            <a href="https://www.facebook.com/UX-GROUP-103113961067558/">
              <Image
                src={logoFacebook}
                width={30}
                height={30}
                alt="Logo Facebook"
              />
            </a>
            <a href="https://www.youtube.com/channel/UCzgk7wIIwM3IUQeBQxz7big">
              <Image
                src={logoYoutube}
                width={30}
                height={30}
                alt="Logo youtube"
              />
            </a>
          </div>

          <div className={style.policy}>
            <Link href="/privacy">
              <p>Política de privacidade</p>
            </Link>
            <span>
              <p> &copy; Copyright 2023 UX Group</p>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
