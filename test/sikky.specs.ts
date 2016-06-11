// declare module '~chai/lib/Assertion' {
//   interface Assertion {
//     class: any;
//   }
// }

declare var describe: any;
declare var it: any;
declare var beforeEach: any;
declare var afterEach: any;
declare var chai: any;

describe('Simplest Test Ever', () => {
  it('true is true', () => {
    chai.expect(true).to.equal(true);
  });
});

describe('Test some DOM', () => {

  beforeEach(function() {
    var fixture = '<div id="foo" class="bar">1</div>';
    document.body.insertAdjacentHTML('afterbegin', fixture);
  });

  afterEach(function() {
    document.body.removeChild(document.getElementById('foo'));
  });

  it('Test DOM using chai and JS document calls', () => {
    let testDiv = document.getElementById('foo');
    let innerHtmlOfTestDiv = testDiv.innerHTML;
    chai.expect(innerHtmlOfTestDiv).to.equal('1');
  });
});
