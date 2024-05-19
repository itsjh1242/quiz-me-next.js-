// 퀴즈 생성 시 작업 처리
export const UploadQuiz = async ({
  quiz,
}: {
  quiz: { [key: string]: { question: string; answer1: string; answer2: string; answer3: string; correct: number } };
}) => {
  // 퀴즈 이름 설정
  const quizTitle: any = prompt("퀴즈 제목을 입력해주세요.");
  const data = { [quizTitle]: quiz };

};
