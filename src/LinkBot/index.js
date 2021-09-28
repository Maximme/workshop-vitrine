import React from "react";
import { Link } from "./styles";

export default function InstallLink() {
    return (
        <Link>
            <a href="https://discord.com/api/oauth2/authorize?client_id=892335487698735125&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer" >
                <img href="https://discord.com/api/oauth2/authorize?client_id=892335487698735125&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer" alt="BeeBot for Discord" src="/assets/img/beebot4discord.png" />
                <p> Install for Discord</p>
            </a>
            <a href="https://discord.com/api/oauth2/authorize?client_id=892335487698735125&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer" >
                <img href="https://discord.com/api/oauth2/authorize?client_id=892335487698735125&permissions=8&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer" alt="BeeBot for Discord" src="/assets/img/beebot4slack.png" />
                <p> Install for Slack</p>
            </a>
        </Link>
    );
}