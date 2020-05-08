import React, {useState} from 'react'
import './Modal.css'

const Modal = (props)=>{
    const [value, setValue] = useState(props.value)

    function updateValue(e){
        setValue(e.target.value)
    }

    function submit(){
        props.click(value)
    }

    return(
            <div className="modal">
                <div className="modal__form">
                    <div className="display form-control">
                        <div>R$</div>
                        <div>
                            <input className="novo_lance" type="text" value={value} onChange={updateValue} />
                        </div>
                        <div>,00</div>
                    </div>
                    <div className="form-control">
                        <button className="btn" onClick={submit}>DAR LANCE</button>
                    </div>

                </div>
            </div>

    )
}

export default Modal