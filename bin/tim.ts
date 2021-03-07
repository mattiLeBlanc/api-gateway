#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TimStack } from '../lib/tim-stack';

const app = new cdk.App();
new TimStack(app, 'TimStack');
