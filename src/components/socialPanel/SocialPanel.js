import './socialPanel.scss';
import Vkontakte from '../sociaIcons/Vkontakte';
import Github from '../sociaIcons/Github';
import Telegram from '../sociaIcons/Telegram';

function SocialPanel() {
    return (
        <aside className="socialpanel">
            <div className="socialpanel__text">Социальные сети</div>
            <div className="socialpanel__divider"></div>
            <Vkontakte />
            <Github />
            <Telegram />
        </aside>
    );
}

export default SocialPanel;
