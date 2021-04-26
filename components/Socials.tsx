/* eslint-disable no-use-before-define */
import React from 'react';

interface Props {
    visible: boolean,
    // eslint-disable-next-line no-unused-vars
    setVis(visible: boolean): void;
}

const Socials: React.FC<Props> = ({ visible, setVis }: Props) => (
    <div className={visible ? 'visible' : 'invisible'}>
        <div className="absolute bottom-0 right-0 mb-28 mr-10 flex z-10 flex-col bg-white rounded max-w-min p-2">
            <p className="font-semibold mx-auto">Alice333.ai</p>
            <div className="flex gap-1">
                <a href="https://alice333.ai/api/patreon">Patreon</a>
                <a href="https://alice333.ai/api/youtube">YouTube</a>
                <a href="https://alice333.ai/api/reddit">Reddit</a>
            </div>
            <div className="flex gap-1">
                <a href="https://alice333.ai/api/discord">Discord</a>
                <a href="https://alice333.ai/api/instagram">Instagram</a>
                <a href="https://alice333.ai/api/alice333">Creator</a>
            </div>

            <button
                type="button"
                className="border-2"
                onClick={() => setVis(false)}
            >
                Thanks!
            </button>
        </div>
    </div>
);

export default Socials;
