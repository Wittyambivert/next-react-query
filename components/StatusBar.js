import styles from "@/styles/Statusbar.module.css";

const StatusBar = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={[styles.time, styles.box].join(" ")}>14:23</div>
        <div className={styles.digitalIsland}></div>
        <div className={styles.batteryIcon}></div>
      </div>
    </>
  );
};

export default StatusBar;
