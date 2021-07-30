import './lifelinepopups.css';
import AskTheAudiencePopUp from './AskTheAudienceModal';
import Timer from './Timer';
import CurrentMoney from './CurrentMoney';
import { useEffect } from 'react';

const LifeLinePopUps = (props) => {

    useEffect(() => {
        const txtInterval = setInterval(function () {
            clearInterval(txtInterval);
            props.mainStateFlag();
            const moneyElem = document.querySelector('.question');
            moneyElem.classList.add('show-question');
        }, 1000);
    }, []);

    return (
        <div className="lifeline-popups">
            {/* <AskTheAudiencePopUp /> */}
            {props.timerVisible ? <Timer
                changeLifeLineAvailable={props.changeLifeLineAvailable}
                timerVisible={props.timerVisible}
                initTimer={props.initTimer}
                timerSeconds={props.timerSeconds}
                changeTimerSeconds={props.changeTimerSeconds} /> : null}
            <CurrentMoney amount={props.current_money} />
        </div>
    )
}

export default LifeLinePopUps;