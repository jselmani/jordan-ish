import { useContext } from "react";

import { viewportContext } from "../contexts/viewportcontext";

const useViewport = () => {
  const width = useContext(viewportContext);

  return width;
};

export default useViewport;
