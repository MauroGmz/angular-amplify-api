import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from "aws-amplify";
//import aws_exports from "./aws-exports";
//Amplify.configure(aws_exports);
Amplify.configure({
  "aws_project_region": "us-east-1",
  "aws_appsync_graphqlEndpoint": "https://5zj6tpjpifgdtchoqsxtxtwwha.appsync-api.us-east-1.amazonaws.com/graphql",
  "aws_appsync_region": "us-east-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-xqseerqdyfh5bm6noguund5tjy",
  "aws_cognito_identity_pool_id": "us-east-1:f1b9c80c-2bce-44af-8194-e772b2b84ac7",
  "aws_cognito_region": "us-east-1",
  "aws_user_pools_id": "us-east-1_bg1RBdphe",
  "aws_user_pools_web_client_id": "4e4v3fgbsvh6iu0idf1d4igihr",
  "oauth": {},
  "aws_user_files_s3_bucket": "angularamplifyapib604cc9402a74f528386f29ce8c332173902-dev",
  "aws_user_files_s3_bucket_region": "us-east-1",
  Auth: {
    identityPoolId: 'us-east-1:9cc3dd8c-6397-4082-a3ee-d99560877e7f', //REQUIRED - Amazon Cognito Identity Pool ID
    region: 'us-east-1', // REQUIRED - Amazon Cognito Region
  },
  Storage: {
    AWSS3: {
      bucket: 'angularamplifyapib604cc9402a74f528386f29ce8c332173902-dev', //REQUIRED -  Amazon S3 bucket name
    }
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
