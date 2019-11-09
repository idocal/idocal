import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

const scrollingSpeed = 1000;

const changeLogoMode = mode => {
    console.log('changing logo mode to: ', mode);
    if (document.getElementById('logo-bar')) {
        if (mode === 'dark') {
            document.getElementById('logo-bar').classList.remove("bright");
            document.getElementById('logo-bar').classList.add("dark");
        }
        else if (mode === 'bright') {
            document.getElementById('logo-bar').classList.remove("dark");
            document.getElementById('logo-bar').classList.add("bright");
        }
    }
};

const onLeave = (origin, destination, direction) => {
    if (destination.item.classList.contains('logomode-bright')) {
        changeLogoMode('bright');
    }
    if (destination.item.classList.contains('logomode-dark')) {
        changeLogoMode('dark');
    }
};

export default ({ props, children }) => (
    <ReactFullpage
        scrollingSpeed = {scrollingSpeed}
        dragAndMove={true}
        fadingEffect={true}
        licenseKey={'0410E3D2-5EAB4F1A-BA2F2B25-070147F7'}
        onLeave={onLeave}
        render={(state, fullpageApi) => {
            return (
                <ReactFullpage.Wrapper>
                    {children}
                </ReactFullpage.Wrapper>
            );
        }}
    />
)
