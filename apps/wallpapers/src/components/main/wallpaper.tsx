import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
// import exampleWallpaperImage from 'assets/example-wallpapers.jpg';
import { useUnit } from 'effector-react';
import { $time } from './model';

const n = 144;
const k = 70;

const bounds = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function Wallpaper() {
    const time = useUnit($time);

    const isWithIsland = false;

    // 1170 x 2532
    const isIphone = /iPhone|iPod/.test(navigator.platform);
    const ratio = 1170 / 2532;
    const currentRatio = window.innerWidth / window.innerHeight;
    const [width, height] = isIphone ? [window.innerWidth, window.innerHeight] : currentRatio < ratio ? [window.innerWidth, window.innerWidth / ratio] : [window.innerHeight * ratio, window.innerHeight];

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-[#272727] p-0">
            <div style={{ width, height }} className="flex flex-col items-center bg-[#242424] text-[10px] uppercase text-white">
                <div className={`flex h-[287px] ${isWithIsland ? 'w-[97%]' : 'w-full'} flex-col items-center justify-center ${isWithIsland ? 'rounded-b-[3rem]' : ''} border border-transparent border-b-white/10 bg-black shadow-2xl`}>
                    <span className="absolute mb-20 text-8xl font-thin text-white">{time.format('HH:mm')}</span>
                    <div className="flex h-full w-full max-w-full flex-col flex-wrap items-center justify-center gap-0.5 overflow-hidden">
                        {Array.from({ length: k }, (_, i) => (
                            <div key={i} className="flex gap-0.5">
                                {Array.from({ length: k }, (_, j) => {
                                    const x = Math.abs(k * 0.8);
                                    const y = Math.abs(k / 2);
                                    const opacity = bounds(1 - Math.sqrt((i - x) ** 2 + (j - y) ** 2) / (k * 0.8), 0, 1);
                                    const opacityInPercent = Math.round(opacity * 100);
                                    return <div key={j} className="h-0.5 w-0.5 rounded-sm bg-white/10" style={{ opacity: `${opacityInPercent}%` }}></div>;
                                })}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex h-full w-full flex-[2.46] flex-row border-b border-black/20">
                    <div className="flex h-full flex-[1.59] flex-col items-start justify-between border-r border-black/20 p-[0.6rem]">
                        <div className="flex">
                            <span>Status</span>
                            <ChevronUpIcon className="-mt-0.5 h-4 w-4 rotate-45 stroke-orange-400" />
                        </div>
                        <div className="flex">
                            <span>Flashlight</span>
                            <ChevronDownIcon className="-mb-0.5 h-4 w-4 -rotate-45 stroke-orange-400" />
                        </div>
                    </div>
                    <div className="flex h-full w-full flex-[1] flex-col items-start justify-start">
                        <div className="flex h-fit w-full flex-col items-start justify-start border-b border-black/20 py-3.5 pl-4">
                            <div className="grid grid-cols-12 grid-rows-12 gap-1">
                                {Array.from({ length: n }, (_, i) => {
                                    const delayDelta = (1 * 60) / n;
                                    // prettier-ignore
                                    const opacity = Math.round((bounds(time.startOf('m').add((i * 60) / n, 's').diff(time) / 1000,-delayDelta,0,) /delayDelta +1) * 30 +70);
                                    const isBeforeNow = i < Math.ceil((time.diff(time.startOf('m')) / 1000 / 60) * n);
                                    return <div key={i} className={`h-1.5 w-1.5 rounded-full ${isBeforeNow ? `bg-green-500` : 'bg-black/80'} flex items-center justify-center`} style={{ opacity: `${opacity}%` }}></div>;
                                })}
                            </div>
                        </div>
                        <div className="flex h-full w-full flex-col items-start justify-between p-3">
                            <div className="flex items-center gap-1.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                                <span>Fb - 01</span>
                            </div>
                            <div className="relative flex w-full justify-end">
                                <div className="absolute -right-[1.9rem] bottom-4 flex rotate-90 items-center gap-1.5">
                                    <span>Camera</span>
                                    <ChevronDownIcon className="-mb-0.5 h-4 w-4 -rotate-45 stroke-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full flex-[1] flex-row">
                    <div className="flex h-full w-[180%] items-start justify-start border-r border-black/20 p-[0.6rem]">{/* <span>Status</span> */}</div>
                    <div className="flex h-full w-full items-center justify-center p-[0.6rem]">
                        {/* <span>Status</span> */}
                        <div className="absolute h-1 w-1 -translate-y-14 rounded-full bg-white/25"></div>
                        <div className="absolute h-3 w-px -translate-y-10 rounded-full bg-orange-400"></div>
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-black/60">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
                                {/* <button className="flex h-full w-full items-center justify-center rounded-full bg-black/30">
                                    <Cog6ToothIcon className="h-8 w-8 text-white/30" />
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* prettier-ignore */}
            {/* <img src={exampleWallpaperImage} className={`w-screen h-[${window.innerHeight + 8888}px] object-fill absolute bottom-0 left-0 opacity-20`} /> */}
        </div>
    );
}
