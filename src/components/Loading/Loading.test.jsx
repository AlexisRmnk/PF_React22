/* eslint-disable testing-library/render-result-naming-convention */
import {render } from '@testing-library/react'
import Loading from './Loading';

const renderLoading = () => {
    const component = render(<Loading />);
    return component;
};

describe('<Loading />', () => {
    test('It should render Loading component', async () => {
        const component = renderLoading();
        expect(component.container).toBeInTheDocument();
    });
});