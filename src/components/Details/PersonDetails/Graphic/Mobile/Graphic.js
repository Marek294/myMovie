import React from 'react';
import _ from 'lodash';

import Image from '../../../../../hoc/Image/Image';
import noPoster from '../../../../../assets/no_poster.jpg';
import classes from './Graphic.css';
import section from '../../../MobileSection.css';

const Graphic = (props) => {
    let images = _.uniqBy(props.images.profiles, 'file_path')

    images = images.map((item,i) => {
        return (
            <div key={i} className={classes.Item}>
                <Image src={['https://image.tmdb.org/t/p/original/',item.file_path].join('')} default={noPoster} alt="" shadow/>
            </div>
        )
    })

    return (
        <div className={[classes.Container,section.Container].join(' ')}>
            {images}
        </div>
    );
};

export default Graphic;