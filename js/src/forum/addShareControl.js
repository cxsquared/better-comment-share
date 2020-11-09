import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PostControls from 'flarum/utils/PostControls';
import Button from 'flarum/components/Button';
import SharePostModal from './components/SharePostModal';

export default function() {
    extend(PostControls, 'userControls', function(items, post) {
        items.add('share',
            <Button icon="fas fa-share" onclick={() => app.modal.show(new SharePostModal({post}))}>Share</Button>,
            5
        );
    });
}