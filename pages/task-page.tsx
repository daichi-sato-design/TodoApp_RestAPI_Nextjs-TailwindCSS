import { useEffect } from "react";
import { NextPage, GetStaticProps } from "next";
import Layout from "../components/Layout";
import Task from "../components/Task";
import Link from "next/link";
import useSWR from "swr";
import { getAllTasksData, TASK } from "../lib/tasks";

interface PROPS {
  staticTasks: TASK[];
}

const fetcher = (url) => fetch(url).then((res) => res.json());
const apiURL = `${process.env.NEXT_PUBLIC_RESTAPI_URL}/api/list-task/`;

const TaskPage: NextPage<PROPS> = ({ staticTasks }) => {
  const { data: tasks, mutate } = useSWR(apiURL, fetcher, {
    initialData: staticTasks,
  });
  useEffect(() => {
    mutate();
  }, []);
  return (
    <Layout title="task page">
      <ul className="mt-16">
        {tasks && tasks.map((task) => <Task key={task.id} task={task}></Task>)}
      </ul>
      <Link href="/main-page">
        <div className="flex cursor-pointer mt-12 mb-16">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <span>Back to main page</span>
        </div>
      </Link>
    </Layout>
  );
};

export default TaskPage;

export const getStaticProps: GetStaticProps = async () => {
  const staticTasks = await getAllTasksData();
  return {
    props: { staticTasks },
    revalidate: 3,
  };
};
