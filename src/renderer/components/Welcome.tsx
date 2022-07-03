import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.fadeInContainer}>
        <h1 className={styles.title}>Welcome, Max</h1>
      </div>
    </div>
  )
}

export default Welcome;