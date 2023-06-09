import { NextIntlProvider } from 'next-intl';
import { ReactNode } from 'react';
import Cookies from 'js-cookie';

import messages from '../messages/en.json';

interface Props {
  children: ReactNode;
}

export const RootMock = ({ children }: Props) => {
  Cookies.set('NEXT_LOCALE', 'en');

  return (
    <NextIntlProvider messages={messages} locale="en">
      {children}
    </NextIntlProvider>
  );
};
