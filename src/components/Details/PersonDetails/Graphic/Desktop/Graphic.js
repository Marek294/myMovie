import React from 'react';
import _ from 'lodash';

import Image from '../../../../../hoc/Image/Image';
import noPoster from '../../../../../assets/no_poster.jpg';
import classes from './Graphic.css';

const Graphic = (props) => {
    let images = _.uniqBy(props.images.profiles, 'file_path')

    images = images.map((item,i) => {
        return (
            <div key={i} className={classes.Item}>
                <div className={classes.ImageContainer}>
                    <Image src={['https://image.tmdb.org/t/p/original/',item.file_path].join('')} default={noPoster} alt="" />
                </div>
            </div>
        )
    })

    return (
        <div className={classes.Container}>
            {images}
        </div>
    );
};

export default Graphic;