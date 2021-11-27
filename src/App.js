import HomePage from "./app/HomePage";
import {Route, useLocation} from "react-router-dom";
import NavBar from "./app/common/NavBar";
import {Container} from "semantic-ui-react";
import EmployeeTable from "./features/employess/EmployeeTable";
import ModalManager from "./app/common/modal/ModalManager";
import EmployeeDetail from "./features/employess/employeeDetails/EmployeeDetail";
import EmployeeForm from "./features/employess/EmployeeForm";

const App = () => {
    const {key} = useLocation();
    return (


        <>
            <ModalManager/>
            <Route exact path={'/'} component={HomePage}/>
            <Route path={'/(.+)'} render={() => (
                <>
                    <NavBar/>
                    <Container className={'main'}>
                        <Route exact path={'/employees'} component={EmployeeTable}/>
                        <Route path={'/detail/:id'} component={EmployeeDetail}/>
                        <Route path={['/create', '/edit/:id']} component={EmployeeForm} key={key}/>

                    </Container>


                </>

            )}>

            </Route>

        </>
    );
};

export default App;
