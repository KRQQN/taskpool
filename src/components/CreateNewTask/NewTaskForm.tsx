"use client";
import { addData } from "@/actions/addTask";
import Dropdown from "./Dropdown";
import { useRef } from "react";
import SubmitBtn from "./SubmitBtn";

const NewTaskForm = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      className="bg-darkRed rounded-md mt-5 p-5 flex flex-col m-auto max-w-sm"
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        console.log(addData(formData));
      }}
    >
      <div className="flex flex-col my-2">
        <h1 className="text-center mb-5 text-2xl">
          What can we help you with?
        </h1>
        <label htmlFor="email">Email</label>
        <input
          className="text-black m-1 border-2"
          type="text"
          name="data"
          id="email"
        />
      </div>
      <Dropdown />
      <textarea
        className="border-2 border-red-600 my-4"
        name="data"
        id="desc"
        cols={30}
        rows={5}
        style={{ resize: "none" }}
      ></textarea>

      <SubmitBtn />
    </form>
  );
};

export default NewTaskForm;
