import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { ActionFunction, Form, redirect } from "react-router-dom";

const Create = () => {
  return (
    <Box maxW="480px">
      <Form action="/create" method="post">
        <FormControl isRequired mb="40px">
          <FormLabel>Task name:</FormLabel>
          <Input name="title" type="text" />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>
        <FormControl mb="30px">
          <FormLabel>Task description:</FormLabel>
          <Textarea
            name="description"
            placeholder="Enter a detailed description for the task..."
          />
        </FormControl>
        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" colorScheme="purple" />
          <FormLabel ml="10px" mb="0px">
            Make this task a priority
          </FormLabel>
        </FormControl>
        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
};

export const createAction: ActionFunction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log(task);
  return redirect("/");
};

export default Create;
