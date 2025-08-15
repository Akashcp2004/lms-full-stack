import { useEffect } from "react";

const TitleHandler = ({ title = "LMS" }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null; // This component doesn’t render anything
};

export default TitleHandler;
