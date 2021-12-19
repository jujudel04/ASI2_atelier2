import React, { useState } from 'react';
import '../../lib/Semantic-UI-CSS-master/semantic.min.css';
import '../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import { User } from './user/user';
import { PointPB } from './pointpb/pointpb';
import { FourCards } from './fourcards/fourcards';
import { Card } from './card/card';

//Create function component
export const Play = (props) => {

    return (
        <div class="ui segment">
            <div class="ui grid">
                <div class="four wide column">
                    <div id="chatContent"></div>
                </div>
                <div class="twelve wide column">
                    <div class="row">
                        <div class="ui grid">
                            <div class="two wide column">
                                <div class="ui one  column centered grid">
                                    <div class="row">
                                        <div class="column"> <i class="user circle huge icon "></i></div>
                                    </div>
                                    <User name="Basile" />

                                    <div class="row">
                                        <div class="column">
                                            <PointPB value="80"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="ten wide column">
                                <FourCards/>
                            </div>
                            <div class="four wide column">
                                <div id="fullCardA1"></div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="ui grid ">
                            <div class="twelve wide column">
                                <h4 class="ui horizontal divider header">
                                    VS
                                </h4>
                            </div>
                            <div class="four wide column">
                                <button class="huge ui primary button">
                                    Attack
                                </button>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="ui grid">
                            <div class="two wide column">
                                <div class="ui one  column centered grid">
                                    <div class="row">
                                        <div class="column">
                                            <PointPB value="10"/>
                                        </div>
                                    </div>

                                    <User name="Philippe" />
                                    <div class="row">
                                        <div class="column"> <i class="user circle huge icon "></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="ten wide column">
                             <FourCards/>
                            </div>
                            <div class="four wide column">
                                <div id="fullCardB1"></div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    );
}