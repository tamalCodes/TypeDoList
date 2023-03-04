import { AddIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import useColumnDrop from '../hooks/useColumnDrop';
import useColumnTasks from '../hooks/useColumnTasks';
import { ColumnType } from '../utils/enums';
import Task from './Task';
import { useState } from 'react';
import InputModal from './InputModal';

const ColumnColorScheme: Record<ColumnType, string> = {
  Todo: 'gray',
  'In Progress': 'blue',
  Blocked: 'red',
  Completed: 'green',
};

function Column({ column, columntext }: { column: ColumnType, columntext: string }) {
  const [showModal, setshowModal] = useState(false);
  const {
    tasks,
    addEmptyTask,
    deleteTask,
    dropTaskFrom,
    swapTasks,
    updateTask,
  } = useColumnTasks(column);

  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

  const ColumnTasks = tasks.map((task, index) => (
    <Task
      key={task.id}
      task={task}
      index={index}
      onDropHover={swapTasks}
      onUpdate={updateTask}
      onDelete={deleteTask}
    />
  ));

  return (
    <>
      {showModal && <InputModal setshowModal={setshowModal} addEmptyTask={addEmptyTask} columntext={columntext} />}
      <Box>
        <Heading fontSize="md" mb={4} letterSpacing="wide">
          <Badge
            px={2}
            py={1}
            rounded="lg"
            colorScheme={ColumnColorScheme[column]}
          >
            {column}
          </Badge>
        </Heading>
        <IconButton
          size="xs"
          w="full"
          color={useColorModeValue('gray.500', 'gray.400')}
          bgColor={useColorModeValue('gray.100', 'gray.700')}
          _hover={{ bgColor: useColorModeValue('gray.200', 'gray.600') }}
          py={2}
          variant="solid"
          onClick={() => {
            setshowModal(!showModal);
            document.body.style.overflowY = "hidden";
          }}
          colorScheme="black"
          aria-label="add-task"
          icon={<AddIcon />}
        />
        <Stack
          ref={dropRef}
          direction={{ base: 'row', md: 'column' }}
          h={{ base: 300, md: 600 }}
          p={4}
          mt={2}
          spacing={4}
          bgColor={useColorModeValue('gray.200', 'gray.900')}
          rounded="lg"
          boxShadow="md"
          overflow="auto"
          opacity={isOver ? 0.85 : 1}
        >
          {ColumnTasks}
        </Stack>
      </Box>


    </>
  );
}

export default Column;
