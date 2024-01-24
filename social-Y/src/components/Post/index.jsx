import style from './style.module.css';

export function Post() {
    return (
        <div>
            <h2 className={style.nickname}>nickname</h2>
            <h2 className={style.username}>username</h2>
            <h2>12h</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia error ea, nam illum, blanditiis temporibus sed nemo aliquid corporis autem ex nobis iusto, sequi ipsam hic eaque earum alias.
            </p>
            <button>comment <span>28</span> </button>
            <button>repost <span>5</span> </button>
            <button>like <span>21</span> </button>
        </div>
    )
}