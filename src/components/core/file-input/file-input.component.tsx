import {
  type FC,
  type ChangeEventHandler,
  useId,
} from 'react';

import styles from './file-input.styles.module.css';

type CoreFileInputProps = {
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const CoreFileInput: FC<CoreFileInputProps> = (props) => {
  const {
    text,
    onChange,
  } = props;

  const id = useId();
  return (
    <label htmlFor={id} className={styles.fileInput}>
      <input
        type="file"
        id={id}
        className={styles.input}
        onChange={onChange}
      />
      {text}
    </label>
  )
};
