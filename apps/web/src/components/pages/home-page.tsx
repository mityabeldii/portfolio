const HomePage = () => {
    return (
        <div className="flex fle-row gap-5 items-center justify-center">
            <div className="relative p-2 flex items-center justify-center">
                <img
                    src="https://media.licdn.com/dms/image/D4E03AQFxWA2JfEofsw/profile-displayphoto-shrink_800_800/0/1677690594269?e=1691625600&v=beta&t=sdH_mcyeCyOcF7siQmAXeub-xBkS8UQLgX2QoYbtOW0"
                    className="rounded-full w-24 aspect-square"
                />
                <div className="half-circle absolute -bottom-0 top-0 border-ua-blue"></div>
                <div className="half-circle rotate-180 absolute -bottom-0 border-ua-yellow"></div>
            </div>
            <h1 className="font-bold">Dmytro Beldii</h1>
            <div className="absolute bottom-0 mb-5 flex flex-row gap-2">
                <a href="https://instagram.com/mityabeldii" target="_blank">
                    <button>instagram</button>
                </a>
                <a href="https://linkedin.com/in/dmytro-beldii-8592b1188/" target="_blank">
                    <button>linkedin</button>
                </a>
            </div>
        </div>
    );
};

export default HomePage;
