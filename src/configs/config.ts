/* eslint-disable radix */
import { NODE_ENV, MAX_GROUP_LEVEL } from '@env';

const maxGroupLevel = parseInt(MAX_GROUP_LEVEL);

export default {
  nodeEnv: NODE_ENV,
  maxGroupLevel: maxGroupLevel,
};
