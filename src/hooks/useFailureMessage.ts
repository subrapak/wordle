import { FAILURE_MESSAGES } from "@/utils/constants";
import { generateRandomObjectKey } from "@/utils/game";
import { useEffect, useState } from "react";

export const useFailureMessage = () => {
  const [failureMessage, setFailureMessage] = useState(FAILURE_MESSAGES[0]);

  const generateFailureMessage = () => {
    const randomFailureTitle =
      FAILURE_MESSAGES[generateRandomObjectKey(FAILURE_MESSAGES)].title;
    const randomFailureText =
      FAILURE_MESSAGES[generateRandomObjectKey(FAILURE_MESSAGES)].text;
    return { text: randomFailureText, title: randomFailureTitle };
  };

  useEffect(() => {
    const { text, title } = generateFailureMessage();
    setFailureMessage({ text, title });
  }, []);

  return failureMessage;
};
