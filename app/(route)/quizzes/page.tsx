import { GetQuizzesByUserName } from "./getQuiz";

const QuizzesPage = () => {
  // "김준현" 사용자의 퀴즈를 가져오는 함수 호출 예시
  GetQuizzesByUserName("김준현").then((quizzes) => {
    console.log("Quizzes by 김준현:", quizzes);
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      <h1 className="text-4xl font-bold mb-8">Available Quizzes</h1>
      {/* 여기서 퀴즈 리스트 컴포넌트를 불러올 수 있습니다 */}
      <p>퀴즈 리스트가 여기에 들어갑니다.</p>
    </div>
  );
};

export default QuizzesPage;
