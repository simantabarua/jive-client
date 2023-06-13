import { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    document.title = `${title} | Jive`;
  }, [title]);
}

export default useTitle;
