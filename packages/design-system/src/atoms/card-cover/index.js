import AspectRatioContainer from 'atoms/aspect-ratio-container';
import CardCoverContainer from 'atoms/card-cover/styles';
import classNames from 'classnames';
import Image from 'atoms/image';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import theme from 'atoms/card-cover/theme';
import useCardContext from 'molecules/card/use-card-context';

function CardCover({
  src,
  width,
  height,
  alt,
  placeholder,
  className,
  size='xl',
  ratio='2/1'
}) {
  const { mode, variant } = useCardContext();
  const variantTheme = useMemo(() => theme[mode][variant], [ mode, variant ]);
  const classes = classNames(
    className,
    'border-top-left-radius',
    'border-top-right-radius',
    'overflow-hidden',
  );

  return (
    <CardCoverContainer
      theme={variantTheme}
      className={classes}
    >
      <AspectRatioContainer
        ratio={ratio}
        size={size}
      >
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

CardCover.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  ratio: PropTypes.string,
  placeholder: PropTypes.shape({
    color: PropTypes.string,
    dataURL : PropTypes.string,
    URL : PropTypes.string,
  })
};

CardCover.displayName = 'Card.Cover';

export default CardCover;
