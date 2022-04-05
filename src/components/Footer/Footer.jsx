import tw, { styled, theme } from 'twin.macro';
import Button from '../shared/Button';
import { FaFacebookSquare, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import useMobile from '../../hooks/use-mobile';
import { css } from 'styled-components';
import { motion } from 'framer-motion';
import wrapper from '../../animations/wrapper';

const Footer = () => {
  const isMobile = useMobile();

  return (
    <Wrapper
      variants={wrapper}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: 0.8, once: true }}
      isMobile={isMobile}>
      <Img />
      <LinksContainer>
        <Row>
          <LinkHead>Features</LinkHead>
          <Link>Link Shortening</Link>
          <Link>Branded Links</Link>
          <Link>Analytics</Link>
        </Row>
        <Row>
          <LinkHead>Resources</LinkHead>
          <Link>Blog</Link>
          <Link>Developers</Link>
          <Link>Support</Link>
        </Row>
        <Row>
          <LinkHead>Company</LinkHead>
          <Link>About</Link>
          <Link>Our Team</Link>
          <Link>Careers</Link>
          <Link>Contact</Link>
        </Row>
      </LinksContainer>
      <Social>
        <FaFacebookSquare />
        <FaTwitter />
        <FaPinterest />
        <FaInstagram />
      </Social>
    </Wrapper>
  );
};

const Img = styled.img.attrs({
  src: '../../assets/images/logo-2.svg',
})``;

const LinksContainer = styled.div`
  ${tw`flex justify-between items-start gap-lg`}
  margin-left: calc(${theme`spacing.pg`} * 1.5);
`;

const Row = styled.ul`
  ${tw`text-grayish-violet`}
  & > * {
    ${tw`mb-2`}
    &:last-child {
      ${tw`mb-0`}
    }
    &:first-child {
      ${tw`mb-4`}
    }
  }
`;

const LinkHead = tw.li`text-gray font-extrabold`;

const Link = tw.li`cursor-pointer hover:text-cyan`;

const Social = styled.div`
  ${tw`flex justify-center items-center gap-4`}
  & > svg {
    ${tw`text-xl cursor-pointer text-white hover:text-cyan`}
  }
`;

const Wrapper = styled(motion.footer)`
  ${tw`flex justify-between items-start gap-sm bg-very-dark-violet px-pg py-lg`}
  ${({ isMobile }) => {
    if (isMobile) {
      return css`
        ${tw`flex-col items-center text-center gap-md`}
        & ${LinksContainer} {
          ${tw`flex-col gap-sm items-center m-0`}
        }
      `;
    }
  }};

  @media (max-width: ${theme`screens.xlg.max`}) and (min-width: ${theme`screens.mob.max`}) {
    ${LinksContainer} {
      margin-left: calc(${theme`spacing.pg`} * 0.9);
      ${tw`gap-md`}
    }
    ${Social} {
      ${tw`flex-col`}
      flex-direction: column;
    }
  }
`;

export default Footer;
