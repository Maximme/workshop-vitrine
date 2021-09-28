import HeaderList from "../HeaderList";
import HeaderLogo from "../HeaderLogo";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo />
      <HeaderList />
    </HeaderContainer>
  );
}
