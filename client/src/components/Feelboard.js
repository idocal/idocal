import React from 'react';
import FlexView from 'react-flexview';
import { projects } from '../config';

const project = projects['feelboard'];

function Feelboard(props) {
    const section1 =
        <FlexView column>

            <FlexView className="case-image" vAlignContent="center" hAlignContent="right">
                <div className="image" />
            </FlexView>

            <FlexView column className="info" hAlignContent="left">
                <h2>{project.sections[0].title}</h2>
                <p>{project.sections[0].text}</p>
            </FlexView>

        </FlexView>;

    const sections = [section1];
    return (
        sections.map((section, i) => {
            return (
                <FlexView className="section case-section" column key={i}>
                    { section }
                </FlexView>
            )
        })
    )
}


export default Feelboard;