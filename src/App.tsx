import { } from '@chakra-ui/icons';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import DarkModeIconButton from './components/DarkModeIconButton';
import { ColumnType } from './utils/enums';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        closeButton={false}
        limit={1}
      />

      <Heading
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        mt={4}
      >
        Welcome to Type - Do
      </Heading>
      <DarkModeIconButton position="absolute" top={0} right={2} />
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" px={4} py={10}>
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 16, md: 8 }}
          >
            <Column column={ColumnType.TO_DO} columntext={"Todo"} />
            <Column column={ColumnType.IN_PROGRESS} columntext={"In Progress"} />
            {/*   <Column column={ColumnType.BLOCKED} /> */}
            <Column column={ColumnType.COMPLETED} columntext={"Completed"} />
          </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default App;
