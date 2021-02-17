import PropTypes from "prop-types";
import {
  FIRST_QUESTION_MESSAGE,
  SECOND_QUESTION_MESSAGE,
} from "../../../utils/messages";

const FirstQuestion = ({ handleAnswers, answers }) => {
  return (
    <>
      <h3>{FIRST_QUESTION_MESSAGE}</h3>

      <div>
        <input
          type="radio"
          id="firstAnswerYes"
          name="firstAnswer"
          value="yes"
          checked={answers.firstAnswer === "yes"}
          onChange={handleAnswers}
        />
        <label htmlFor="firstAnswerYes">Yes</label>

        <input
          type="radio"
          id="firstAnswerNo"
          name="firstAnswer"
          value="no"
          checked={answers.firstAnswer === "no"}
          onChange={handleAnswers}
        />
        <label htmlFor="firstAnswerNo">No</label>
      </div>
    </>
  );
};

const SecondQuestion = ({ answers, handleAnswers }) => {
  return (
    <>
      <h3>{SECOND_QUESTION_MESSAGE}</h3>

      <input
        type="number"
        id="secondAnswer"
        name="secondAnswer"
        onChange={handleAnswers}
        value={answers.secondAnswer}
        min="1"
        max="100"
        step="1"
      />
      <label htmlFor="secondAnswer">%</label>
    </>
  );
};

const Questions = ({ handleAnswers, answers }) => {
  return (
    <>
      <FirstQuestion handleAnswers={handleAnswers} answers={answers} />
      {answers.firstAnswer === "yes" && (
        <SecondQuestion handleAnswers={handleAnswers} answers={answers} />
      )}
    </>
  );
};

Questions.propTypes = {
  handleAnswers: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired,
};

FirstQuestion.propTypes = {
  handleAnswers: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired,
};

SecondQuestion.propTypes = {
  handleAnswers: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired,
};

export default Questions;
