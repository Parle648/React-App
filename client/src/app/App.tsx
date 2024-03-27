import CreateListFeature from '../features/CreateListFeature/CreateListFeature';
import ShowActivitiesFeature from '../features/ShowActivitiesFeature/ShowActivitiesFeature';
import TaskListsWidget from '../widgets/TaskListsWidget/TaskListsWidget';

function App() {

  return (
    <>
      <ShowActivitiesFeature />
      <CreateListFeature />
      <TaskListsWidget />
    </>
  );
}

export default App;
