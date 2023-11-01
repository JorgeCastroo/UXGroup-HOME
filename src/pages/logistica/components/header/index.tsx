'use client';
import { HeaderMobile } from './header-mobile';
import { HeaderDesktop } from './header-desktop';
import { useWindowSize } from '@/hooks/use-window-size';

export function Header() {
  const size = useWindowSize();
  const isDesktopMedia = size.width == undefined || size.width > 1024;

  return isDesktopMedia ? <HeaderDesktop /> : <HeaderMobile />;
}
