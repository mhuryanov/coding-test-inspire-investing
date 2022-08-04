import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

const Loading = (): JSX.Element => {
  return (
    <Flex
      width='100vw'
      height='100vh'
      justifyContent='center'
      alignItems='center'
    >
      <Spinner />
    </Flex>
  );
};

export default Loading;
