import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  StackDivider,
  Text,
  Switch,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { addTodo, updateTodo, deleteTodo } from "./redux/todo/index.js";
const App = () => {
  const dispatch = useDispatch();
  const todosData = useSelector((state) => state.todo.todos);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const itemAdded = useToast();
  const newTodo = () => {
    if (title.trim().length === 0 || body.trim().length === 0) {
      return;
    } else {
      dispatch(addTodo({ id: Date.now(), title, body, completed: false }));
    }
  };

  const itemDelete = useToast();
  return (
    <>
      <Container maxW="1000px">
        <Card my="7">
          <CardHeader>
            <Heading size="md">Add task:</Heading>
          </CardHeader>
          <CardBody>
            <FormControl>
              <Stack divider={<StackDivider />} spacing="8">
                <Box>
                  <FormLabel>Enter Task Title </FormLabel>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="Task title..."
                  />
                </Box>
                <Box>
                  <FormLabel>Enter Task Body </FormLabel>
                  <Textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    type="text"
                    placeholder="Task body..."
                  />
                </Box>
                <Button
                  onClick={() =>{
                    newTodo()
                    itemAdded({
                      title: "Muvaffaqiyatli qo'shildi",
                      description: `Qo'shildi!`,
                      status: "success",
                      duration: 1000,
                      isClosable: true,
                    })
                  }}
                  colorScheme="teal"
                  type="submit"
                >
                  Add new task
                </Button>
              </Stack>
              <FormHelperText></FormHelperText>
            </FormControl>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Tasks:</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              {todosData.length &&
                todosData.map((item) => (
                  <Box key={item.id}>
                    <HStack
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Heading
                          size="xs"
                          textDecoration={
                            item.completed ? "line-through" : "none"
                          }
                          textTransform="uppercase"
                        >
                          {item?.title}
                        </Heading>
                        <Text
                          pt="2"
                          fontSize="sm"
                          textDecoration={
                            item.completed ? "line-through" : "none"
                          }
                        >
                          {item?.body}
                        </Text>
                      </Box>
                      <Box display="flex" gap="10" alignItems="center">
                        <Switch
                          onChange={() => dispatch(updateTodo(item.id))}
                          isChecked={item.completed}
                          size="md"
                        />
                        <Button
                          leftIcon={<DeleteIcon />}
                          onClick={() => {
                            dispatch(deleteTodo(item.id));
                            itemDelete({
                              title: "Muvaffaqiyatli o'chirildi.",
                              description: `${item.title} O'chirildi!`,
                              status: "error",
                              duration: 1000,
                              isClosable: true,
                            });
                          }}
                          colorScheme="red"
                        >
                          Delete
                        </Button>
                      </Box>
                    </HStack>
                  </Box>
                ))}
            </Stack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};
export default App;
