import React from 'react';
import {
  Container,
  Heading,
  Flex,
  Text,
  Stack,
  HStack,
  Avatar,
  useColorModeValue
} from '@chakra-ui/react';

const reviewData =  [
    {
      avatarSrc: 'https://example.com/avatar1.jpg',
      review: `This Thai restaurant exceeded my expectations! The food was incredibly flavorful and authentic. I particularly enjoyed the pad thai and green curry. The ambiance was lovely, and the staff were friendly and attentive.`,
      stars: 5,
      userName: 'Jane',
      dateTime: '3 weeks ago'
    },
    {
      avatarSrc: 'https://example.com/avatar2.jpg',
      review: `Had a great experience dining at this Thai restaurant. The tom yum soup was absolutely delicious, and the mango sticky rice for dessert was a perfect ending to the meal. Will definitely be coming back soon!`,
      stars: 4,
      userName: 'John',
      dateTime: '1 month ago'
    },
    {
      avatarSrc: '',
      review: `The food here was decent, but nothing extraordinary. I found it a bit lacking in flavor compared to other Thai restaurants I've been to. However, the service was good, and the ambiance was pleasant.`,
      stars: 3,
      userName: 'Alex',
      dateTime: '2 months ago'
    },
    {
      avatarSrc: 'https://example.com/avatar4.jpg',
      review: `Unfortunately, I had a disappointing experience at this Thai restaurant. The pad see ew was too greasy, and the green curry lacked depth of flavor. The service was slow, and the staff seemed overwhelmed.`,
      stars: 2,
      userName: 'Emily',
      dateTime: '3 months ago'
    },
    {
      avatarSrc: 'https://example.com/avatar5.jpg',
      review: `The food at this Thai restaurant was terrible. It tasted bland and uninspired. I regretted spending my money here.`,
      stars: 1,
      userName: 'David',
      dateTime: '4 months ago'
    }
  ];
  

const Review = () => {
  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <Flex justifyContent="center">
        <Heading as="h3" size="lg" fontWeight="bold" textAlign="left" mb={{ base: '4', md: '2' }}>
          Recent Reviews
        </Heading>
      </Flex>
      <Stack direction="column" spacing={5} my={4}>
        {reviewData.map((review, index) => {
          return (
            <Stack key={index} direction="column" maxW="2xl">
              <HStack spacing={3}>
                <Avatar size="md" name={review.userName} src={review.avatarSrc} />
                <Flex direction="column">
                  <Text fontWeight="bold" fontSize="md">
                    {review.userName}
                  </Text>
                  <Text fontWeight="light" fontSize="xs">
                    {review.dateTime}
                  </Text>
                </Flex>
              </HStack>
              <Flex my={3} alignItems="center" justifyContent="start">
                {Array.from(Array(review.stars).keys()).map((id) => {
                  return <Star key={id} fillColor="#EACA4E" />;
                })}
                {Array.from(Array(5 - review.stars).keys()).map((id) => {
                  return <Star key={id} fillColor="#e2e8f0" />;
                })}
              </Flex>
              <Text
                color={useColorModeValue('gray.700', 'gray.400')}
                fontSize="0.87rem"
                textAlign="left"
                lineHeight="1.375"
                fontWeight="300"
              >
                {review.review}
              </Text>
            </Stack>
          );
        })}
      </Stack>
    </Container>
  );
};

const Star = ({ fillColor }) => {
  return (
    <svg
      style={{
        width: '1rem',
        height: '1rem',
        fill: fillColor,
        marginRight: '0.25rem'
      }}
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
    </svg>
  );
};

export default Review;
