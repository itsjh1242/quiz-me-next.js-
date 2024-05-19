import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "@/app/utils/firebase";

export const GetQuizzesByUserName = async (userName: string) => {
  const quizzesRef = collection(db, "quizzes");
  const q = query(quizzesRef, where("userName", "==", userName), orderBy("timestamp", "desc"));

  try {
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
