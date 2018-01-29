import React from "react";
import {List, ListCheckbox} from "react-toolbox/lib/list";
import CollapsibleList from "./CollapsibleList";

const captions = {
    directConnection : "Połączenie bezpośrednie",
    bikesAllowed : "Przewóz rowerów",
    disabledFriendly : "Ułatwienia dla niepełnosprawnych"
};

const initialOpenedIndex = 0;

export default class ConnectionDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            details : {
                directConnection : false,
                bikesAllowed : false,
                disabledFriendly : false
            },
            meansOfTransport : {
                IC : true,
                TLK : true,
                REGIO : true
            },
            openedIndex : initialOpenedIndex
        };
    }

    checkboxSelectionChange(optionName) {
        if (this.state.details.hasOwnProperty(optionName)) {
            this.setState(
                {
                    details : {
                        ...this.state.details,
                        [optionName] : !this.state.details[optionName]
                    }
                });
        } else {
            this.setState(
                {
                    meansOfTransport : {
                        ...this.state.meansOfTransport,
                        [optionName] : !this.state.meansOfTransport[optionName]
                    }
                });
        }
    }

    renderCheckbox(optionName, captionText) {
        return (
            <ListCheckbox
                key={optionName}
                caption={captionText}
                checked={
                    this.state.details.hasOwnProperty(optionName)
                        ? this.state.details[optionName]
                        : this.state.meansOfTransport[optionName]
                }
                onChange={() => this.checkboxSelectionChange(optionName)}
            />
        );
    }

    changeOpenedIndex(index) {
        this.setState({openedIndex : index})
    }

    render() {
        return (
            <List>
                <CollapsibleList
                    index={0}
                    openedIndex={this.state.openedIndex}
                    changeOpenedIndex={this.changeOpenedIndex.bind(this)}
                    triggerCaption="Opcje połączeń"
                    checkboxOptions={this.state.details}
                    renderCheckbox={this.renderCheckbox.bind(this)}
                    checkboxCaptions={captions}
                />
                <CollapsibleList
                    index={1}
                    openedIndex={this.state.openedIndex}
                    changeOpenedIndex={this.changeOpenedIndex.bind(this)}
                    triggerCaption="Zaawansowane"
                    checkboxOptions={this.state.meansOfTransport}
                    renderCheckbox={this.renderCheckbox.bind(this)}
                    checkboxCaptions={
                        // ['A', 'B', 'C'] => {A: 'A', B: 'B', C: 'C'}
                        Object.keys(this.state.meansOfTransport)
                              .map(key => key.toString())
                              .reduce((object, key) => {
                                  object[key] = key;
                                  return object;
                              }, {})
                    }
                />
            </List>
        )
    }

}
