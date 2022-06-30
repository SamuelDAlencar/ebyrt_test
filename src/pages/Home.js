import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addTask } from '../redux/slices/tasksSlice';
import '../style/App.css';
import Tasks from '../components/Tasks';

function Home() {
  const dispatch = useDispatch();
  const [currTask, setCurrTask] = useState([]);
  const [taskId, setTaskId] = useState(1);

  const handleChange = (event) => {
    setCurrTask(event.target.value);
  };

  const handleAddTask = () => {
    dispatch(addTask({ id: taskId, subject: currTask }));
    setTaskId(taskId + 1);
  };

  return (
    <>
      <Header />
      <main className='app_main'>
        <section className="addTask_section">
          <h3 className="main_h3">New Task</h3>
          <input onChange={handleChange} />
          <button
            onClick={() => handleAddTask()}
          >Add task</button>
        </section>
        <section className="tasks_section">
          <section className="ongoingTasks_section">
            <h4>Ongoing</h4>
            <Tasks />
          </section>
          <section className="doneTasks_section">
            <h4>Done</h4>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
