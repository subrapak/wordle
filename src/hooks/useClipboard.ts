export const useClipboard = (copySucessMessage = "Text copied!") => {
  const copyTextToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(text);
      alert(copySucessMessage);
      return;
    } else {
      alert("Your browser doesn't support copy/paste. Rip.");
      return;
    }
  };
  return [copyTextToClipboard] as const;
};
