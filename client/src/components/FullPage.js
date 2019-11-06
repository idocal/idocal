import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

const scrollingSpeed = 1000;

export default ({ children }) => (
    <ReactFullpage
        scrollingSpeed = {scrollingSpeed}
        dragAndMove={true}
        fadingEffect={true}
        licenseKey={'0410E3D2-5EAB4F1A-BA2F2B25-070147F7'}
        render={(state, fullpageApi) => {
            return (
                <ReactFullpage.Wrapper>
                    {children}
                </ReactFullpage.Wrapper>
            );
        }}
    />
)
