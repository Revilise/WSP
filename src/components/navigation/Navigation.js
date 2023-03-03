import cl from './navigation.module.scss'
import Item from "./item/Item";

export default function Navigation({links}) {
    return (
        <div className={cl.navigation}>
            {links?.map(el => <Item href={el.link}>{el.title}</Item>)}
        </div>
    )
}