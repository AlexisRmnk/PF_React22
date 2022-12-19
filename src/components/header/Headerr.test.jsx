/* eslint-disable testing-library/render-result-naming-convention */
import {render } from '@testing-library/react'
import Headerr from './Headerr';

const renderHeader = () => {
    const component = render(<Headerr />);
    return component;
};

describe('<Headerr />', () => {
    test('It should render Headerr component', async () => {
        const component = renderHeader();
        expect(component.container).toBeInTheDocument();
    });


});