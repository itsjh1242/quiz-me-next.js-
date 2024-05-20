import { collection, query, where, getDoc, getDocs, orderBy, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/app/utils/firebase";

export const GetQuizzesByUserName = async (userName: string) => {
  try {
    const quizzesRef = collection(db, "quizzes");
    const q = query(quizzesRef, where("userName", "==", userName), orderBy("timestamp", "desc"));

    const querySnapshot = await getDocs(q);
    const quizzes: any = [];
    querySnapshot.forEach((doc) => {
      quizzes.push({ id: doc.id, ...doc.data() });
    });
    return quizzes;
  } catch (e) {
    console.error("Error getting documents: ", e);
    return [];
  }
};

export const GetQuizById = async (id: string) => {
  try {
    const docRef = doc(db, "quizzes", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { ...docSnap.data() };
    } else {
      // 데이터 없음
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const GetParticipantById = async (id: string) => {
  try {
    const participantRef = collection(db, `participants/participantsCollection/${id}`);
    const participantSnap = await getDocs(participantRef);
    const documents = participantSnap.docs.map((doc) => doc.data());
    return documents;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const DisableQuizById = async (id: string) => {
  try {
    const docRef = doc(db, "quizzes", id);
    await updateDoc(docRef, {
      available: false,
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

const IncrementParticipantCount = async (id: string) => {
  try {
    const docRef = doc(db, "quizzes", id);
    const docSnap = await getDoc(docRef);
    const participantData = docSnap.data();

    if (participantData && typeof participantData.participant === "number") {
      await updateDoc(docRef, {
        participant: participantData.participant + 1,
      });
    } else {
      console.log("데이터베이스 파일 구조 오류");
    }
  } catch (e) {
    console.error(e);
  }
};

const CalcQuizResult = (quiz: { [key: string]: any }) => {
  let correctAnswer = 0;
  const totalQuestion = Object.keys(quiz.quiz);
  totalQuestion.map((item) => {
    if (quiz.quiz[item].isCorrect) {
      correctAnswer += 1;
    }
  });

  return { status: true, totalQuestion: totalQuestion.length, correctAnswer: correctAnswer };
};

export const Enroll = async ({ quiz, participantName }: { quiz: { [key: string]: any }; participantName: string }) => {
  const result = CalcQuizResult(quiz);
  const enrollData = { quiz: { ...quiz }, participantName: participantName, result: result };

  try {
    const participantDocRef = doc(db, `participants/participantsCollection/${quiz.id}/${participantName}`);
    await setDoc(participantDocRef, enrollData);
    IncrementParticipantCount(quiz.id);
    return result;
  } catch (e) {
    console.error(e);
    return { status: false, totalQuestion: 0, correctAnswer: 0 };
  }
};
