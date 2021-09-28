import React from "react";
import { List } from "./styles";

const links = [
  {
    name: "Metrics",
    url: "#1",
  },
  {
    name: "Qui sommes nous ?",
    url: "#2",
  },
];

export default function HeaderListItem() {
  return (
    <List>
      {links.map(({ index, name, url }) => (
        <li key={index}>
          <a href={url}>
            <span>{name}</span>
          </a>
        </li>
      ))}
    </List>
  );
}
