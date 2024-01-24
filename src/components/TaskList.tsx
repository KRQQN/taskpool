"use client";
import React from "react";
import Task from "./Task";
import { onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { taskCollectionRef } from "@/db/collections/firestore.collections";
import { taskData } from "@/lib/types";

const TaskList = () => {
  const [tasks, setTasks] = useState<taskData[]>();

  useEffect(() => {
    const unsub = onSnapshot(taskCollectionRef, (docCollection) => {
      setTasks(
        docCollection.docs.map((doc) => ({
          id: doc.id,
          category: doc.data().category,
          description: doc.data().description,
        }))
      );
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <ul className="max-w-xl flex flex-col h-96 mx-auto mt-10 bg-lightPink">
      {tasks?.map((task) => (
        <li key={task.id}>
          <Task
            id={task.id}
            category={task.category}
            description={task.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
