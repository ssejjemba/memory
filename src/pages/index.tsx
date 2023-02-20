import Head from "next/head";
import { ButtonPrimary } from "../components/buttons/button-primary/ButtonPrimary";
import { ButtonSecondary } from "../components/buttons/button-secondary/ButtonSecondary";
import { Logo } from "../components/logo/Logo";

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

      <div className="start-screen">
        <Logo />

        <div className="game-settings">
          <div className="theme">
            <h2 className="theme-title">Theme</h2>
            <div className="theme-buttons">
              <ButtonSecondary>Numbers</ButtonSecondary>
              <ButtonSecondary>Icons</ButtonSecondary>
            </div>
          </div>

          <div className="players-number">
            <h2 className="players-number--title">Number of Players</h2>
            <div className="players-number--buttons">
              <ButtonSecondary>1</ButtonSecondary>
              <ButtonSecondary>2</ButtonSecondary>
              <ButtonSecondary>3</ButtonSecondary>
              <ButtonSecondary>4</ButtonSecondary>
            </div>
          </div>

          <div className="grid-size">
            <h2 className="grid-size--title">Grid size</h2>
            <div className="grid-size--buttons">
              <ButtonSecondary>4 x 4</ButtonSecondary>
              <ButtonSecondary>6 x 6</ButtonSecondary>
            </div>
          </div>

          <div className="start-btn--case">
            <ButtonPrimary>Start Game</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}
