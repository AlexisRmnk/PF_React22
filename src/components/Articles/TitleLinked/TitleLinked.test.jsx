/* eslint-disable testing-library/render-result-naming-convention */
import {render } from '@testing-library/react'
import TitleLinked from './TitleLinked';

const renderTitleLinked = () => {
    const component = render(<TitleLinked titlee={"Title Test"}
        linkToUrl={"https://www.google.com"} />);
    return component;
};

describe('<TitleLinked />', () => {
    test('It should render TitleLinked component', async () => {
        const component = renderTitleLinked();
        expect(component.container).toBeInTheDocument();
    });


});