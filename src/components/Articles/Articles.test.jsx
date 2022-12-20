/* eslint-disable testing-library/render-result-naming-convention */
import {render } from '@testing-library/react'
import ArticleList from './Articles';
import newsExamples from './newsExamplesForTesting';

const renderArticleList = () => {
    const component = render(<ArticleList news={newsExamples}/>);
    return component;
};

describe('<ArticleList />', () => {
    test('It should render Articles component', async () => {
        const component = renderArticleList();
        expect(component.container).toBeInTheDocument();
    });
});