import { render, screen } from "@testing-library/react";

import Questions from "./index";
import {
  FIRST_QUESTION_MESSAGE,
  SECOND_QUESTION_MESSAGE,
} from "../../../utils/messages";

test("if the component has the initial answers, the first question message is rendered", () => {
  const message = FIRST_QUESTION_MESSAGE;
  const initialAnswers = {
    firstAnswer: "",
    secondAnswer: 1,
  };

  render(
    <Questions handleAnswers={() => jest.fn()} answers={initialAnswers} />
  );
  expect(screen.getByText(message)).toBeInTheDocument();
});

test("if the component has the initial answers, the second question message is not rendered", () => {
  const message = SECOND_QUESTION_MESSAGE;
  const initialAnswers = {
    firstAnswer: "",
    secondAnswer: 1,
  };

  render(
    <Questions handleAnswers={() => jest.fn()} answers={initialAnswers} />
  );
  expect(screen.queryByText(message)).not.toBeInTheDocument();
});

test("if user answers 'yes' , the second question message is rendered", () => {
  const message = SECOND_QUESTION_MESSAGE;
  const answers = {
    firstAnswer: "yes",
    secondAnswer: 1,
  };

  render(<Questions handleAnswers={() => jest.fn()} answers={answers} />);
  expect(screen.queryByText(message)).toBeInTheDocument();
});

test("if user answers 'no' , the second question message is not rendered", () => {
  const message = SECOND_QUESTION_MESSAGE;
  const answers = {
    firstAnswer: "no",
    secondAnswer: 1,
  };

  render(<Questions handleAnswers={() => jest.fn()} answers={answers} />);
  expect(screen.queryByText(message)).not.toBeInTheDocument();
});
