import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Calculator from '../Components/Calculator';

it('Calculator component renders correctly', () => {
  const tree = renderer.create(<Calculator />)
    .toJSON(); expect(tree).toMatchSnapshot();
});
