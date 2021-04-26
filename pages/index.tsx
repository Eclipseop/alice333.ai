/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import Head from 'next/head';
import Entry from '../components/Entry';

const index: React.FC = () => {
    const [url, setUrl] = useState('');

    return (
        <div>
            <Head>
                <title>Alice333.ai</title>
                <meta
                    name="og:title"
                    content="Alice333.ai"
                    key="ogtitle"
                />
                <meta
                    name="og:description"
                    content="artificial intelligence music generator. アリスの目を通して世界を見る 𝒸₈: lnₑπ(1,1/0,0)²"
                    key="ogdesc"
                />
                <meta name="theme-color" content="#ff82ee" />
            </Head>
            <div
                className="min-h-screen"
                style={{
                    backgroundImage: "url('/astantine_crop_2.jpg')",
                    backgroundPositionX: 'center',
                    overflow: 'hidden',
                }}
            >
                <div className=" min-w-full">
                    <div
                        className="flex flex-col bg-white mx-auto rounded p-2"
                        style={{
                            marginTop: '20%',
                            position: 'relative',
                            width: '50%',
                            paddingBottom: '10px',
                            alignItems: 'center',
                        }}
                    >
                        <h1 className="text-4xl m-auto text-red-300 mb-1">
                            ◮ʟɪᴄᴇ333
                        </h1>
                        <Entry url={url} onChange={setUrl} />
                    </div>
                    <div className="flex flex-row absolute bottom-0 min-w-full">
                        <a href="https://www.patreon.com/bePatron?u=40510225" className="flex-grow">Patreon</a>
                        <img
                            src="alice_icon.png"
                            className="rounded-full border-2 flex-none"
                            alt="Alice popup icon"
                            width="100px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
