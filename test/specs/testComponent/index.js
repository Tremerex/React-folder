import { should } from 'chai';
import { TestComponent } from '../../components';


let testComponent = null;

describe('Test Component', () => {

  before(() => {
    testComponent = new TestComponent();
    should();
  });

  it('Should increment the count value', () => {
    const result = testComponent.clickCount();
    result.should.be.true;
  });

});
