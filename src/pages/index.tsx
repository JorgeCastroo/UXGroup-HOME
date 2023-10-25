import Head from 'next/head';
import { Header } from '@/components/header';
import { Banner } from '@/components/banner';
import { Clients } from '@/components/clients';
import { Flows } from '@/components/flows';
import { ContactLink } from '@/components/contact-link';
import { UXMedia } from '@/components/ux-media';
import { Blog } from '@/components/blog';
import { ContactForm } from '@/components/contactForm';
import { ContactModal } from '@/components/contactModal';
import { Verticals } from '@/components/verticals';
import { ESG } from '@/components/esg';
import Script from 'next/script';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>UX GROUP - HOME</title>
        <meta name="description" content="TECNOLOGIA E GESTÃO LOGÍSTICA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*<!-- Google Tag Manager -->*/}
        <Script id='googleManager'>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5M78MWM');`}
        </Script>
      {/*<!-- End Google Tag Manager -->*/}

      {/*<!-- Google Tag Manager (noscript) -->*/}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5M78MWM"
          height="0"
          width="0"
          style={{ display:'none', visibility:'hidden'}}>
        </iframe>
      </noscript>
      {/*<!-- End Google Tag Manager (noscript) -->*/}



      {/*<!-- Google tag (gtag.js) inserido dia 11/09 -->*/}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-400476575"
      ></Script>
      <Script id="startgtagjs">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-400476575');`}
      </Script>
      {/*<!-- Google Tag Manager fim tag 11/09 -->*/}

      {/*<!-- Google tag (gtag.js) -->*/}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-J6JJ7N5EGV"
      ></Script>
      <Script id="startgtagjs">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-J6JJ7N5EGV');`}
      </Script>
      {/*<!-- Google Tag Manager -->*/}
      <Script id="startGoogleTagManager">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K6QH58J');`}
      </Script>
      {/*<!-- End Google Tag Manager -->*/}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-K6QH58J"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/*<!-- End Google Tag Manager (noscript) -->*/}
      <Script
        type="text/javascript"
        async
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/139aadf5-b7d4-4ce5-b117-ddb828aef384-loader.js"
      ></Script>
      <Header />
      <main>
        <h1 className="sr-only">UX Group página inicial</h1>
        <Banner />
        <Flows />
        {/*<Section3 />*/}
        {/*<Section4 />*/}
        <Verticals />
        <ESG />
        <ContactLink />
        <Clients />
        <UXMedia />
        <ContactModal />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
