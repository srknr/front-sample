module.exports = {
  name: 'front-sample',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/front-sample',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
