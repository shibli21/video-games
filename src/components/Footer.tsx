import { Box, Flex, FlexProps, Grid, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const hover = {
  transform: "scale(1.2)",
  transitionDuration: ".2s",
};

export const Footer = (props: FlexProps) => (
  <Flex
    borderTop="1px solid"
    mt={20}
    as="footer"
    flexDir="column"
    justify="center"
    align="center"
    py="4rem"
    {...props}
  >
    <Text textAlign="center" fontSize="sm">
      Designed & developed by Syed Shibli Mahmud
    </Text>
    <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gap="10px" pt={4}>
      <Link href="https://github.com/shibli21" isExternal aria-label="Github">
        <Box _hover={hover} as={FaGithub} size="18px" />
      </Link>
      <Link href="https://twitter.com/shibli21" isExternal aria-label="Twitter">
        <Box _hover={hover} size="18px" as={FaTwitter} />
      </Link>
      <Link
        href="https://twitter.com/shibli21"
        isExternal
        aria-label="Instagram"
      >
        <Box _hover={hover} size="18px" as={FaInstagram} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/syed-shibli-mahmud-0bb357163/"
        isExternal
        aria-label="Linkedin"
      >
        <Box _hover={hover} as={FaLinkedin} size="18px" />
      </Link>
    </Grid>
  </Flex>
);
