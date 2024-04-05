import React from "react";
import { Box, Link, Heading, Flex, Text, Button } from "@chakra-ui/react";
import { Container,Center } from "@chakra-ui/react";
import Carousel from "../../components/CarouselAbout";

const About = () => {
  return (
    <>
    <Box
      position="relative"
      bgImage="url('https://images.unsplash.com/photo-1516528387618-afa90b13e000?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      p={6}
    >
      <Container maxW="full" mt={0} centerContent overflow="hidden" >
        <Container padding="2" color="white" maxW="">
        <Center>
      <Heading color="yellow" fontSize='4xl'>Fresh.Hot.Healthy</Heading>
    </Center>
          <Text fontSize='2xl'>
          Tom Tom wokbar represents perfect harmony and versatility, because we
          believe that what we eat, is making a great impact on our day, our
          health and our life. This is why we cook with diversity, and this is
          why our food is healthy and still very delicious, quick, yet
          nutritious. We aim to go fresh, hot, spectacular, and authentic.
          Thanks to the gentle cooking method every meal prepared this way is
          rich in valuable nutrients and compatible with almost any type of
          diet. Thanks to the infinite flavour combinations, vegetarians, vegans
          and meat-lovers can all compile a varied menu from our offers.
          
          
          
          </Text>

        </Container>
       
      </Container>
      
    </Box>
    <Carousel/>
    </>
  );
};

export default About;
