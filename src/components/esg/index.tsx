import { useWindowSize } from '@/hooks/use-window-size';
import { ESGMobile } from '@/components/esg/esg-mobile';

// image imports

import { ESGDesktop } from '@/components/esg/esg-desktop';

export function ESG() {
  const size = useWindowSize();
  const isDesktopMedia = size.width === undefined || size.width > 1024;

  return (
    <section id="esg">
      {isDesktopMedia ? <ESGDesktop /> : <ESGMobile />}
    </section>
  );
}
