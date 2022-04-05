import { useState, useEffect } from 'react';
import tw, { styled, theme } from 'twin.macro';
import data from './cardsData';
import useMobile from '../../hooks/use-mobile';
import { css } from 'styled-components';
import { motion } from 'framer-motion';
import wrapper from '../../animations/wrapper';

const Statistics = () => {
  const [cardsData, setCardsData] = useState([]);
  const isMobile = useMobile();

  useEffect(() => setCardsData(data), [data]);

  return (
    <Wrapper
      variants={wrapper}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: 0.8, once: true }}
      isMobile={isMobile}>
      <Header>
        <Heading>Advanced Statistics</Heading>
        <Desc>
          Track how your links are performing across the web with our advanced statistics dashboard.
        </Desc>
      </Header>
      <Cards>
        <CardLine />
        {cardsData.length > 0 &&
          cardsData.map(cardData => (
            <Card key={cardData.id} position={cardData.position}>
              <CardImage>
                <Image src={cardData.image} />
              </CardImage>
              <CardTitle>{cardData.title}</CardTitle>
              <CardDesc>{cardData.description}</CardDesc>
            </Card>
          ))}
      </Cards>
    </Wrapper>
  );
};

const Header = tw.header`text-center pb-md`;

const Heading = tw.h2`text-dark-blue font-extrabold`;

const Desc = tw.p`text-grayish-violet max-w-[30rem] my-4 mx-auto`;

const Cards = styled(motion.div)`
  ${tw`flex justify-between items-center relative gap-md`}
  @media (max-width: ${theme`screens.xlg.max`}) and (min-width: ${theme`screens.mob.max`}) {
    margin: calc(${theme`spacing.lg`} * 2) 0;
  }
`;

const Card = styled.div`
  ${tw`relative bg-white max-w-sm h-auto rounded-sm py-0 px-card-p  lg:(px-sm) sm:(px-card-p)`};
  align-self: ${({ position }) => position};
`;

const CardLine = tw.div`bg-cyan w-full absolute z-0 top-1/2 h-[10px]`;

const CardImage = styled.div`
  ${tw`w-20 h-20 bg-dark-violet rounded-full absolute top-[-2.5rem]`}
  box-shadow: 0px 5px 18px -10px rgba(0, 0, 0, 1);
`;

const Image = tw.img`my-4 mx-auto`;

const CardTitle = tw.h4`pt-16 text-dark-blue `;

const CardDesc = tw.p`my-6 mx-0 font-thin text-grayish-violet break-words`;

const Wrapper = styled(motion.div)`
  background: ${theme`colors.gray`};
  padding: ${theme`spacing.xlg`} ${theme`spacing.pg`};

  ${({ isMobile }) => {
    if (isMobile) {
      return css`
        ${tw`py-md px-pg`}
        ${Cards} {
          ${tw`flex-col`}
          & ${Card} {
            ${tw`items-center text-center self-center`}
            ${CardImage} {
              left: calc(50% - 2.5rem);
            }
            &:not(:last-child) {
              ${tw`mb-8`}
            }
          }
          & ${CardLine} {
            ${tw`w-[10px] h-full top-0`}
          }
        }
      `;
    } else {
      return css`
        ${Cards} {
          ${tw`h-[22.5rem]`}
        }
      `;
    }
  }};
`;

export default Statistics;
