import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home () {
    const history = useHistory();

    return (
        <div>
            <head>
                <title>Create Next App</title>
            </head>

            <main >
                <h1>
                    Welcome to <a href='https://nextjs.org'>Next.js!</a>
                </h1>
                <button onClick={() => history.push('/about')}>Go to About us</button>
            </main>
        </div>
    );
}
