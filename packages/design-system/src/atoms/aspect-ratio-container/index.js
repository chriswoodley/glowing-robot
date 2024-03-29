import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useVerticalRhythmUnit from 'hooks/use-vertical-rhythm-unit';
import useMaxHeight from 'hooks/use-max-height';
import colors from 'styles/utils/color/_export.scss';

const StyledAspectRatioContainer = styled.div`
  aspect-ratio: ${({ $ratio }) => $ratio};
  background-color: ${colors.gray100};
  max-height: ${({ $maxHeight }) => $maxHeight};
  overflow: hidden;
  position: relative;
`;

function AspectRatioContainer({
  className,
  style,
  size,
  children,
  ratio = '1/1'
}) {
  const unit = useVerticalRhythmUnit();
  const maxHeight = useMaxHeight({ unit, size });

  return (
    <StyledAspectRatioContainer
      style={style}
      className={className}
      $maxHeight={maxHeight}
      $ratio={ratio}
    >
      {children}
    </StyledAspectRatioContainer>
  );
}

AspectRatioContainer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  ratio: PropTypes.string,
  size: PropTypes.oneOf([ 'xs', 'sm', 'md', 'lg', 'xl' ]),
  variant: PropTypes.oneOf([ 'standard' ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default AspectRatioContainer;
