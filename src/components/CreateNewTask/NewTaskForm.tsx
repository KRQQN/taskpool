"use client";
import { addData } from "@/actions/addTask";
import { useRef } from "react";
import Dropdown from "./Dropdown";
import EmailInput from "./EmailInput";
import SubmitBtn from "./SubmitBtn";
import TextAreaInput from "./TextAreaInput";

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
      <EmailInput />
      <Dropdown />
      <TextAreaInput />
      <SubmitBtn />
    </form>
  );
};

export default NewTaskForm;
