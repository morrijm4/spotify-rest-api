import { Box } from '@chakra-ui/react';
import React from 'react';

export const Wrapper = ({ children, varient = 'regular' }) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={
        varient === 'regular'
          ? '800px'
          : varient === 'small'
          ? '400px'
          : '1200px'
      }
      w="100%"
    >
      {children}
    </Box>
  );
};
