import React, { FC, ReactNode } from 'react';

import { Footer } from '../../Shared/Footer';
import { Headers } from '../../Shared/Headers';
import { NewsLetter } from '../../Shared/NewsLetter';
import { Hero } from '../../Shared/Hero';

interface Props {
  children: ReactNode;
  hideNewsLetter?: boolean;
  hideHeroSection?: boolean;
  hideHeroButton?: boolean;
  heroContent?: string;
}

const MainLayout: FC<Props> = ({
  children,
  hideNewsLetter,
  hideHeroSection,
  hideHeroButton,
  heroContent,
}) => {
  return (
    <>
      <Headers />
      {!hideHeroSection && (<Hero hideButton={hideHeroButton || false} heading={heroContent}/>)}
      {children}
      {!hideNewsLetter && <NewsLetter />}
      <Footer />
    </>
  );
};

export default MainLayout;
