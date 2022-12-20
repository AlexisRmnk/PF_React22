/* eslint-disable testing-library/render-result-naming-convention */
import {render } from '@testing-library/react'
import PlatformName from './PlatformName';

const renderPlatformName = () => {
    const component = render(<PlatformName platformName={"Test.com"} />);
    return component;
};

describe('<PlatformName />', () => {
    test('It should render PlatformName component', async () => {
        const component = renderPlatformName();
        expect(component.container).toBeInTheDocument();
    });
});