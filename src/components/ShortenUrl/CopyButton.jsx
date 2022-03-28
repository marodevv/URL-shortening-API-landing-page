import tw, { theme, styled } from 'twin.macro';
import { useState } from 'react';
import Button from '../shared/Button';

const CopyButton = ({ shortenedUrl }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <StyledCopyButton
      isCopied={isCopied}
      onClick={() => {
        if (!isCopied) {
          setIsCopied(true);
          navigator.clipboard.writeText(shortenedUrl);
        }
      }}>
      {isCopied ? 'Copied!' : 'Copy'}
    </StyledCopyButton>
  );
};

const StyledCopyButton = styled(Button).attrs({ isLarge: false })`
  background: ${props => (props.isCopied ? theme`colors.dark-violet` : theme`colors.cyan`)};
  ${tw`rounded-sm`}

  @media (max-width: ${theme`screens.mob.max`}) {
    margin: 0 auto;
    width: calc(100% - ${theme`spacing.pg`});
  }
`;

export default CopyButton;
