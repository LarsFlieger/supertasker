import { addTask, createTask, removeTask, tasksReducer } from './tasks-slice';

describe('tasksSlice', () => {
  const initialState = {
    entities: [
      createTask({ title: 'Task 1' }),
      createTask({ title: 'Task 2' }),
    ],
  };

  it(`should add a task when the ${addTask}`, () => {
    const newTask = createTask({ title: 'Task 3' });
    const action = addTask(newTask);
    const newState = tasksReducer(initialState, action);

    expect(newState.entities).toHaveLength(3);
    expect(newState.entities).toEqual([newTask, ...initialState.entities]);
  });
});
