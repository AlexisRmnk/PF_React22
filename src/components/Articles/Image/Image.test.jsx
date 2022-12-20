/* eslint-disable testing-library/render-result-naming-convention */
import {render } from '@testing-library/react'
import Image from './Image';

const URL_IMG_TEST = "https://generacionxbox.com/wp-content/uploads/2021/03/EA-play-Xbox-Game-Pass-Portada.jpg"

const renderImage = () => {
    const component = render(<Image imageUrl={URL_IMG_TEST} 
        titlee={"titulo test"} />);
    return component;
};

describe('<Image />', () => {
    test('It should render Image component', async () => {
        const component = renderImage();
        expect(component.container).toBeInTheDocument();
    });
});