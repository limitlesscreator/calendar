import logo from './logo.svg';
import './App.css';
import {Button} from '../src/Components/Button'
import {Tabs, TabList, Tab, TabPanels, TabPanel} from '@reach/tabs'
import {LoginForm} from '../src/Components/LoginForm'


function App() {

    return (
        <div className="App">
            {/*<Button text={'Subtract'}  onClick={() => {console.log('Subtract')}}/>*/}
            {/*<Button text={'Add'}  onClick={() => {console.log('Add')}}/>*/}
            <Tabs>
                <TabList>
                    <Tab>Login</Tab>
                    <Tab>Signup</Tab>
                </TabList>
                <TabPanels>
                     <TabPanel>
                         <LoginForm/>
                     </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    );
}

export default App;
