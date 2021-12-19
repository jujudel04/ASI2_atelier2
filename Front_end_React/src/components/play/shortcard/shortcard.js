import React, { useState } from 'react';
import '../../../lib/Semantic-UI-CSS-master/semantic.min.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

export const ShortCard = (props) => {

    return (
        <div class="ui special cards">
            <div class="card">

                <div class="content">
                    <div class="ui grid">
                        <div class="three column row">
                            <div class="column" >
                                <h5>{props.name}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="image imageCard">
                    <div class="ui fluid image">
                        <img  class="ui centered image" src={props.src}></img>
                    </div>
                </div>
            </div>

        </div>
    );
}

