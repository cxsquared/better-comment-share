import app from 'flarum/app';
import ClipboardJS from 'clipboard';

import addShareControl from './addShareControl';

var clipboard = new ClipboardJS('#comment-share');

app.initializers.add('cxsquared/better-comment-share', () => {
  addShareControl();
});
