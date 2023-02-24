import cl from '../form.module.scss';

import DefaultInput from '../../input/Input';

export default function Input({value, onChange}) {
    return (
        <DefaultInput
            value={value}
            onChange={onChange}
            className={cl.form__input}
        />
    )
}