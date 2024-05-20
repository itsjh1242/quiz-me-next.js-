import { GetQuizzesUUID } from "../(route)/quizzes/Quiz";

export async function generateStaticParams(){
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
};
