import React, { useEffect, useState } from 'react';

import useHttp from './hooks/httpHook';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  
  
  const [tasks, setTasks] = useState([]);

  const transformTask = taskObject => {
    const loadedTasks = [];

    for (const taskKey in taskObject) {
      loadedTasks.push({ id: taskKey, text: taskObject[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const {isLoading, error, request: fetchTasks} = useHttp();
  
  

  useEffect(() => {
    fetchTasks({
      url: 'https://tasks-52028-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'}, transformTask);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
