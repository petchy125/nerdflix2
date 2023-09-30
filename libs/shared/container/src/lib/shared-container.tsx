import styles from './shared-container.module.css';

/* eslint-disable-next-line */
export interface SharedContainerProps {}

export function SharedContainer(props: SharedContainerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedContainer!</h1>
    </div>
  );
}

export default SharedContainer;
