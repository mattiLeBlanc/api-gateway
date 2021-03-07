# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template


# First time deploy in account

Setup credentials in `~/.aws` folder:

`config` file:

```
[profile [name]]
region = ap-southeast-2

[default]
region = ap-southeast-2
```

`credentials` file:

```
[default]
...access key
## or use named profile

[name]
...access key
```

Run `cdk bootstrap aws://[account id]/ap-southeast-2 [--profile=[profile]]` plus profile unless using default only ONCE

# AWS CDK for gateway:

https://docs.aws.amazon.com/cdk/api/latest/docs/aws-apigateway-readme.html

# Java example

https://github.com/macagua/example.java.helloworld