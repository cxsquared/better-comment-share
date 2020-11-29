import app from 'flarum/app';
import Modal from 'flarum/components/Modal';

export default class SharePostModal extends Modal {
    oninit(vnode) {
        super.oninit(vnode);
        setTimeout(() => $(this).parent().find('.PostMeta-permalink').select());
    }

    className() {
        return 'SharePostModal Modal--small';
    }

    title() {
        return "Share this post";
    }

    content() {
        const post = this.attrs.post;
        const permalink = window.location.origin + app.route.post(post);
        const touch = 'ontouchstart' in document.documentElement;

        return (
            <div className="Modal-body">
                <h3>Link to post</h3>
                {touch ? ( <a className="Button PostMeta-permalink" href={permalink}>
                    {permalink}
                    </a>
                ) : (
                    <input className="FormControl PostMeta-permalink" value={permalink} onclick={(e) => e.stopPropagation()} />
                )}    
            </div>
        );
    }
}