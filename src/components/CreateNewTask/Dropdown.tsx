import React, { ChangeEvent, useState } from "react";

// TODO : should get categories as props from database.
// TODO :  create function to render <options> from data
const Dropdown = () => {
  const [selectedItem, setSelectedItem] = useState(""); // State to hold the selected item

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(e.target.value);
  };

  return (
    <div className="flex self-center relative left-8">
      <DisplaySelection selectedItem={selectedItem} />
      <ArrowIcon />
      <SelectOverlay handleChange={handleChange} selectedItem={selectedItem} />
    </div>
  );
};

const ArrowIcon = () => {
  return (
    <div className="flex items-center px-2 rounded-r-md  bg-lightRed pointer-events-none shadow-md">
      <svg
        className="fill-current h-4 w-4"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6z" />
      </svg>
    </div>
  );
};

type DisplaySelectionProps = {
  selectedItem: string;
};

const DisplaySelection = ({ selectedItem }: DisplaySelectionProps) => {
  return (
    <input
      type="text"
      name="category"
      className="text-black rounded-l-md bg-lightPink self-center px-2 shadow-md focus:outline-none"
      value={selectedItem || "Select category"}
      readOnly
    />
  );
};

type SelectOverlayProps = {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectedItem: string;
};

const SelectOverlay = ({ handleChange, selectedItem }: SelectOverlayProps) => {
  return (
    <select
      className="opacity-0 relative right-8 w-8 bg-lightPink text-black cursor-pointer"
      onChange={handleChange}
      value={selectedItem}
    >
      <option value="category 1">Category 1</option>
      <option value="category 2">Category 2</option>
      <option value="category 3">Category 3</option>
    </select>
  );
};
export default Dropdown;
