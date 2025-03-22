import React, { forwardRef } from 'react';
import { Heading } from '@chakra-ui/react';
import { useTheme } from '@chakra-ui/react';

const Title = forwardRef(function Title({ children, color, ...rest }, ref) {
  const {
    colors: {
      brand: { 'black': brand },
    },
  } = useTheme();
  return (
    <Heading
      ref={ref}
      fontSize={{ base: "36px", lg: "64px" }}
      fontWeight={'bold'}
      textTransform={'capitalize'}
      letterSpacing={1}
      //lineHeight={'80%'}
      color={color || brand}
      {...rest}
      marginTop={{ base: "0px", mdlg: "56px" }}
    >
      {children}
    </Heading>
  );
});

export default Title;
