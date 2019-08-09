import React from 'react'
import { shallow } from 'enzyme'

import Navigation from '../Navigation'
import * as Auth0 from '../../react-auth0-wrapper'

import { Link } from 'react-router-dom'

describe('<Navigation /> functionality', () =>{

  describe('isAuthenticated = false', () =>{

    test('<Navigation /> renders 3 Link components and renders one button when isAuthenticated = false', () => {
      jest.spyOn(Auth0, 'useAuth0').mockImplementation(() => {
        return {
          isAuthenticated: false
        }
      })
    
      const wrapper = shallow(<Navigation />)
    
      expect(wrapper.find(Link).length).toBe(5)
    
      expect(wrapper.find('button'))
    })

  })

  
  describe('isAuthenticated = true', () =>{
    it('<Navigation /> renders 4 Link components when isAuthenticated = true', () => {
      jest.spyOn(Auth0, 'useAuth0').mockImplementation(() => {
        return {
          isAuthenticated: true
        }
      })
  
      const wrapper = shallow(<Navigation />)
  
      expect(wrapper.find(Link).length).toBe(4)
    })
  
    it('<Navigation /> renders 1 button isAuthenticated = false', () => {
      jest.spyOn(Auth0, 'useAuth0').mockImplementation(() => {
        return {
          isAuthenticated: false
        }
      })
  
      const wrapper = shallow(<Navigation />)
  
      expect(wrapper.find('button').length).toBe(1)
    })

  })
})