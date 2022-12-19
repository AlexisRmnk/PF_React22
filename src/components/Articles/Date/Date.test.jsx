/* eslint-disable testing-library/render-result-naming-convention */
import {render } from '@testing-library/react'
import Date from './Date';

const DATE_EXAMPLE = "2022-12-11T10:02:00Z"

const renderDate = () => {
    const component = render(<Date datee={DATE_EXAMPLE} />);
    return component;
};

describe('<Date />', () => {
    test('It should render Date component', async () => {
        const component = renderDate();
        expect(component.container).toBeInTheDocument();
    });


});