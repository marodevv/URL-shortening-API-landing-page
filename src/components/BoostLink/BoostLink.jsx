import tw, { styled, theme } from 'twin.macro';
import Button from '../shared/Button';
import useMobile from '../../hooks/use-mobile';
import { motion } from 'framer-motion';
import wrapper from '../../animations/wrapper';

const BoostLink = () => {
  const isMobile = useMobile();

  return (
    <Wrapper
      variants={wrapper}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: 0.8, once: true }}
      isMobile={isMobile}>
      <Heading>Boost link today</Heading>
      <BoostLinkButton>Get Started</BoostLinkButton>
    </Wrapper>
  );
};

const Heading = tw.h2`text-white font-extrabold mb-4`;

const BoostLinkButton = styled(Button).attrs({ isLarge: true })``;

const Wrapper = styled(motion.div)`
  ${tw`bg-dark-violet bg-cover bg-center text-center py-lg`}
  background-color: ${theme`colors.dark-violet`};
  ${({ isMobile }) =>
    isMobile
      ? `background-image: url('/assets/images/bg-boost-mobile.svg')`
      : `background-image: url('/assets/images/bg-boost-desktop.svg')`};
`;

export default BoostLink;
