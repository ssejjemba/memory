import React from "react";
import styles from "./Logo.module.css";

export const Logo = (): JSX.Element => {
  return (
    <div className={styles["logo-box"]}>
      <h1 className={styles.logo}>memory</h1>
    </div>
  );
};
