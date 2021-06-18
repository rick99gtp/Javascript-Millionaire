import './LifeLineModal.css';

import fiftyfifty from '../fiftyfifty.png';
import phoneafriend from '../phoneafriend.png';
import asktheaudience from '../asktheaudience.png';
import { useEffect, useState } from 'react';

const LifeLineModal = (props) => {

    const imgs = [fiftyfifty, phoneafriend, asktheaudience];
    const lifelineName = ['50:50', 'Phone A Friend', 'Ask the Audience'];
    const [isHidden, setIsHidden] = useState(false);

    const modalImg = imgs[props.lifeLineModalImage];

    useEffect(() => {
        if(isHidden) {
            const myTimer = setTimeout(() => {
                props.changeViewLifeLineModal();
                clearTimeout(myTimer);
            },500);
        }
    },[isHidden]);

    return (
        <div className={`lifeline__modal ${isHidden ? 'hide-modal' : 'show-modal'}`}>
            <img src={modalImg} alt="modal__image" />
            <p>Are you sure you want to use your {lifelineName[props.lifeLineModalImage]} lifeline?</p>
            <div className='lifeline__modal--options'>
                <div className='lifeline__button lifeline__modal--option-no' onClick={() => setIsHidden(true)}>No</div>
                <div className='lifeline__button lifeline__modal--option-yes' onClick={() => props.useLifeLine(props.lifeLineModalImage)}>Yes</div>
            </div>
        </div>
    )
}

export default LifeLineModal;