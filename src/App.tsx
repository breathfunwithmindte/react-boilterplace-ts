import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './styles/app.css';
import FormPage from './pages/FormPage';
import {
  Route, 
  Routes
} from 'react-router-dom';

import PageStateReducer from './reducers/FormPageReducer/FormPageReducer';
import LoginFormState from './reducers/FormPageReducer/types/LoginPage';
import { FormPageContextProvider } from './contexts/FormPageContextProvider';
import LoginPage from './pages/public/LoginPage';
import { PageStateLoginDefault } from './reducers/FormPageReducer/FormPage';
import useAuth from './contexts/AuthStateContextProvider';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';
import { useFetch } from './hooks/useFetch';
import PageError from './types/PageError';
import { useOnClickOutside } from './hooks/useOnClickOutside';
import GenericForm from './components/GenericForm';
import { Field } from './types/GenericForm';
import FieldType from './enums/FieldType';
import ApplicationPage from './pages/readers/ApplicationPage';


function App() {
  const { state, dispatch } = useAuth();
  const [response, error, loading] = useFetch<{  }>("http://localhost:5000/api/v1/user/portal/react/authenticated")
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => console.log('clicked outside'));

  console.log(response, error, loading)

  if(state.user === null) return (
    <div className="App">
      <FormPageContextProvider<LoginFormState> defaultState={PageStateLoginDefault}>
        <LoginPage />
        <h1>asdasd</h1>
      </FormPageContextProvider>
    </div>
  )
  return (
    <AuthenticatedLayout>
      <div className="bg-2 c-2 w-f" style={{padding: "3.4rem"}}>

      <Routes>
        <Route path="/home" element={<ApplicationPage />} />
        <Route path="/server-health" element={<div> server 2 </div>} />
        <Route path="/user-mapping" element={<div> user 3 </div>} />
        <Route path="/users" element={<div> users 4 </div>} />
        <Route path="/application" element={<div> application 4 </div>} />

        <Route path="/application">
          <Route path="/application/data-collector" element={<div> data collector </div>} />
          <Route path="/application/groups" element={<div> data collector </div>} />
          <Route path="/application/roles" element={<div> data collector </div>} />
          <Route path="/application/keys" element={<div> data collector </div>} />
          <Route path="/application/policies" element={<div> data collector </div>} />
          <Route path="/application/user-namespaces" element={<div> data collector </div>} />
          <Route path="/application/trusted-applications" element={<div> data collector </div>} />
        </Route>

        <Route path="/applications" element={<div> applications 4 </div>} />

        <Route path="/login">
          <Route path="/login/workflows/running" element={<div> data collector </div>} />
          <Route path="/login/workflows/schema" element={<div> data collector </div>} />
          <Route path="/login/tokens" element={<div> data collector </div>} />
          <Route path="/login/activity" element={<div> data collector </div>} />
        </Route>

        <Route path="/logins" element={<div> logins 4 </div>} />

        <Route path="/log">
          <Route path="/log/applog" element={<div> data collector </div>} />
          <Route path="/log/logs" element={<div> data collector </div>} />
          <Route path="/log/notifications" element={<div> data collector </div>} />
          <Route path="/log/outbound-messages" element={<div> data collector </div>} />
        </Route>

        <Route path="/log" element={<div> logs 4 </div>} />
        
        <Route path="/settings" element={<div> settings 4 </div>} />
      </Routes>
      <div className="d-flex j-c-between sp-3">
        <button className="btn btn-primary h-5"> Active Only </button>
        <button className="btn btn-primary h-5"> Active Only </button>
        <div className="d-flex">
          <input className="inp-primary h-5" placeholder="Search by email" />
          <button className="btn btn-primary h-5"> Active Only </button>
        </div>
      </div>
      <div style={{height: "69vh", overflowY: "auto"}}>
        <table>
          <tr>
            <th>index</th>
            <th>id</th>
            <th>username</th>
            <th>email</th>
            <th>phonenumber</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>active</th>
          </tr>
          {[0,1,2,3,4,5,6,7,8,12,14,15,16,23,34,25,26,36,44,45,46,47,48].map(i => {
            return (
              <tr>
                <td>Row {i}, Column {i}</td>
                <td>Row {i}, Column {i}</td>
                <td>Row {i}, Column {i}</td>
                <td>Row {i}, Column {i}</td>
                <td>Row {i}, Column {i}</td>
                <td>Row {i}, Column {i}</td>
                <td>Row {i}, Column {i}</td>
                <td>Row {i}, Column {i}</td>
              </tr>
            )
          })}
        </table>
      </div>

      <GenericForm title={null} fields={[
        { fieldName: "groupname", fieldType: FieldType.TEXTFIELD, label: "Group Name", placeholder: null  },
        { fieldName: "groupname", fieldType: FieldType.TEXTFIELD, label: "Group Name", placeholder: null  },
        { fieldName: "client_id", fieldType: FieldType.TEXTFIELD, label: "Client ID", placeholder: null  },
        { fieldName: "client_secret", fieldType: FieldType.TEXTFIELD, label: "Client Secret", placeholder: null  }
      ]} handleChange={(event: any, field: Field) => {console.log("hello")}} state={{}} />

      </div>
    </AuthenticatedLayout>
  );
}

export default App;
