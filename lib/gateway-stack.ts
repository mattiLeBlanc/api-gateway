import { Stack, Construct, StackProps } from '@aws-cdk/core';
import { LambdaRestApi } from '@aws-cdk/aws-apigateway';
import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';

export class GatewayStack extends Stack {

  public api: LambdaRestApi;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambdaFunction = new Function(this, 'function', {
      functionName: 'myLambda',
      runtime: Runtime.JAVA_11,
      handler: 'HelloWorld.Main::main',
      code: Code.fromAsset('dist/Main.jar')
    });

    this.api = new LambdaRestApi(this, 'myapi', {
      handler: lambdaFunction,
      proxy: false,
    });

    const items = this.api.root.addResource('items');
    items.addMethod('GET'); // GET /items
    items.addMethod('POST'); // POST /items
  }

}
