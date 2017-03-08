import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {Router} from 'react-router';
import {Route} from 'react-router';
import {browserHistory} from 'react-router';

import App from './components/App';
import Inbox from './components/Inbox';
import Message from './components/Message';
import Draft from './components/Draft';
import Contacts from './components/Contact';


{/*document.addEventListener( "DOMContentLoaded", () => {*/}
    {/*const reactNode = document.getElementById("react-node");*/}

    {/*if(reactNode){*/}
        {/*ReactDOM.render(*/}
            {/*<Router history={browserHistory}>*/}
                {/*<Route path ="/" component={App}>*/}
                    {/*<Route path="draft" component={Draft}/>*/}
                    {/*<Route path="contacts" component={Contacts}/>*/}
                    {/*<Route path="inbox" component={Inbox}>*/}
                        {/*<Route path="/inbox/:messageId" component={Message} />*/}
                    {/*</Route>*/}
//                 </Route>
//             </Router>
//             , reactNode )
//     }
// } );
render(

    <Router history={browserHistory}>
        <Route path ="/" component={App}>
            <Route path="draft" component={Draft}/>
            <Route path="contacts" component={Contacts}/>
            <Route path="inbox" component={Inbox}>
                <Route path="/inbox/:messageId" component={Message} />
            </Route>
        </Route>
    </Router>
    ,
  document.getElementById('root')
);