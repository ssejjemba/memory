import React from "react";
import styles from "./ButtonSecondary.module.css";

type ButtonSecondaryProps = {
  children: React.ReactNode;
};

export const ButtonSecondary = (props: ButtonSecondaryProps): JSX.Element => {
  return (
    <button
      type="button"
      className={`${styles["btn-secondary"]} heading_tertiary`}
    >
      {props.children}
    </button>
  );
};
