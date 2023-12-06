import React, {useState, useEffect} from 'react';

const ExpHeroCarouselController = () => {
    const [sliderKey, setSliderKey] = useState<any>(Date.now());

    useEffect(() => {
        setSliderKey(Date.now());
    }, []);

    return {sliderKey};
};

export default ExpHeroCarouselController;
