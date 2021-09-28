import { useMedia, useToggle } from "react-use";
import { Nav } from "./styles";

import HeaderListItem from "../HeaderListItem";
import BurgerButton from "../BurgerButton";

export default function HeaderList() {
  const isMobile = useMedia("(max-width: 992px)");
  const [on, toggle] = useToggle(false);

  return (
    <Nav>
      {isMobile && <BurgerButton onClick={toggle} />}
      {(!isMobile || on) && <HeaderListItem />}
    </Nav>
  );
}

