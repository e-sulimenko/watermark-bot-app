import { useEffect, type FC } from 'react';

import { Main } from '../main';
import { useTelegram } from '../../libs/telegram-web-app';

import styles from './host.styles.module.css'

export const HostPage: FC = () => {
  const { expand, isExpanded } = useTelegram();

  useEffect(() => {
    if (!isExpanded) expand();
  }, []);

  return (
    <div className={styles.host}>
      <Main />
    </div>
  )
};
