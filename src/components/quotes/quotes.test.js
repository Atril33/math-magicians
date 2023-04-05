import renderer from 'react-test-renderer';
import MyQuotes from './quotes';

test("Snapshot testing of Quotes.js", () => {
 const comp = renderer.create(
   <MyQuotes />
 );
 let tree = comp.toJSON();
 expect(tree).toMatchSnapshot();
});