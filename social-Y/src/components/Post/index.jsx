import { ChatCircle, Heart, Repeat } from '@phosphor-icons/react'

import style from './style.module.css';

export function Post() {
    return (
        <div className={style.post} >
            <div className={style.header}>
                <h2 className={style.nickname}>Pedro Silva</h2>
                <h2 className={style.username}>@pedrinho_123</h2>
                <h2 className={style.timeAgo}>12h</h2>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia error ea, nam illum, blanditiis temporibus sed nemo aliquid corporis autem ex nobis iusto, sequi ipsam hic eaque earum alias.
            </p>
            <div className={style.btns}>
                <button className={style.callToActionBtn}>
                    <ChatCircle size={16} /> 
                    <span>28</span> 
                </button>
                <button className={style.callToActionBtn}>
                    <Repeat size={16} /> 
                    <span>5</span> 
                </button>
                <button className={style.callToActionBtn}>
                    <Heart size={16} /> 
                    <span>21</span> 
                </button>
            </div>
        </div>
    )
}