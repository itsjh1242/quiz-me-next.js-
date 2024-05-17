export const InitQuizContext = ({
  qRef,
  a1Ref,
  a2Ref,
  a3Ref,
  c1Ref,
  c2Ref,
  c3Ref,
  quiz,
  selectedQuiz,
  isInit,
}: {
  qRef: React.RefObject<HTMLInputElement>;
  a1Ref: React.RefObject<HTMLInputElement>;
  a2Ref: React.RefObject<HTMLInputElement>;
  a3Ref: React.RefObject<HTMLInputElement>;
  c1Ref: React.RefObject<HTMLInputElement>;
  c2Ref: React.RefObject<HTMLInputElement>;
  c3Ref: React.RefObject<HTMLInputElement>;
  quiz: { [key: string]: { answer1: string; answer2: string; answer3: string; correct: number } };
  selectedQuiz: string;
  isInit: boolean;
}) => {
  const correct = quiz[selectedQuiz].correct.toString();
  if (qRef.current && a1Ref.current && a2Ref.current && a3Ref.current && c1Ref.current && c2Ref.current && c3Ref.current) {
    qRef.current.value = isInit ? "" : selectedQuiz;
    a1Ref.current.value = isInit ? "" : quiz[selectedQuiz].answer1;
    a2Ref.current.value = isInit ? "" : quiz[selectedQuiz].answer2;
    a3Ref.current.value = isInit ? "" : quiz[selectedQuiz].answer3;
    c1Ref.current.checked = isInit ? false : correct === "1";
    c2Ref.current.checked = isInit ? false : correct === "2";
    c3Ref.current.checked = isInit ? false : correct === "3";
  }
};
