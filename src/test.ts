import { main } from './app';
import { expect } from 'chai';
import { mockDOMSource } from '@cycle/dom';
import xsAdapter from '@cycle/xstream-adapter';

describe('App', () => {
  it('should have dom as a sink', () => {
    const sources = {
      dom: mockDOMSource(xsAdapter, {})
    }
    const sinks = main(sources);
    expect(sinks.dom).to.exist;
  })
});
