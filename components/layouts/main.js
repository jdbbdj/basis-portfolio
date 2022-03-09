import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Navbar from '../navbar';
import VoxelDog from '../voxel-dog';
import NoSsr from './no-ssr';
import dynamic from 'next/dynamic';
import VoxelDogLoader from '../voxel-dog-loader';
const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
});
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>James Daryl Bertiz - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg.md" pt={14}>
        <LazyVoxelDog />

        {children}
      </Container>
    </Box>
  );
};

export default Main;
