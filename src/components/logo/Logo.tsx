import React from "react";
import styles from "./Logo.module.css";

interface LogoProps {
  class: string;
}

export const Logo = (props: LogoProps): JSX.Element => {
  return (
    <div className={styles["logo-box"]} data-testid="logo">
      <h1 className={` ${styles.logo} ${styles[props.class]} `}>memory</h1>
    </div>
  );
};
