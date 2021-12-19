import React, { useState } from 'react';
import '../../../lib/Semantic-UI-CSS-master/semantic.min.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

export const PointPB = (props) => {

    return (
        <container>
             <div class="row">
                <div class="column">
                    <div class="ui teal progress" data-percent="74" id="progressBarId1" >
                            <div class="bar"></div>
                            <div class="label">Action Points</div>
                    </div>
            </div>
            </div>
        </container>
    );
}