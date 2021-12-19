import React, { useState } from 'react';
import '../../../lib/Semantic-UI-CSS-master/semantic.min.css';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import { ShortCard } from '../shortcard/shortcard';

export const FourCards = (props) => {

    return (
        <div class="ten wide column">
            <div class="ui four column grid">
                <div class="column">
                <ShortCard name="Deapdool" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBZGrdnMzJNJg2zeSE-bhotNzCJ5nXKcgVQ&usqp=CAU"/>
                </div>
                <div class="column">
                <ShortCard name="Batman" src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2021/10/batman-ark-game-big__w1200.jpg"/>
                </div>
                <div class="column">
                <ShortCard name="SpiderMan" src="https://e7.pngegg.com/pngimages/203/497/png-clipart-spider-man-comic-book-spiderman-heroes-superhero-thumbnail.png"/>
                </div>
                <div class="column">
                <ShortCard name="IronMan" src="https://w7.pngwing.com/pngs/188/758/png-transparent-iron-man-s-armor-edwin-jarvis-thor-captain-america-iron-man.png"/>
                </div>
            </div>
        </div>
    );
}