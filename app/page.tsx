// ui
import { LinkButton } from "./components/ui/Button";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-8">Quiz-Me</h1>
      <p className="text-lg mb-12">퀴즈를 만들고 친구들에게 공유하세요!</p>

      <div className="flex space-x-4">
        <LinkButton link="create">퀴즈 만들기</LinkButton>
        <LinkButton bg_color="bg-green-500" hover_bg_color="bg-green-600" link="quizzes">
          내 퀴즈 보기
        </LinkButton>
      </div>
    </div>
  );
};

export default HomePage;
