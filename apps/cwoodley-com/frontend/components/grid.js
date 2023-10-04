'use client';

import { styleVariables } from '@cw/design-system';
import styled from 'styled-components';

const {
  root: {
    breakpoints
  }
} = styleVariables;

const Grid = styled.div`
  display: grid;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (min-width: ${breakpoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Grid;
