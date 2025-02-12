import { marked } from 'marked';
import hardBreaks from '../src/index.js';

function trimLines(s) {
  return s.split('\n').map(l => l.trim()).join('\n');
}

describe('Hard Breaks', ()=>{
  test('Single Break', function() {
    marked.use(hardBreaks());
    expect(marked(trimLines(':\n\n'))).toMatchSnapshot();
  });

  test('Double Break', function() {
    marked.use(hardBreaks());
    expect(marked(trimLines('::\n\n'))).toMatchSnapshot();
  });

  test('Triple Break', function() {
    marked.use(hardBreaks());
    expect(marked(trimLines(':::\n\n'))).toMatchSnapshot();
  });

  test('Many Break', function() {
    marked.use(hardBreaks());
    expect(marked(trimLines('::::::::::\n\n'))).toMatchSnapshot();
  });

  test('Multiple sets of Breaks', function() {
    marked.use(hardBreaks());
    expect(marked(trimLines(':::\n:::\n:::'))).toMatchSnapshot();
  });

  test('Break directly between two paragraphs', function() {
    marked.use(hardBreaks());
    expect(marked(trimLines('Line 1\n::\nLine 2'))).toMatchSnapshot();
  });

  test('Ignored inside a code block', function() {
    marked.use(hardBreaks());
    expect(marked(trimLines('```\n\n:\n\n```\n'))).toMatchSnapshot();
  });
});
