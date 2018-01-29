import React from 'react';
import Autocomplete from 'react-toolbox/lib/autocomplete';
import {Card} from "react-toolbox/lib/card";
import DatePicker from 'react-toolbox/lib/date_picker';
import TimePicker from 'react-toolbox/lib/time_picker';

import theme from "./ConnectionSearchPanelTheme.scss"
import ConnectionDetails from "./connection_details/ConnectionDetails";

export default class ConnectionSearchPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
            time : new Date(),
        }
    }

    handleDateChange(newDate) {
        this.setState({date : newDate})
    }

    handleTimeChange(newTime) {
        this.setState({time : newTime})
    }

    render() {
        return (
            <Card className={theme.card}>
                <Autocomplete direction="down" selectedPosition="above" label="Z" icon="call_made"/>
                <Autocomplete theme={theme} direction="down" selectedPosition="above" label="Do" icon="call_received"/>
                <div>
                    <DatePicker inputClassName={theme.datePickerInput}
                                value={this.state.date}
                                onChange={this.handleDateChange.bind(this)}
                                label="Data odjazdu"
                                icon="date_range"
                    />
                    <TimePicker inputClassName={theme.timePickerInput}
                                value={this.state.time}
                                onChange={this.handleTimeChange.bind(this)}
                                label="Godzina odjazdu"
                                icon="access_time"
                    />
                </div>
                <ConnectionDetails/>
            </Card>
        );
    }
}
