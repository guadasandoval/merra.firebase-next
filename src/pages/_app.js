import React, { Fragment, useEffect } from 'react';
import '@fontsource/poppins';
import '@fontsource/open-sans';
import { useRouter } from 'next/router';
import {
  Center,
  ChakraProvider,
  CSSReset,
  Img,
  keyframes,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AdminContext from '../contexts/AdminContext';
import theme from '../theme';
import { useBoolean } from '@chakra-ui/react';
import Layout from 'src/components/sections/Layout';
import HomeLayout from 'src/components/sections/HomeLayout';
import '../styles/fonts.css';

const heartKeyFrames = keyframes`
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
`;

const animation = `${heartKeyFrames}  1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1)`;

function MyApp({ Component, pageProps }) {
  const [loading, { on, off }] = useBoolean(false);
  const router = useRouter();
  const isHome = router.pathname === '/';

  useEffect(() => {
    const handleStart = on;
    const handleStop = off;

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  const LayoutComp = !isHome ? Layout : Fragment;

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <AdminContext>
        {loading ? (
          <Center w={'100vw'} h={'100vh'} background='brand.25'>
            <Img
              src='/heart.svg'
              w={'20%'}
              as={motion.img}
              animation={animation}
            />
          </Center>
        ) : (
          <LayoutComp>
            <Component {...pageProps} />
          </LayoutComp>
        )}
      </AdminContext>
    </ChakraProvider>
  );
}

export default MyApp;
