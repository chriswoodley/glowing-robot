import AspectRatioContainer from 'atoms/aspect-ratio-container';
import Image from 'atoms/image';
import { clsx } from 'clsx';

// TODO: should this component live in molecules instead of atoms? It is a bit
// more complex than a typical atom, but it is also very specific to the
// card component. Maybe it should be a subcomponent of the card
// component instead?
function CardCover({
  src,
  width,
  height,
  alt,
  placeholder,
  className,
  size = 'xl',
  ratio = '2/1',
}) {
  // TODO: needs to use design tokens in a custom css class
  const classes = clsx(
    className,
    'border-top-left-radius',
    'border-top-right-radius',
    'overflow-hidden'
  );

  return (
    <div className={classes}>
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
    </div>
  );
}

CardCover.displayName = 'Card.Cover';

export default CardCover;
