import tw, { styled, theme } from 'twin.macro';
import { css } from 'styled-components';
import Button from '../shared/Button';
import { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import useMobile from '../../hooks/use-mobile';
import useScroll from '../../hooks/use-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();
  const { scrollX, scrollY, scrollDirection } = useScroll();

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <Wrapper isMobile={isMobile} scrollDirection={scrollDirection} isOpen={isOpen}>
      <Img />
      <Ul>
        <ListItem>
          <NavLink>Features</NavLink>
        </ListItem>
        <ListItem>
          <NavLink>Pricing</NavLink>
        </ListItem>
        <ListItem>
          <NavLink>Resources</NavLink>
        </ListItem>
        <ListItem>
          <NavLink>Login</NavLink>
        </ListItem>
        <NavButton isMobile={isMobile}>SignUp</NavButton>
      </Ul>
      {isMobile && <HiOutlineMenu style={{ cursor: 'pointer' }} onClick={handleOpen} />}
    </Wrapper>
  );
};

const NavLink = tw.a`font-semibold cursor-pointer text-grayish-violet hover:text-very-dark-violet`;

const Img = styled.img.attrs({
  src: '../assets/images/logo.svg',
})``;

const Ul = tw.ul`flex justify-between items-center gap-md flex-grow`;

const ListItem = styled.li`
  &:nth-last-child(2) {
    ${tw`ml-auto`}
  }
`;

const NavButton = styled(Button).attrs({ isLarge: false })`
  ${({ isMobile }) => isMobile && `width: 100%`}
`;

const Wrapper = styled.nav`
  ${tw`w-full bg-white px-pg py-md fixed top-0 left-0 flex justify-center items-center gap-md z-[999999999] shadow-[0px 5px 18px -18px rgba(0, 0, 0, 1)] transition-all duration-sm`}

  ${({ scrollDirection }) =>
    scrollDirection === 'down'
      ? `visibility: visible;`
      : `visibility: hidden;
      transform: translateY(-100%);`}

  ${({ isMobile }) => {
    if (isMobile) {
      return css`
        ${tw`justify-between`}
        ${Ul} {
          ${tw`absolute bg-dark-violet flex-col px-sm py-9 rounded-[.75rem] top-full left-pg right-pg gap-sm pointer-events-none opacity-0`}
          transform: skewY(2.5deg) translateY(-5%);
          ${({ isOpen }) =>
            isOpen &&
            `pointer-events: all;
      opacity: 1;
      transform: skewY(0) translateY(0);`}
        }
        ${NavLink} {
          ${tw`text-white hover:text-white`}
        }
        ${ListItem}:nth-last-child(2) {
          ${tw`w-full text-center ml-0 pt-[1rem] `}
          border-top: 1px solid ${theme`colors.grayish-violet`};
        }
      `;
    }
  }};
`;

export default Navbar;
