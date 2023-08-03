import { useWindowSize } from '@/hooks/use-window-size';
import { HeaderMobile } from './header-mobile';
import { HeaderDesktop} from './header-desktop';

export function Header() {
  const size = useWindowSize();
  const isDesktopMedia = size.width == undefined || size.width > 1024;

  return isDesktopMedia ? <HeaderDesktop /> : <HeaderMobile />;
}
