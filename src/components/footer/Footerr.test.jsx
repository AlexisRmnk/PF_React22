/* eslint-disable testing-library/render-result-naming-convention */
import {render } from '@testing-library/react'
import Footerr from './Footerr';

const renderFooter = () => {
    const component = render(<Footerr />);
    return component;
};

describe('<Footerr />', () => {
    test('It should render Footerr component', async () => {
        const component = renderFooter();
        expect(component.container).toBeInTheDocument();
    });
});