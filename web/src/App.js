import { Box, ChakraProvider, Grid, IdProvider, theme } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Playlist from './components/Playlist';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="80vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Playlist />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
