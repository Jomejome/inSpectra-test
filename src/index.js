import React from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import App from 'containers/App/App.jsx';

import './assets/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/sass/light-bootstrap-dashboard.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';

// function updateData(){
//     axios.get('http://localhost:3003')
//     .then(function (response) {
//         var ret = (response.data)[0];
//         console.log(ret);
//         console.log(ret.visible);
//         return ret.visible;
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// }

// var dashData;
// var historyData

ReactDOM.render((
    <HashRouter>
        <Switch>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </HashRouter>
),document.getElementById('root'));

