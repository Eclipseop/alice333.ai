// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import axios from 'axios';
import copy from 'clipboard-copy';

interface Props {
  url: string;
  // eslint-disable-next-line no-unused-vars
  onChange(url: string): void;
}

const Entry: React.FC<Props> = (props: Props) => {
    const [uid, setUid] = useState('');

    const click = async (url: string) => {
        try {
            if (!url || url === '') {
                if (uid !== '') {
                    window.open(`/api/${uid}`);
                }
                return;
            }

            const res = (await axios.post(`/api/url?url=${url}&uid=${uid}`)).data;
            navigator.clipboard.writeText(res.url);
            copy(res.url);
            alert(res.url);
        } catch (err) {
            console.error(err);
        }
    };

    const simulateClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            click(props.url);
        }
    };

    return (
        <div className="flex flex-wrap mx-auto gap-1 max-w-xl">
            <div className="min-w-full flex gap-1">
                <input
                    type="text"
                    // eslint-disable-next-line react/destructuring-assignment
                    value={props.url}
                    autoComplete="off"
                    autoCapitalize="off"
                    autoCorrect="off"
                    className="rounded border-2 flex-auto p-1"
                    placeholder="http:///www.google.com"
                    onChange={(event) => props.onChange(event.target.value)}
                    onKeyDown={(e) => simulateClick(e)}
                />

                <button
                    type="submit"
                    className="bg-red-300 border-2 border-red-400 rounded p-1"
                    onClick={() => click(props.url)}
                >
                    Submit
                </button>
            </div>

            <input
                type="text"
                placeholder="UID"
                className="rounded border-2 flex-auto p-1"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
            />
        </div>
    );
};

export default Entry;
