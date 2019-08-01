import React from 'react'
import App from '../../App'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'

test('simple test', () => {
  expect(true).toBe(true)
})

test('<App /> renders without crashing', () =>{
  const wrapper = shallow(<App />)
})

test ('<App /> has 6 route components as children', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find(Route).length).toEqual(7)

})
