import app from 'flarum/app';

import addShareControl from './addShareControl';

app.initializers.add('cxsquared/better-comment-share', () => {
  addShareControl();
});
