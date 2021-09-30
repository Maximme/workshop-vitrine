import React from "react";
import {Link} from 'react-scroll';
import { List } from "./styles";

const links = [
  {
    name: "Qu'est-ce que BeeBot ?",
    url: "#weare",
    id: "weare",
  },
  {
    name: "Quelques statistiques",
    url: "#metric",
    id: "metric",
  },
];

export default function HeaderListItem() {
  return (
    <List>
      {links.map(({ index, name, url, id }) => (
        <li key={index}>
          <Link to={id} spy={true} smooth={true}>
          <a href={url}>
            <span>{name}</span>
          </a>
          </Link>
        </li>
      ))}
    </List>
  );
}
