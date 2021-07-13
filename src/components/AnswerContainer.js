import './answers.css';
import Answer from './Answer';

function AnswerContainer(props) {
    return (
        <div className='answer-container'>
            <Answer selectAnswer={props.selectAnswer1} bgColor={props.bgColor1} answer_selected={props.answer1_selected} letter={props.letter_1} answer={props.answer1} />
            <Answer selectAnswer={props.selectAnswer2} bgColor={props.bgColor2} answer_selected={props.answer2_selected} letter={props.letter_2} answer={props.answer2} />
            <Answer selectAnswer={props.selectAnswer3} bgColor={props.bgColor3} answer_selected={props.answer3_selected} letter={props.letter_3} answer={props.answer3} />
            <Answer selectAnswer={props.selectAnswer4} bgColor={props.bgColor4} answer_selected={props.answer4_selected} letter={props.letter_4} answer={props.answer4}/>
        </div>
    );
}

export default AnswerContainer;