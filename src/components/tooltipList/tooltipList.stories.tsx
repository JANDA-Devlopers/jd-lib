import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TooltipList, { TooltipButtons } from './TooltipList';
import JDcontainer from '../container/Container';
import { JDbutton, JDalign } from '../..';

export default {
    title: 'TooltipList',
    component: <TooltipList />,
    decorators: [withKnobs]
};

export const standard = () => {
    return (
        <JDcontainer verticalPadding>
            <JDalign
                flex>
                <div
                    data-tip
                    data-place="bottom"
                    data-for="menuId"
                    data-event="click"
                >
                    <JDbutton
                        label="열기" />
                </div>
            </JDalign>
            <TooltipList floatBottom >
                <TooltipButtons
                    Buttons={[
                        {
                            thema: "primary",
                            onClick: () => { },
                            label: "Apple",
                        },
                        {
                            thema: "primary",
                            onClick: () => { },
                            label: "peer",
                        },
                        {
                            thema: "primary",
                            onClick: () => { },
                            label: "banana",
                        },
                    ]}
                /></TooltipList>
        </JDcontainer>
    );
};

standard.story = {
    name: 'standard'
};
