import React from "react";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../MenuItem/MenuItem.component";
import "./Directory.styles.scss";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className="directory">
      {sections.map(({ id, ...props }) => {
        return <MenuItem key={id} {...props} />;
      })}
    </div>
  );
};

export default Directory;
