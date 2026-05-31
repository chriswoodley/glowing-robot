import { useVerticalRhythmUnit } from 'hooks/use-vertical-rhythm-unit';
import { useMaxHeight } from 'hooks/use-max-height';
import colors from 'styles/utils/color/_export.module.scss';
import styles from './styles.module.css';
import { clsx } from 'clsx';

function AspectRatioContainer({
  className,
  style,
  size,
  children,
  ratio = '1/1',
}) {
  const unit = useVerticalRhythmUnit();
  const maxHeight = useMaxHeight({ unit, size });

  return (
    <div
      style={{
        ...style,
        '--aspect-ratio': ratio,
        ...(maxHeight ? { '--max-height': maxHeight } : {}),
        '--bg-color': colors['gray-100'], // TODO: replace with design token in css file
      }}
      className={clsx(styles['aspect-ratio-container'], className)}
      {...(maxHeight ? { 'data-max-height': maxHeight } : {})}
      data-ratio={ratio}
    >
      {children}
    </div>
  );
}

export { AspectRatioContainer };
