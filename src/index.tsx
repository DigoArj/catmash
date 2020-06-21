import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'Components';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from 'Stores';

import { Amplify } from 'aws-amplify';
import awsConfig from 'aws-config';

Amplify.configure({
  API: {
    endpoints: [
      {
        name: 'cats',
        endpoint: awsConfig.apiGateway.URL,
        region: awsConfig.apiGateway.REGION,
      },
    ],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Route path={['/scores', '/']} component={App} />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
