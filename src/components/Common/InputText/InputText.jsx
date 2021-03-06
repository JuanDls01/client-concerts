import style from './InputText.module.css';

const InputText = ({name, type, placeholder, handleChange, errors, inputNext, inputState, autoFocus}) => {
    // Este recibe parámetros básicos de un input (name, type, placeholder, handleChange) e incorpora 
    // la función nextFocus para que no marque todos los errores sino solo el siguiente input (inputNext)
    // al que se encuentra el usuario. Arroja un mensaje de error si hay errores.

    if(!type){
        type='text'
    }

    const nextFocus = (inputF, inputS) => {
        document.getElementById(inputF).addEventListener('keydown', (event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById(inputS).focus();
            event.preventDefault();
          }
        })
    };

    return (
        <div className={style.inputContainner}>
            <input
                type={type}
                name={name}
                id={name}
                className={style.input}
                placeholder={placeholder}
                value={inputState[name]}
                autoFocus={autoFocus}
                onChange={handleChange}
                onKeyDown={() => nextFocus(name, inputNext)} />
            {errors[name] ? <div className={style.error}>{errors[name]}</div> : null}
        </div>
    )
}

export default InputText;