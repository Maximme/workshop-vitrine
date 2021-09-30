import React from "react";
import {Link} from 'react-scroll';
import { List } from "./styles";

const links = [
  {
    name: "Metrics",
    url: "#metric",
    id: "metric",
  },
  {
    name: "What is BeeBot ?",
    url: "#weare",
    id: "weare",
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
