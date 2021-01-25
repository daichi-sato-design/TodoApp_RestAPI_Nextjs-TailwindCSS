import fetch from "node-fetch";

const apiUrl = "https://jsonplaceholder.typicode.com";

interface TASK {
  userId: string;
  id: string;
  title: string;
  completed: string;
}

export const getAllTasksData = async () => {
  const res = await fetch(new URL(`${apiUrl}/todos`));
  const tasks: TASK[] = await res.json();
  return tasks;
};
