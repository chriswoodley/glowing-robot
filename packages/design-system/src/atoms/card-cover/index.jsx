import AspectRatioContainer from "atoms/aspect-ratio-container";
import CardCoverContainer from "atoms/card-cover/styles";
import classNames from "classnames";
import Image from "atoms/image";
import React, { useMemo } from "react";
import theme from "atoms/card-cover/theme";
import useCardContext from "molecules/card/use-card-context";

function CardCover({
  src,
  width,
  height,
  alt,
  placeholder,
  className,
  size = "xl",
  ratio = "2/1",
}) {
  const { mode, variant } = useCardContext();
  const variantTheme = useMemo(() => theme[mode][variant], [mode, variant]);
  const classes = classNames(
    className,
    "border-top-left-radius",
    "border-top-right-radius",
    "overflow-hidden"
  );

  return (
    <CardCoverContainer theme={variantTheme} className={classes}>
      <AspectRatioContainer ratio={ratio} size={size}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          placeholder={placeholder}
          fill
        />
      </AspectRatioContainer>
    </CardCoverContainer>
  );
}

CardCover.displayName = "Card.Cover";

export default CardCover;
