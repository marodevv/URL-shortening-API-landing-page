import tw, { css, theme, styled } from 'twin.macro';

const Button = styled.button`
  border-radius: ${theme`borderRadius.lg`};
  ${({ isLarge }) => {
    if (isLarge) {
      return css({
        width: theme`spacing.btn.lg`,
        padding: theme`spacing.btn.p-lg`,
      });
    } else {
      return css({
        width: theme`spacing.btn.sm`,
        padding: theme`spacing.btn.p-sm`,
      });
    }
  }}

  ${tw`bg-cyan text-white font-bold hover:brightness-105`}
`;

export default Button;
