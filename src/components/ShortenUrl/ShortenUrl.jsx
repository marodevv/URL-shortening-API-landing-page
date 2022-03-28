import tw, { styled, theme } from 'twin.macro';
import Button from '../shared/Button';
import { useState, useEffect, useRef } from 'react';
import validator from 'validator';
import CopyButton from './CopyButton';
import useMobile from '../../hooks/use-mobile';
import useNonInitialEffect from '../../hooks/use-non-initial-effect';
import useAxios from '../../hooks/use-axios';
import axios from '../../api/urlShortener'; // Axios Instance

const ShortenUrlComp = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [data, setData] = useState([]);
  const [focus, setFocus] = useState(true);
  const isMobile = useMobile();
  const inputRef = useRef(null);

  const { id, originalUrl, shortenedUrl, error, isLoading, refetch } = useAxios({
    axiosInstance: axios,
    method: 'GET',
  });

  useEffect(() => inputRef.current.focus(), [focus]);

  useNonInitialEffect(() => {
    setData(prev => [...prev, { id, originalUrl, shortenedUrl, error, isLoading }]);
  }, [id]);

  const validate = value => {
    if (validator.isURL(value)) {
      setIsValid(true);
      refetch(value);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    validate(inputRef.current.value);
    setValue('');
    setFocus(!focus);
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <Content isMobile={isMobile}>
        <ShortenUrl isMobile={isMobile}>
          <ShortenInput
            isMobile={isMobile}
            isValid={isValid}
            onChange={handleChange}
            value={value}
            ref={inputRef}
          />
          <ShortenButton isMobile={isMobile} onClick={handleSubmit}>
            Shorten it!
          </ShortenButton>
          {!isValid && <Error isMobile={isMobile}>Please add a link</Error>}
        </ShortenUrl>
        <Links>
          {data.map(urlData => (
            <Shortened key={urlData.id}>
              <Link>{urlData.originalUrl}</Link>
              <Link shortened>
                {urlData.isLoading
                  ? 'Loading..'
                  : !urlData.isLoading
                  ? urlData.shortenedUrl
                  : urlData.error}
              </Link>
              <CopyButton shortenedUrl={urlData.shortenedUrl} isMobile={isMobile} />
            </Shortened>
          ))}
        </Links>
      </Content>
    </Container>
  );
};

const Content = styled.div.attrs(props => ({
  dims: [
    theme`fontSize.default`,
    props.isMobile ? theme`spacing.md` : '3rem',
    props.isMobile ? '0.875rem' : '0rem',
    props.isMobile ? '1.25rem' : '0rem',
  ],
}))`
  transform: translateY(
    calc(
      -1 * calc(calc(calc(${props => props.dims[0]} * 2) + ${props => props.dims[1]}) +
            calc(${props => props.dims[2]} + ${props => props.dims[3]}))
    )
  );
`;

const ShortenUrl = styled.form`
  width: calc(100% - ${theme`spacing.pg`} * 2);
  ${tw`bg-cover bg-center bg-dark-violet my-0 mx-auto rounded-sm flex justify-center items-center gap-sm relative`}
  ${({ isMobile }) =>
    isMobile
      ? `background-image: url('../../assets/images/bg-shorten-mobile.svg')`
      : `background-image: url('../../assets/images/bg-shorten-desktop.svg')`};
  padding: ${({ isMobile }) => (isMobile ? theme`spacing.md` : '3rem')};
`;

const ShortenInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Shorten a link here..',
})`
  ${tw`w-full bg-white p-btn-p-lg rounded-sm transition-none outline-none`}
  ${props => (props.isMobile ? props.isValid || `margin-bottom: 1rem;` : null)};
  ${props => props.isValid || 'border: 2px solid red;'}
`;

const ShortenButton = styled(Button).attrs({ isLarge: true })`
  ${({ isMobile }) => isMobile && `width: 100%;`}
  ${tw`rounded-sm`}
`;

const Error = styled.p`
  ${tw`text-red absolute left-12 text-[.8rem] italic`}
  top: ${({ isMobile }) => (isMobile ? '6rem' : '7rem')};
`;

const Links = tw.ul`flex flex-col px-pg py-sm gap-sm`;

const Link = styled.p`
  color: ${({ shortened }) => (shortened ? theme`colors.cyan` : theme`colors.very-dark-violet`)};
`;

const Shortened = styled.li`
  ${tw`bg-white flex justify-between items-center px-6 py-4 gap-md rounded-sm `}
  ${Link}:nth-last-child(2) {
    margin-left: auto;
  }
`;

const Container = styled.div`
  //! Couldn't use tailwind tw classes in background gray cuz it converts to hsla instead of hsl (browser support problem)
  ${tw`mt-lg`}
  background: ${theme`colors.gray`};

  @media (max-width: ${theme`screens.mob.max`}) {
    ${ShortenUrl} {
      ${tw`flex-col`}
    }

    ${Shortened} {
      ${tw`py-4 flex-col items-start`}
      gap: calc(${theme`spacing.sm`} / 2);
      ${Link} {
        padding-left: calc(${theme`spacing.pg`} / 2);
      }
      ${Link}:nth-last-child(2) {
        ${tw`w-full pt-[.8rem] `}
        border-top: 1px solid ${theme`colors.grayish-violet`};
      }
    }
  }
`;

export default ShortenUrlComp;
