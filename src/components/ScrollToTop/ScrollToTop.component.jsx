import { useEffect } from "react";
import { useHistory } from "react-router";

const ScrollToTop = () => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => unlisten();
  }, [history]);

  return null;
};

export default ScrollToTop;
