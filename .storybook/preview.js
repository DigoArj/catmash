import { Amplify } from 'aws-amplify';
import awsConfig from '../src/aws-config';

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
