import { useContext } from "react";
import { AmplitudeContext } from "./amplitude-context-provider";

const useAmplitudeContext = () => {
  const context = useContext(AmplitudeContext);
  if (context === undefined)
    throw new Error(
      "useAmplitudeContext must be used within a AmplitudeContextProvider",
    );
  return context;
};

export default useAmplitudeContext;
