import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import aws_config from './aws-exports';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import Amplify from 'aws-amplify'
Amplify.configure(aws_config)

const client = new AWSAppSyncClient({
  url: aws_config.aws_appsync_graphqlEndpoint,
  region: aws_config.aws_appsync_region,
  auth: {
      type: AUTH_TYPE.API_KEY,
      apiKey: aws_config.aws_appsync_apiKey,
  }
});

ReactDOM.render(  
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>, document.getElementById('root')
  );
  