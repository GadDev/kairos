import React from "react";

const List = ({ children }) => {
  return (
    <ul className="list-component__wrapper">
      {children.map(child => (
        <li key={child.key} className="list-item">
          {child}
        </li>
      ))}
    </ul>
  );
};

export default List;
