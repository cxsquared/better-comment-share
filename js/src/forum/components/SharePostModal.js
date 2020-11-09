import app from 'flarum/app';
import Modal from 'flarum/components/Modal';

export default class SharePostModal extends Modal {
    oninit() {
        super.oninit();
        setTimeout(() => $(this).parent().find('.PostMeta-permalink').select());
    }

    className() {
        return 'SharePostModal Modal--small';
    }

    title() {
        return "Share";
    }

    content() {
        const post = this.props.post;
        const permalink = window.location.origin + app.route.post(post);
        const touch = 'ontouchstart' in document.documentElement;

        return (
            <div className="Modal-body">
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