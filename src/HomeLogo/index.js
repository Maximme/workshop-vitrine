import React from "react";
import { LogoHome } from "./styles";

export default function HomeLogo() {
    return (
        <LogoHome>
            <a href="/">
                <img href="/" alt="BeeBot" src="/assets/img/beebot_logo_home.png" />
            </a>
            <p>
                A platform bot to secure your exchanges.
            </p>
        </LogoHome>
    );
}