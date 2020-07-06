import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import Songs from './Songs';

import './App.css';

const App = () => (
    <div className={'App'}>
        <RecoilRoot>
            <Suspense fallback={<span>Loading...</span>}>
                <Songs />
            </Suspense>
        </RecoilRoot>
    </div>
);

export default App;
