#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { GatewayStack } from '../lib/gateway-stack';

const app = new cdk.App();
new GatewayStack(app, 'GatewayStack');
