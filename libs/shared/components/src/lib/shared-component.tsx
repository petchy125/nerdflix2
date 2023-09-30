import styles from './shared-component.module.css';

/* eslint-disable-next-line */
export interface SharedComponentProps {}

export function SharedComponent(props: SharedComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedComponent!</h1>
    </div>
  );
}

export default SharedComponent;
