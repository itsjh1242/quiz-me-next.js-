"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { GetQuizById } from "../Quiz";
import { Enroll } from "../Quiz";

// ui
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";

const QuizPage = ({ uuid }: { uuid: any }) => {
  const [quiz, setQuiz] = useState<{ [key: string]: any } | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchQuizById = async () => {
      if (uuid) {
        const quizData = await GetQuizById(uuid as string);
        setQuiz(quizData);
      }
    };
    fetchQuizById();
  }, [uuid]);

  const handleChoose = (key: any, selected: number) => {
    if (quiz) {
      quiz.quiz[key]["selectedAnswer"] = selected;
      if (selected.toString() === quiz.quiz[key].correct) {
        quiz.quiz[key]["isCorrect"] = true;
      } else {
        quiz.quiz[key]["isCorrect"] = false;
      }
      console.log(quiz);
    }
  };

  const handleEnroll = async () => {
    if (quiz) {
      let allAnswersProvided = true;

      Object.keys(quiz.quiz).forEach((item) => {
        if (allAnswersProvided && (quiz.quiz[item]["selectedAnswer"] === null || quiz.quiz[item]["selectedAnswer"] === undefined)) {
          allAnswersProvided = false;
          alert("모든 답변을 작성해주세요");
          return;
        }
      });

      if (allAnswersProvided) {
        const participantName = prompt("당신이 누구인지 알려주세요.");
        if (participantName) {
          await Enroll({ quiz, participantName }).then((res: { status: boolean; correctAnswer: number; totalQuestion: number }) => {
            if (res.status) {
              alert(res.totalQuestion + "문제 중 " + res.correctAnswer + "문제를 맞혔어요.");
              return router.push("/");
            }
          });
        } else {
          alert("당신이 누구인지 알기 전에는 제출할 수 없어요.");
        }
      }
    }
  };

  if (!quiz) return <div className="w-screen h-screen flex justify-center items-center">Loading...</div>;
  if (!quiz.available) return <div className="w-screen h-screen flex justify-center items-center">해당 퀴즈는 제작자에 의해 비활성화 되었습니다.</div>;

  return (
    <div className="min-h-screen flex items-start justify-center py-12 max-sm:px-2">
      <div className="w-1/2 max-sm:w-full flex flex-col">
        <p className="text-3xl max-sm:text-xl font-bold">{quiz.quizTitle}</p>
        <div className="flex justify-between items-center">
          <p className="max-sm:text-xs text-gray-500">이 퀴즈는 {quiz.userName}님이 만들었습니다.</p>
          <Badge>
            <p>{quiz.participant}명 참여</p>
          </Badge>
        </div>

        {Object.keys(quiz.quiz).map((item, index) => {
          return (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 my-4">
              <p className="text-lg font-semibold mb-4 max-sm:text-base">
                Q{index + 1}. {quiz.quiz[item].question}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={quiz.quiz[item].question}
                    value={1}
                    onChange={() => {
                      handleChoose(item, 1);
                    }}
                    className="form-radio text-indigo-600"
                  />
                  <p className="text-base text-gray-700 max-sm:text-xs">{quiz.quiz[item].answer1}</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={quiz.quiz[item].question}
                    value={2}
                    onChange={() => {
                      handleChoose(item, 2);
                    }}
                    className="form-radio text-indigo-600"
                  />
                  <p className="text-base text-gray-700 max-sm:text-xs">{quiz.quiz[item].answer2}</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={quiz.quiz[item].question}
                    value={3}
                    onChange={() => {
                      handleChoose(item, 3);
                    }}
                    className="form-radio text-indigo-600"
                  />
                  <p className="text-base text-gray-700 max-sm:text-xs">{quiz.quiz[item].answer3}</p>
                </div>
              </div>
            </div>
          );
        })}
        <Button
          className="hover:bg-green-600"
          bg_color="bg-green-500"
          method={() => {
            handleEnroll();
          }}
        >
          제출하기
        </Button>
      </div>
    </div>
  );
};
export default QuizPage;
