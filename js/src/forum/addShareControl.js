import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PostControls from 'flarum/utils/PostControls';
import Button from 'flarum/components/Button';

export default function() {
    extend(PostControls, 'userControls', function(items, post) {
        const permalink = window.location.origin + app.route.post(post);

        items.add('share',
            <Button icon="fas fa-share" id="comment-share" dataClipboardText={permalink}>Copy Link</Button>,
            5
        );
    });
}