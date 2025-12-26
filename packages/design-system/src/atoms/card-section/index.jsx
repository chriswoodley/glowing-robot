import React, { useMemo } from "react";
import CardSectionContainer from "atoms/card-section/styles";
import useCardContext from "molecules/card/use-card-context";
import theme from "atoms/card-section/theme";
import classNames from "classnames";

function CardSection({ className, children }) {
  const { mode, variant } = useCardContext();
  const variantTheme = useMemo(() => theme[mode][variant], [mode, variant]);
  const classes = classNames(className, "p-2");

  return (
    <CardSectionContainer theme={variantTheme} className={classes}>
      {children}
    </CardSectionContainer>
  );
}

CardSection.displayName = "Card.Section";

export default CardSection;
