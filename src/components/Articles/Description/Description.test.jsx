/* eslint-disable testing-library/render-result-naming-convention */
import {render } from '@testing-library/react'
import Description from './Description';

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt exercitationem, iusto eos sit temporibus eligendi dicta aut animi voluptatibus veritatis voluptates perferendis iure, similique adipisci dignissimos blanditiis soluta amet consectetur."

const renderDescription = () => {
    const component = render(<Description description={LOREM} />);
    return component;
};

describe('<Description />', () => {
    test('It should render Description component', async () => {
        const component = renderDescription();
        expect(component.container).toBeInTheDocument();
    });
});