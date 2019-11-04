import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";

const scrollingSpeed = 1000;

export default ({ children }) => (
    <ReactFullpage
        scrollingSpeed = {scrollingSpeed}
        dragAndMove={true}
        fadingEffect={true}
        render={() => {
            return (
                <ReactFullpage.Wrapper>
                    {children}
                </ReactFullpage.Wrapper>
            );
        }}
    />
)
