import React from "react";
import Collapsible from "react-collapsible";

import PropTypes from 'prop-types';
import {ListItem} from 'react-toolbox/lib/list';

import theme from "./ConnectionDetailsTheme.scss";

const CollapsibleList = (props) => {
    return (
        <Collapsible open={props.index == props.openedIndex}
                     handleTriggerClick={props.changeOpenedIndex}
                     transitionTime={225}
                     easing="ease-in-out"
                     accordionPosition={props.index}
                     contentOuterClassName={theme.item}
                     trigger={
                         <ListItem theme={theme}
                                   rightIcon="keyboard_arrow_down"
                                   caption={props.triggerCaption}
                         />
                     }
                     triggerWhenOpen={
                         <ListItem theme={theme}
                                   rightIcon="keyboard_arrow_up"
                                   caption={props.triggerCaption}
                         />
                     }>
            {Object.keys(props.checkboxOptions)
                   .map(optionName => {
                       return props.renderCheckbox(optionName, props.checkboxCaptions[optionName])
                   })
            }
        </Collapsible>
    )
};

CollapsibleList.propTypes = {
    open : PropTypes.bool,
    index : PropTypes.number,
    triggerCaption : PropTypes.string,
    checkboxOptions : PropTypes.object,
    renderCheckbox : PropTypes.func,
    checkboxCaptions : PropTypes.object,
    openedIndex : PropTypes.number,
    changeOpenedIndex : PropTypes.func
};

export default CollapsibleList;
