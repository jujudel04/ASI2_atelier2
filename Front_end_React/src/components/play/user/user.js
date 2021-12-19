import React, { useState } from 'react';
import '../../../lib/Semantic-UI-CSS-master/semantic.min.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import { Container } from 'semantic-ui-react';

export const User = (props) => {

    return (
        <container>
            <div class="row">
                <div class=" column">{props.name}</div>      
            </div>
        </container>
    );
}