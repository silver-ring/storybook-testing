module.exports = {
  name: 'warehouse',
  exposes: {
    './Module': 'apps/warehouse/src/app/remote-entry/entry.module.ts',
  },
};
