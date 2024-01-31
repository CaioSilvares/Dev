
import style from './style.module.css'

export function MenuOption({ children, text, selected = false }) {
    return (
        <div className={`${style.menuOption} ${selected ? style.selectedOption : ''}`}>
            {children}
            {text}
        </div>
    )
}