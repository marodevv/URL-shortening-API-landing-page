import useMobile from '../../hooks/use-mobile';
import Button from '../shared/Button';
import tw, { styled, theme } from 'twin.macro';
import { css } from 'styled-components';

const Hero = () => {
  const isMobile = useMobile();

  return (
    <Wrapper isMobile={isMobile}>
      <Content>
        <Heading>More than just shorter links</Heading>
        <Paragraph>
          Build your brand's recognition and get detailed insights on how your links are performing.
        </Paragraph>
        <HeroButton>Get Started</HeroButton>
      </Content>
      <Img />
    </Wrapper>
  );
};

const Content = tw.div``;

const Heading = tw.h1`text-dark-blue leading-[1.125] max-w-[40rem] min-w-[20rem] font-extrabold`;

const Paragraph = tw.p`text-grayish-violet max-w-[27.5rem] my-4 mx-0`;

const HeroButton = styled(Button).attrs({ isLarge: true })`
  ${tw`mt-md`}
`;

const Img = styled.img.attrs({
  src: '../../assets/images/illustration-working.svg',
})`
  ${tw`mr-[-5rem]`}
`;

const Wrapper = styled.section`
  ${tw`flex justify-between items-center py-lg pl-pg overflow-x-hidden mb-xlg`}

  ${({ isMobile }) => {
    if (isMobile) {
      return css`
        ${tw`pt-40 px-pg flex-col-reverse text-center`}
        ${Content} {
          ${Heading} {
            font-size: calc(${theme`fontSize.h1`} - 1rem);
          }
          ${Paragraph} {
            ${tw`mt-4 mx-auto`}
          }
        }
        ${Img} {
          ${tw`min-w-[30rem]`}
          margin: -3.5rem -12rem ${theme`spacing.md`} 0;
        }
      `;
    }
  }};
`;

export default Hero;
