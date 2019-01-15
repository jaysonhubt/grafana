import React from 'react';
import { shallow } from 'enzyme';
import { FormGroup, Props } from './FormGroup';

const setup = (propOverrides?: object) => {
  const props: Props = {
    label: 'Test',
    labelWidth: 11,
    inputProps: {
      value: 10,
      onChange: jest.fn(),
    },
  };

  Object.assign(props, propOverrides);

  return shallow(<FormGroup {...props} />);
};

describe('Render', () => {
  it('should render component', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
