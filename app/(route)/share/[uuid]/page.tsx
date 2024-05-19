"use client";
import { useRouter } from "next/navigation";
// ui
import { Button } from "@/app/components/ui/Button";

const ShareQuiz = ({ params }: { params: any }) => {
  const router = useRouter();
  const shareLink = "https://itsjh1242.github.io/quiz/" + params.uuid;

  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      alert("복사 완료");
    } catch (e) {
      alert("복사 실패, " + e);
    }
  };
  const handleExit = () => {
    router.replace("/");
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 max-sm:px-2">
      <div className="flex- flex-col w-1/3 max-sm:w-full p-6 max-sm:p-2 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">퀴즈 공유</h2>
        <div className="w-full p-3 bg-gray-200">{shareLink}</div>
        <p className="text-sm text-gray-500">퀴즈가 만들어졌어요. 링크를 복사해서 친구들에게 공유해보세요!</p>
        <div className="flex w-full gap-3 mt-3 justify-end items-center">
          <Button
            bg_color="transparent"
            text_color="text-black"
            method={() => {
              handleExit();
            }}
          >
            닫기
          </Button>
          <Button
            className="hover:bg-blue-600"
            method={() => {
              handleCopyClipBoard();
            }}
          >
            링크 복사
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareQuiz;
