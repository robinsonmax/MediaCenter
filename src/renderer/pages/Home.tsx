import styles from './Home.module.scss';

let hostname = ""

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('get-hostname', (arg) => {
  // eslint-disable-next-line no-console
  hostname = arg
});
window.electron.ipcRenderer.sendMessage('get-hostname', ['ping']);


const Home = () => {

  const d = new Date();
  const time = `${d.getHours()}:${d.getMinutes()}`

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.time}>{time}</h1>
        <h1 className={styles.deviceName}>{hostname}</h1>
      </div>
      <div className={styles.optionsContainer}>
        <button>
          <label>Netflix</label>
          <p>Description of option 1</p>
        </button>
        <button>
          <label>Steam</label>
          <p>Description of option 2</p>
        </button>
        <button>
          <label>Spotify</label>
          <p>Description of option 3</p>
        </button>
        <button>
          <label>Option 4</label>
          <p>Description of option 4</p>
        </button>
        <button>
          <label>Option 5</label>
          <p>Description of option 5</p>
        </button>
      </div>
    </div>
  );
};

export default Home;