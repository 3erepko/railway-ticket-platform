import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import MainContainer from './MainContainer';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root'),
    )
}

render(MainContainer);

if (module.hot) {
    module.hot.accept('./MainContainer', () => {
        render(MainContainer)
    })
}
