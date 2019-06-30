'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less'
import logo from './image/logo.png'
import LargeNumber from 'liuzhen-large-number'

class Search extends React.Component{
    render(){
        const num = LargeNumber('999','1')
        return <div className="search-text">
            { num }
            search test webpack-dev-server
            <img src={ logo } />
        </div>;
    }
}
ReactDOM.render(
    <Search />,
    document.getElementById('root')
);