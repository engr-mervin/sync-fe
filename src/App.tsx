import './App.css';
import TodoCard from './components/TodoCard';
import TodoGroup from './components/TodoGroup';

interface Todo {
  title: string;
  description: string;
  status: 'active' | 'completed';
}


function App() {
    return (
        <main>
            <h1>Todo</h1>
            <TodoGroup groupName='Active'>
                <TodoCard id='1' title='Do something' description='Do something description' />
                <TodoCard id='1' title='Do something' description='Do something description' />
                <TodoCard id='1' title='Do something' description='Do something description' />
            </TodoGroup>
            <TodoGroup groupName='Completed'>
                <TodoCard id='1' title='Do something' description='Do something description' />
                <TodoCard id='1' title='Do something' description='Do something description' />
                <TodoCard id='1' title='Do something' description='Do something description' />
            </TodoGroup>
        </main>
    );
}

export default App;
