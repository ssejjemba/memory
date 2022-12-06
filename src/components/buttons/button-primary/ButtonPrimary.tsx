import React from "react";
import styles from "./ButtonPrimary.module.css";

type ButtonPrimaryProps = {
  children: React.ReactNode;
};

export const ButtonPrimary = (props: ButtonPrimaryProps): JSX.Element => {
  return (
    <button
      type="button"
      data-testid="primary-btn"
      className={`${styles["btn-primary"]} heading_tertiary`}
    >
      {props.children}
    </button>
  );
};
