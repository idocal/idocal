import React from 'react';
import FlexView from 'react-flexview';
import { projects } from '../config';


const project = projects['motionsense'];

function MotionSense(props) {
    const section1 =
        <div className="case-section half motionsense-section-1">

            <div className="info grow center">
                <h2>{project.sections[0].title}</h2>
                <p>{project.sections[0].text}</p>
            </div>

        </div>;

    const section2 =
        <div className="case-section half motionsense-section-2">

            <div className="info center">
                <h2>{project.sections[1].title}</h2>
                <p>{project.sections[1].text}</p>
            </div>

        </div>;

    const section3 =
        <div className="case-section half motionsense-section-3">

            <div className="info grow center">
                <h2>{project.sections[2].title}</h2>
                <p>{project.sections[2].text}</p>
            </div>

        </div>;



    const sections = [
        {
            section: section1,
            mode: 'logomode-dark',
        },
        {
            section: section2,
            mode: 'logomode-bright',
        },
        {
            section: section3,
            mode: 'logomode-dark',
        }
    ];

    return (
        sections.map(({section, mode}, i) => {
            return (
                <FlexView className={"section motionsense " + mode} column key={i}>
                    {section}
                </FlexView>
            );
        })
    )
}


export default MotionSense;