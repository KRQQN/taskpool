import { taskData } from "@/lib/types";

const Task = ({ id, category, description }: taskData) => {
  function handleSelect() {
    // TODO: Implement code to assign user to task & and open answer form
    console.log("Task id: " + id);
  }

  return (
    <div className="bg-neutral-300 flex justify-between max-w-full rounded-md shadow-md m-1">
      <div className="m-2 flex flex-col text-lightPink">
        <h3 className="text-black font-extrabold">{category}</h3>
        <p className="text-black">{description}</p>
      </div>

      <div className="flex flex-col justify-evenly mx-2 p-1">
        <button
          className="bg-darkRed text-lightpink rounded-sm my-0.5 p-0.5"
          onClick={handleSelect}
        >
          Select
        </button>
        <button className="bg-gray text-lightPink rounded-sm my-0.5 p-0.5">
          Details
        </button>
      </div>
    </div>
  );
};

export default Task;
