"use client";
import React, { useEffect, useState, useRef } from "react";

// components
import { InitQuizContext } from "./AddQuizContext";

// ui
import { RoundedButton } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";

const MAX_CREATE_VALUE = 10;

interface QuizContextType {
  q: string | null;
  a1: string | null;
  a2: string | null;
  a3: string | null;
  c: number | null;
}

const CreateQuizPage = () => {
  const [quiz, setQuiz] = useState<{ [key: string]: { answer1: string; answer2: string; answer3: string; correct: number } | QuizContextType }>({});
  const [quizCount, setQuizCount] = useState<number>(0);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [selectedQuiz, setSelectedQuiz] = useState<string>("");

  // 퀴즈 추가
  const addQuiz = ({ q, a1, a2, a3, c }: { q: string; a1: string; a2: string; a3: string; c: number }) => {
    setQuiz((prev) => ({
      ...prev,
      [q]: { answer1: a1, answer2: a2, answer3: a3, correct: c },
    }));
    setQuizCount(quizCount + 1);
  };
  // 퀴즈 수정

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold mb-8">새로운 퀴즈 만들기</h1>
      <div className="w-full sm:w-1/2 flex max-sm:flex-col justify-center items-start max-sm:items-center gap-4">
        {/* 퀴즈 추가 */}
        <AddQuizForm
          quiz={quiz as { [key: string]: { answer1: string; answer2: string; answer3: string; correct: number } }}
          setQuiz={setQuiz}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          selectedQuiz={selectedQuiz}
          quizCount={quizCount}
          addQuiz={(q, a1, a2, a3, c) => addQuiz({ q, a1, a2, a3, c })}
        />
        {/* 퀴즈 목록 */}
        <div className="bg-white p-8 rounded shadow-md w-full max-sm:max-w-sm">
          <h2 className="text-2xl font-bold mb-4">퀴즈 목록</h2>
          {Object.keys(quiz).map((key, index) => {
            return (
              <p
                key={index}
                className="mb-2 font-bold cursor-pointer"
                onClick={() => {
                  setSelectedQuiz(key);
                  setIsEditMode(true);
                }}
              >
                {key}
              </p>
            );
          })}
        </div>
      </div>

      <RoundedButton
        className="fixed bottom-4 right-1/2 translate-x-1/2 w-1/2 max-sm:w-11/12"
        bg_color="bg-green-500"
        hover_bg_color="bg-green-600"
        method={() => {}}
      >
        <p>+ 퀴즈 제출</p>
      </RoundedButton>
    </div>
  );
};

