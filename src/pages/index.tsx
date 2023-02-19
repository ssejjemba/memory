import Head from "next/head";
import { ButtonPrimary } from "../components/buttons/button-primary/ButtonPrimary";
import { ButtonSecondary } from "../components/buttons/button-secondary/ButtonSecondary";
import { Logo } from "../components/logo/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

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

      <main>
        <Logo />

        <ButtonPrimary>Restart</ButtonPrimary>
        <div>
          <ButtonSecondary>New Game</ButtonSecondary>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        </div>
      </main>
    </div>
  );
}
