import Head from "next/head";
import classes from "../styles/game.module.css";

import Link from "next/link";
import { Logo } from "../components/logo/Logo";
import { ButtonPrimary } from "../components/buttons/button-primary/ButtonPrimary";
import { ButtonSecondary } from "../components/buttons/button-secondary/ButtonSecondary";
import { createBoardGrid } from "../utils/utils";

export default function Game(): JSX.Element {
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
      <div className={classes["game-board"]}>
        <div className={classes["game-controls"]}>
          <div className={classes["game-logo--box"]}>
            <Logo class="game-logo" />
          </div>

          <div className={classes["game-buttons"]}>
            <ButtonPrimary class="">Restart</ButtonPrimary>
            <ButtonSecondary class="">New Game</ButtonSecondary>
          </div>
        </div>

        <div id="game" className={classes["game"]}>
          {
            !createBoardGrid(4).map((board) => (
              <p key={createBoardGrid(4)[board]}>{board}</p>
            ))
          }
        </div>
      </div>
    </div>
  );
}
