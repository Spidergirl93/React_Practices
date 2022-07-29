import useHttp from '../../hooks/httpHook';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const {isLoading, error, request: taskRequest} = useHttp();

  

  const enterTaskHandler = async (taskText) => {
    const idHandler = (taskData) => {
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
  
      props.onAddTask(createdTask);
    };
  

  taskRequest ({
    url: 'https://tasks-52028-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: { text: taskText }
  }, idHandler);

  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
