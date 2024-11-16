import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-solid border-2"
    : "text-[#ADB7BE] border-tale-600 hover:border-tale-100";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name} 
    </button>
  );
};

export default ProjectTag;
