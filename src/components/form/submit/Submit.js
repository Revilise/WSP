import cl from '../form.module.scss';

import {Button} from "../../button/Button";

export default function Submit({onClick, children}) {
    return (
        <Button
            onClick={onClick}
            children={children}
            className={cl.form__submit}
        />
    )
}