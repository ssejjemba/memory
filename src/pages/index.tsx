import Head from "next/head";
import { ButtonPrimary } from "../components/buttons/button-primary/ButtonPrimary";
import { ButtonSecondary } from "../components/buttons/button-secondary/ButtonSecondary";
import { Logo } from "../components/logo/Logo";

import classes from "../styles/start.module.css";

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="assets/images/favicon-32x32.png"
          type="image/x-icon"
        />
        <title>Memory Game</title>
      </Head>

      <div className={classes["start-screen"]}>
        <Logo class="start-logo" />

        <div className={classes["game-settings"]}>
          <div className={classes["theme"]}>
            <h2 className={classes["settings-heading"]}>Theme</h2>
            <div className={classes["buttons-case"]}>
              <ButtonSecondary class="text-btn">Numbers</ButtonSecondary>
              <ButtonSecondary class="text-btn">Icons</ButtonSecondary>
            </div>
          </div>

          <div className={classes["players-number"]}>
            <h2 className={classes["settings-heading"]}>Number of Players</h2>
            <div className={classes["buttons-case"]}>
              <ButtonSecondary class="number-btn">1</ButtonSecondary>
              <ButtonSecondary class="number-btn">2</ButtonSecondary>
              <ButtonSecondary class="number-btn">3</ButtonSecondary>
              <ButtonSecondary class="number-btn">4</ButtonSecondary>
            </div>
          </div>

          <div className={classes["grid-size"]}>
            <h2 className={classes["settings-heading"]}>Grid size</h2>
            <div className={classes["buttons-case"]}>
              <ButtonSecondary class="text-btn">4 x 4</ButtonSecondary>
              <ButtonSecondary class="text-btn">6 x 6</ButtonSecondary>
            </div>
          </div>

          <div className={classes["start-btn--case"]}>
            <ButtonPrimary class="start-btn">Start Game</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}
