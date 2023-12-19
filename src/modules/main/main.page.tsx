import {
  useState,
  type FC,
  type ChangeEvent,
  useMemo,
} from 'react';

import { CoreFileInput } from '../../components/core/file-input';
import { AVAILABLE_FROM_VERSION, useTelegram } from '../../libs/telegram-web-app';

import { MESSAGES, MIME_TYPES, STEPS } from './main.constants';
import styles from './main.styles.module.css';
import { NoImageSvg } from './components/no-image-svg';


export const Main: FC = () => {
  const [bgFile, setBgFile] = useState<File | null>(null);
  const [step, setStep] = useState<keyof typeof STEPS>('ADD_BG');

  const { showAlert, isVersionAtLeast } = useTelegram();

  const showMimeTypeMessage = () => {
    if (isVersionAtLeast(AVAILABLE_FROM_VERSION.showAlert)) {
      showAlert(MESSAGES.SELECT_IMAGE);
    } else {
      alert(MESSAGES.SELECT_IMAGE);
    }
  };

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file != null) {
      if (MIME_TYPES.includes(file.type)) {
        setBgFile(file);
        setStep(STEPS.ADD_WM);
      } else {
        showMimeTypeMessage();
      }
    } else {
      setBgFile(null);
    }
  }

  const bgImgSrc = useMemo(() => {
    if (bgFile != null) return URL.createObjectURL(bgFile);
  }, [bgFile]);

  return (
    <div className={styles.main}>
      <div className={styles.images}>
        {bgFile == null ? <NoImageSvg /> : <img src={bgImgSrc} className={styles.bgImage} />}
      </div>
      <div>
        { step === STEPS.ADD_BG && (
          <CoreFileInput
            text="Добавьте фоновое изображение"
            onChange={handleChangeFile}
          />
        )}
      </div>
    </div>
  )
};
