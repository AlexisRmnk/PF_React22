/* eslint-disable testing-library/render-result-naming-convention */
import {render } from '@testing-library/react'
import Logo from './Logo';

const renderLogo = () => {
    const component = render(<Logo />);
    return component;
};

describe('<Logo />', () => {
    test('It should render Logo component', async () => {
        const component = renderLogo();
        expect(component.container).toBeInTheDocument();
    });


});