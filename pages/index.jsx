import { Container, Box, Heading } from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Helloo, &*&;m I am a full-stack developer based in Philippines
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            JAMES DARYL BERTIZ
          </Heading>
          <p>Digital Technology Enthusiast (Engineer/Developer/Designer)</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
