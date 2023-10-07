import { styled } from 'styled-components';

const CardContainer = styled.div`
  background-color: ${
    ({ theme, $mode, $variant }) => {
      return `${theme.card?.[$mode]?.[$variant]?.default?.backgroundColor}`;
    }
  };
  
  color: ${
    ({ theme, $mode, $variant }) => {
      return `${theme.card?.[$mode]?.[$variant]?.default?.color}`;
    }
  };

  ${({ onClick }) => {
    if (typeof onClick === 'function') {
      return `
        user-select: none;
      `;
    }
  }}
  
  ${({ $width }) => {
    if ($width) {
      return `
        width: ${$width};
      `;
    }
  }}
`;

export default CardContainer;
