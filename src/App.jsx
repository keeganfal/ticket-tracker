
import './App.css';
import EmployeeTab from './components/EmployeeTab/EmployeeTab.jsx';

import team from "./data/team.js";

const App = () => {

  const cardListJSX = team.map((employee) => (
    <EmployeeTab key={employee.id} employeeName={employee.name} employeeRole={employee.role}/>
  ));

  return (
    <div className="App">
      <section className='tickets'>
        <h2 className="tickets__heading">Tickets</h2>
        <div className="all-tickets">
          {cardListJSX}
        </div>
      </section>
        
    </div>
  );
}

export default App;
