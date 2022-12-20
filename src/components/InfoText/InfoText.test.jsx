/* eslint-disable testing-library/render-result-naming-convention */
import {render } from '@testing-library/react'
import InfoText from './InfoText';

const renderInfoText = () => {
    const component = render(<InfoText currentPageNewsNumber={1}
        totalResNum={10} searchTerm="test" />);
    return component;
};
const renderInfoText2 = () => {
    const component = render(<InfoText currentPageNewsNumber={0}
        totalResNum={0} searchTerm="test2" />);
    return component;
};

describe('<InfoText />', () => {
    test('It should render InfoText component', async () => {
        const component = renderInfoText();
        expect(component.container).toBeInTheDocument();
    });
    test('It should render InfoText component again', async () => {
        const component = renderInfoText2();
        expect(component.container).toBeInTheDocument();
    });
});