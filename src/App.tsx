import Footer from './components/common/Footer/Footer';
import Layout from './components/common/Layout/Layout';
import Navbar from './components/common/Navbar/Navbar';
import TasksProvider from './contexts/TasksContext';

const App = () => {

  return(
    <TasksProvider>
      <Navbar />
      <Layout />
      <Footer />
    </TasksProvider>
  );

};

export default App;