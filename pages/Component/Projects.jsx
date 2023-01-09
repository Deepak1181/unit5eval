import { Box, Flex, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineFolderOpen, AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
const Pages = ({data2}) => {

  return (
    <>
      <HStack
        w={400}
        display={"flex"}
        shadow={"md"}
        alignItems="flex-end"
        p="6"
      >
        <VStack align={"left"}>
          <HStack>
            <AiOutlineFolderOpen size={"24"} />
            <Text> {data2.name}</Text>
          </HStack>
          <Box>
            <Text>{data2.description}</Text>
          </Box>
          <HStack>
            <HStack>
              <AiOutlineStar size={"24"} />
              <Box>{data2.stargazers_count}</Box>
            </HStack>
            <HStack>
              <BiGitRepoForked size={"24"}  />
              <Box>{data2.forks}</Box>
            </HStack>
          </HStack>
        </VStack>
        <Spacer />
        <VStack h={"full"} w="200" align={"bottom"}>
          <Flex h={"100%"} align={"botton"}>
            <HStack>
              <BsDot size={"40"} />
              <Box>{data2.language}</Box>
            </HStack>
          </Flex>
        </VStack>
      </HStack>
    </>
  );
};

export default Pages;


// import React from 'react'

// const Pages = () => {
//   return (
//     <div>Projects</div>
//   )
// }

// export default Pages