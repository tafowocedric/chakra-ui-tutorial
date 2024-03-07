import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

const Navbar = () => {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "logged out",
      description: "Successfully logged out",
      duration: 3000,
      isClosable: true,
      status: "success",
      position: "top",
    });
  };

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar name="Mario" src="/img/mario.png">
          <AvatarBadge w="1.3em" bgColor="teal.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple" onClick={showToast}>
          logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
