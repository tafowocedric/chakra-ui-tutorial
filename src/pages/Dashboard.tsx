import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { LoaderFunction, useLoaderData } from "react-router-dom";

interface taskDTO {
  id: number;
  title: string;
  description: string;
  author: string;
  img: string;
}

const Dashboard = () => {
  const tasks: taskDTO[] = useLoaderData();

  return (
    <SimpleGrid spacing="10px" minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="purple.400"
            bgColor="white"
          >
            <CardHeader>
              <Flex alignItems="center" gap="10px">
                <Avatar src={task.img} />
                {/* <Spacer /> */}
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>
            <Divider borderColor="gray.200" />
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
};

export const tasksLoader: LoaderFunction = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
};

export default Dashboard;
