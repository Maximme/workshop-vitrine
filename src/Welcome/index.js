import HomeLogo from "../HomeLogo";
import LinkBot from "../LinkBot";
import { WelcomeContainer } from "./styles";

export default function Welcome() {
  return (
    <WelcomeContainer>
      <HomeLogo />
      <LinkBot />
    </WelcomeContainer>
  );
}