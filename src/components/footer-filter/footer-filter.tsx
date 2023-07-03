import React, { useContext } from "react";
import { TodoContext } from "../../app-contexts/todo-context";
import "./footer-filter.styles.css";

const FooterFilter: React.FC = () => {
  const { activeFilter, updateActiveFilter } = useContext(TodoContext);

  return (
    <div className="flex">
      <label htmlFor="all" className="radio-label">
        <input
          id="all"
          name="filter"
          type="radio"
          value={"all"}
          checked={activeFilter === "all"}
          onChange={() => updateActiveFilter("all")}
        />
        <div>All</div>
      </label>
      <label htmlFor="active" className="radio-label">
        <input
          id="active"
          name="filter"
          type="radio"
          value={"active"}
          checked={activeFilter === "active"}
          onChange={() => updateActiveFilter("active")}
        />
        <div>Active</div>
      </label>
      <label htmlFor="completed" className="radio-label">
        <input
          id="completed"
          name="filter"
          checked={activeFilter === "complete"}
          type="radio"
          value={"completed"}
          onChange={() => updateActiveFilter("complete")}
        />
        <div>Completed</div>
      </label>
    </div>
  );
};

export default FooterFilter;
