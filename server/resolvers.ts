import { assets } from './data';

export const resolvers = {
  Query: {
    assets: () => assets,
  },
};
