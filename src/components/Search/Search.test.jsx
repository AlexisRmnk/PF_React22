/* eslint-disable testing-library/render-result-naming-convention */
import {render } from '@testing-library/react'
import Search from './Search';

const renderSearch = () => {
    const component = render(<Search onSearch={ jest.fn()} />);
    return component;
};

describe('<Search />', () => {
    test('It should render Search component', async () => {
        const component = renderSearch();
        expect(component.container).toBeInTheDocument();
    });
});