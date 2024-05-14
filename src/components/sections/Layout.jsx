import { Avatar, Box, Flex, Grid, IconButton, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Admin } from 'src/contexts/AdminContext';
import { AddIcon } from '@chakra-ui/icons';

const Layout = ({ children }) => {
  const { user, signIn, signOut } = useContext(Admin);
  const { photoURL } = user || {};
  const { route, push } = useRouter();

  const getRightOption = (r) => {
    if (r.includes('login')) {
      return (
        <Avatar
          ml={'auto'}
          size='xs'
          src={photoURL}
          onClick={user ? signOut : signIn}
          cursor={'pointer'}
        />
      );
    } else if (user && !r.includes('new')) {
      return (
        <IconButton
          variant='link'
          onClick={() => push('/admin/new')}
          icon={<AddIcon color={'black'} />}
          justifySelf={'flex-end'}
        />
      );
    } else if (user && r.includes('new')) {
      return (
        <Avatar
          ml={'auto'}
          size='xs'
          src={photoURL}
          onClick={user ? signOut : signIn}
          cursor={'pointer'}
        />
      );
    } else {
      return undefined;
    }
  };

  return (
    <Box>
      <Grid
        templateColumns={'1fr 2fr 1fr'}
        as={'header'}
        position={'sticky'}
        width={'100%'}
        zIndex={'sticky'}
        top={0}
        p={3}
      >
        <Box />
        <Box mx={'auto'}>
          <NextLink href={'/'} passHref>
            <Link
              as={'span'}
              textTransform={'uppercase'}
              fontFamily={'Poppins'}
              fontWeight={'bold'}
              textDecoration={'none'}
              letterSpacing={'0.05rem'}
              _hover={{
                textDecoration: 'none',
              }}
            >
              MerraMarie
            </Link>
          </NextLink>
        </Box>
        {getRightOption(route)}
      </Grid>
      <Flex direction={'column'} m={3}>
        {children}
      </Flex>
    </Box>
  );
};

export default Layout;
