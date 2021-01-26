import fetch from "node-fetch";

const apiUrl = "https://jsonplaceholder.typicode.com";

export interface TASK {
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

export const getAllTaskIds = async () => {
  const res = await fetch(new URL(`${apiUrl}/todos`));
  const tasks: TASK[] = await res.json();

  return tasks.map((task) => {
    return {
      params: {
        id: task.id,
      },
    };
  });
};
