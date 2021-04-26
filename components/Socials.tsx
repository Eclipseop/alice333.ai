/* eslint-disable jsx-a11y/anchor-is-valid */
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
            <p className="font-semibold mx-auto text-3xl text-semibold">Alice333.ai</p>
            <div className="flex gap-3 p-3">
                <Link link="https://alice333.ai/api/patreon" name="Patreon" />
                <Link link="https://alice333.ai/api/youtube" name="YouTube" />
                <Link link="https://alice333.ai/api/reddit" name="Reddit" />
            </div>
            <div className="flex gap-3 p-3">
                <Link link="https://alice333.ai/api/discord" name="Discord" />
                <Link link="https://alice333.ai/api/instagram" name="Instagram" />
                <Link link="https://alice333.ai/api/alice333" name="Creator" />
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

interface LinkProps {
    link: string,
    name: string;
}

const Link: React.FC<LinkProps> = ({ link, name }: LinkProps) => (
    <a target="_blank" rel="noreferrer noopener" className="md:text-3xl text-xl" href={link}>{name}</a>
);

export default Socials;
