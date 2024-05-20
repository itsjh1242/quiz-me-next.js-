import ShareQuizPage from "./ShareQuizPage";
import { GetQuizzesUUID } from "../../quizzes/Quiz";

export async function generateStaticParams() {
  try {
    const uuids = await GetQuizzesUUID();
    if (uuids) {
      return uuids.map((uuid) => ({ uuid: uuid }));
    } else {
      return [];
    }
  } catch (e) {
    console.error(e);
    return [];
  }
}
export default function Page({ params }: { params: any }) {
  return <ShareQuizPage uuid={params.uuid} />;
}
