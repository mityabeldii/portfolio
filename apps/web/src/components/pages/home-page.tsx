import avatarImg from 'assets/avatar.jpeg';

export default function HomePage() {
    return (
        <div className="flex fle-row gap-5 items-center justify-center">
            <div className="relative p-2 flex items-center justify-center">
                <img src={avatarImg} className="rounded-full w-36 aspect-square border-[#39a266] border-4" />
                {/* <div className="half-circle absolute -bottom-0 top-0 border-ua-blue"></div>
                <div className="half-circle rotate-180 absolute -bottom-0 border-ua-yellow"></div> */}
            </div>
            <h1 className="font-bold">Dmytro Beldii</h1>
            <div className="absolute bottom-0 mb-5 flex flex-row gap-2">
                {/* <a href="https://instagram.com/mityabeldii" target="_blank">
                    <button>instagram</button>
                </a> */}
                <a href="https://linkedin.com/in/mityabeldii" target="_blank">
                    <button>linkedin</button>
                </a>
                <a href="https://github.com/mityabeldii" target="_blank">
                    <button>github</button>
                </a>
            </div>
        </div>
    );
}
