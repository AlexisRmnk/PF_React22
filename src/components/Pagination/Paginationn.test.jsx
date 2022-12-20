/* eslint-disable testing-library/render-result-naming-convention */
import {render } from '@testing-library/react'
import Paginationn from './Paginationn';

const renderPagination = () => {
    const component = render(<Paginationn 
        pageAmount={10} onChange2={ jest.fn() } />);
    return component;
};

describe('<Paginationn />', () => {
    test('It should render Paginationn component', async () => {
        const component = renderPagination();
        expect(component.container).toBeInTheDocument();
    });
});