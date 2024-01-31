import { TwitterLogo } from "@phosphor-icons/react";

import style from "./style.module.css";


export function Logo() {
    return (
        <div>
            <TwitterLogo className={style.logo} size={32} weight="fill" />
        </div>)
}
