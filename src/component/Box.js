import "./../index.css";
import "./box.css";
import React, { useCallback, useState } from "react";

function Box(props) {
  const { name, list } = props;
  const [collapsed, setCollapsed] = useState("-");

  const onCollapseClick = () => {
    setCollapsed(collapsed === "-" ? "+" : "-");
  };

  return (
    <div className="box">
      <div className="top">
        <div className="collapseButton" onClick={onCollapseClick}>
          {collapsed}
        </div>
        <div className="provider">{name}</div>
      </div>
      <div>
        {collapsed === "-" &&
          list.map((person) => (
            <div className="person" key={person.id}>
              {person.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Box;
