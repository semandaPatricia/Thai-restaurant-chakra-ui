import { Stack, HStack, Link, Divider, Image, IconButton } from '@chakra-ui/react';
import {  FaFacebook, FaInstagram,  FaTiktok, } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
const links = ['Delivery', 'Where are we?', 'Careers', 'menu', 'Terms of use', 'Privacy policy'];
const accounts = [
  {
    url: 'https://tiktok.com',
    label: 'Tiktok Account',
    type: 'gray',
    icon: <FaTiktok />
  },
  {
    url: 'https://twitter.com',
    label: 'Twitter Account',
    type: 'twitter',
    icon: <BsTwitterX />
  },
  {
    url: 'https://instagram.com',
    label: 'Instagram Account',
    type: 'instagram',
    icon: <GrInstagram/>
  }
];

const Footer = () => {
  return (
    <Stack
      maxW="5xl"
      marginInline="auto"
      p={8}
      spacing={{ base: 8, md: 0 }}
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: 'column', md: 'row' }}
      
    >
      <Link href="https://kart.com" isExternal>
        <Image w="100px" src="/thailogo.png" alt="Tom tom logo" />
      </Link>

      {/* Desktop Screen */}
      <HStack spacing={4} alignItems="center" d={{ base: 'none', md: 'flex' }}>
        {links.map((link, index) => (
          <CustomLink key={index}>{link}</CustomLink>
        ))}
      </HStack>

      {/* Mobile and Tablet Screens 
     <Stack d={{ base: 'flex', md: 'none' }} alignItems="center">
        <HStack alignItems="center">
          <CustomLink>Sign up</CustomLink>
          <Divider h="1rem" orientation="vertical" />
          <CustomLink>Blog</CustomLink>
          <Divider h="1rem" orientation="vertical" />
          <CustomLink>Career</CustomLink>
        </HStack>
        <HStack alignItems="center">
          <CustomLink>Documentation</CustomLink>
          <Divider h="1rem" orientation="vertical" />
          <CustomLink>Terms of use</CustomLink>
        </HStack>
        <CustomLink>Privacy policy</CustomLink>
      </Stack>
      */}

      <Stack direction="row" spacing={5} pt={{ base: 4, md: 0 }} alignItems="center">
        {accounts.map((sc, index) => (
          <IconButton
            key={index}
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            colorScheme={sc.type}
            icon={sc.icon}
        
          />
        ))}
      </Stack>
    </Stack>
  );
};

const CustomLink = ({ children, ...props }) => {
  return (
    <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
      {children}
    </Link>
  );
};

export default Footer;
