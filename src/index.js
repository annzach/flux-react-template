import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router'
import Layout from './components/Layout'



import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


render(  
  <Router history = {browserHistory}>
    <Route path= '/' component={Layout}>
    </Route>
  </Router>,
  document.getElementById('root')

  )