const AddQuizForm = ({
  quiz,
  setQuiz,
  isEditMode,
  setIsEditMode,
  selectedQuiz,
  quizCount,
  addQuiz,
}: {
  quiz: { [key: string]: { answer1: string; answer2: string; answer3: string; correct: number } };
  setQuiz: any;
  isEditMode: boolean;
  setIsEditMode: any;
  selectedQuiz: string;
  quizCount: number;
  addQuiz: (q: string, a1: string, a2: string, a3: string, c: number) => void;
}) => {
  const questionRef = useRef<HTMLInputElement>(null);
  const answer1Ref = useRef<HTMLInputElement>(null);
  const answer2Ref = useRef<HTMLInputElement>(null);
  const answer3Ref = useRef<HTMLInputElement>(null);
  const correct1Ref = useRef<HTMLInputElement>(null);
  const correct2Ref = useRef<HTMLInputElement>(null);
  const correct3Ref = useRef<HTMLInputElement>(null);

  const [quizContext, setQuizContext] = useState<QuizContextType>({ q: null, a1: null, a2: null, a3: null, c: null });
  const AddQuizContext = (event: React.ChangeEvent<HTMLInputElement>, target: string) => {
    setQuizContext((prev) => ({
      ...prev,
      [target]: event.target.value,
    }));
  };

  const SaveQuizContext = () => {
    if (quizCount >= MAX_CREATE_VALUE) {
      return alert("만들 수 있는 퀴즈는 " + MAX_CREATE_VALUE + "개 입니다.");
    }
    const quiz: any = { ...quizContext };

    for (const key in quiz) {
      if (quiz[key] === null) {
        return alert("모든 항목을 작성해주세요.");
      }
    }

    // 수정모드라면 수정모드 종료
    if (isEditMode) {
      DeleteQuizContext();
      addQuiz(quiz.q, quiz.a1, quiz.a2, quiz.a3, quiz.c);
      setIsEditMode(false);
      return null;
    }
    addQuiz(quiz.q, quiz.a1, quiz.a2, quiz.a3, quiz.c);
  };

  const DeleteQuizContext = () => {
    const prev = { ...quiz };
    delete prev[selectedQuiz];
    setQuiz(prev);

    InitQuizContext({
      qRef: questionRef,
      a1Ref: answer1Ref,
      a2Ref: answer2Ref,
      a3Ref: answer3Ref,
      c1Ref: correct1Ref,
      c2Ref: correct2Ref,
      c3Ref: correct3Ref,
      quiz,
      selectedQuiz,
      isInit: true,
    });

    setIsEditMode(false);
    return null;
  };

  useEffect(() => {
    if (isEditMode) {
      InitQuizContext({
        qRef: questionRef,
        a1Ref: answer1Ref,
        a2Ref: answer2Ref,
        a3Ref: answer3Ref,
        c1Ref: correct1Ref,
        c2Ref: correct2Ref,
        c3Ref: correct3Ref,
        quiz,
        selectedQuiz,
        isInit: false,
      });
    }
  }, [isEditMode, selectedQuiz, quiz]);

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-sm:max-w-sm">
      <h2 className="text-2xl font-bold mb-4">{isEditMode ? "퀴즈 수정" : "퀴즈 추가"}</h2>
      <div className="mb-4">
        <Input
          prop_ref={questionRef}
          label="질문"
          placeholder="질문을 입력하세요"
          method={(event: React.ChangeEvent<HTMLInputElement>, target) => {
            AddQuizContext(event, target);
          }}
          AddQuizContextTarget="q"
        />
      </div>
      <div className="mb-4">
        <Input
          prop_ref={answer1Ref}
          label="답안 1"
          placeholder="첫 번째 답안을 입력하세요"
          method={(event: React.ChangeEvent<HTMLInputElement>, target) => {
            AddQuizContext(event, target);
          }}
          AddQuizContextTarget="a1"
        />
      </div>
      <div className="mb-4">
        <Input
          prop_ref={answer2Ref}
          label="답안 2"
          placeholder="두 번째 답안을 입력하세요"
          method={(event: React.ChangeEvent<HTMLInputElement>, target) => {
            AddQuizContext(event, target);
          }}
          AddQuizContextTarget="a2"
        />
      </div>
      <div className="mb-4">
        <Input
          prop_ref={answer3Ref}
          label="답안 3"
          placeholder="세 번째 답안을 입력하세요"
          method={(event: React.ChangeEvent<HTMLInputElement>, target) => {
            AddQuizContext(event, target);
          }}
          AddQuizContextTarget="a3"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">정답은 몇 번인가요?</label>
        <div className="flex gap-4">
          <input
            ref={correct1Ref}
            type="radio"
            name="correct"
            value={1}
            onChange={(event) => {
              AddQuizContext(event, "c");
            }}
          />
          1번
          <input
            ref={correct2Ref}
            type="radio"
            name="correct"
            value={2}
            onChange={(event) => {
              AddQuizContext(event, "c");
            }}
          />
          2번
          <input
            ref={correct3Ref}
            type="radio"
            name="correct"
            value={3}
            onChange={(event) => {
              AddQuizContext(event, "c");
            }}
          />
          3번
        </div>
      </div>
      <RoundedButton
        className="w-full"
        method={() => {
          SaveQuizContext();
        }}
      >
        저장
      </RoundedButton>

      {isEditMode ? (
        <RoundedButton
          className="w-full mt-4"
          bg_color="bg-red-500"
          hover_bg_color="bg-red-600"
          method={() => {
            DeleteQuizContext();
          }}
        >
          삭제
        </RoundedButton>
      ) : null}
    </div>
  );
};

export default CreateQuizPage;
