import { SSH_KEY } from 'constants';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const SshKeyPage = () => {
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };
    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };
    return (
        <div className="flex flex-col gap-2 items-end">
            <textarea className="code resize-none h-60 max-w-3xl w-screen" defaultValue={SSH_KEY} />
            <Link to="/">
                <button>Home</button>
            </Link>
            {/* <button
                onClick={() => {
                    openModal();
                }}
            >
                Open
            </button> */}
            <dialog ref={modalRef} data-modal>
                <div>asd</div>
                <button
                    onClick={() => {
                        closeModal();
                    }}
                >
                    Close
                </button>
            </dialog>
        </div>
    );
};

export default SshKeyPage;
