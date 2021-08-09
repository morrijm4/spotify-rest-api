import React from 'react';
import { Image, Box, Heading, Flex, Text, Center } from '@chakra-ui/react';

const PlaylistCard = props => {
  return (
    <Flex
      m="auto"
      my={6}
      w="800px"
      maxW="800px"
      maxH="182px"
      bgColor="gray"
      p={4}
      borderRadius={10}
    >
      <Image boxSize="150px" src={props.image} />
      <Box m="auto">
        <Heading>{props.name}</Heading>
        <Text>Popularity: {props.popularity}</Text>
      </Box>
    </Flex>
  );
};

export default PlaylistCard;
