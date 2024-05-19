import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "@/app/utils/firebase";
import { v4 as uuidv4 } from "uuid";

// 퀴즈 생성 시 작업 처리
export const UploadQuiz = async ({
  quiz,
  user,
}: {
  quiz: { [key: string]: { question: string; answer1: string; answer2: string; answer3: string; correct: number } };
  user: any;
}) => {
  // 퀴즈 이름 설정
  const quizTitle: any = prompt("퀴즈 제목을 입력해주세요.");
  if (quizTitle) {
    // uuid 생성
    const uuid = uuidv4();
    // 데이터 전처리
    const data = { ...quiz, quizTitle: quizTitle, userName: user.displayName, available: true, timestamp: Timestamp.now() };
    // Firebase에 추가
    // await addDoc(collection(db, "quizzes"), data);
    try {
      await setDoc(doc(db, "quizzes", uuid), data);
      return uuid;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
};
