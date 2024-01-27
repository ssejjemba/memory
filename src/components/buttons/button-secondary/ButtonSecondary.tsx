import React from "react";
import styles from "./ButtonSecondary.module.css";

type ButtonSecondaryProps = {
  children: React.ReactNode;
  class: string;
};

export const ButtonSecondary = (props: ButtonSecondaryProps): JSX.Element => {
  return (
    <button
      type="button"
      data-testid="secondary-btn"
      className={`${styles["btn-secondary"]} heading_tertiary ${
        styles[props.class]
      }`}
    >
      {props.children}
    </button>
  );
};
