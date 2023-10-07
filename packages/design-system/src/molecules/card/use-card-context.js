import { useContext } from "react";
import CardContext from "molecules/card/card-context";

function useCardContext() {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error(
      `Card compound components cannot be rendered outside the Card component`,
    );
  }

  return context;
}

export default useCardContext;
