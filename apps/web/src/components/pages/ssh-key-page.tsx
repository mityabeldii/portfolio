import { SSH_KEY } from 'constants';
import { Link } from 'react-router-dom';

const SshKeyPage = () => {
    return (
        <div className="flex flex-col gap-2 items-end">
            <textarea className="code resize-none h-60 max-w-3xl w-screen" defaultValue={SSH_KEY} />
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    );
};

export default SshKeyPage;
