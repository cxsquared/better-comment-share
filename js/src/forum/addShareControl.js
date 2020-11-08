import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PostControls from 'flarum/utils/PostControls';

export default function() {
    extend(PostControls, 'userControls', function(items, post) {
        const touch = 'ontouchstart' in document.documentElement;
        const permalink = window.location.origin + app.route.post(post);

        const item = touch ?
            <a className="Button PostMeta-permalink" href={permalink}>{permalink}</a> : 
            <input className="Formcontrol PostMeta-permalink" value={permalink} onclick={(e) => e.stopPropagation()} />;

        items.add('share',
            item
        );
    });
}