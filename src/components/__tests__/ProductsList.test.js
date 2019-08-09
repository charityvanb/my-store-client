import React from 'react'
import { shallow } from 'enzyme'
import Loader from '../Loader'

import ProductsList from '../ProductsList'
import ProductCard from '../ProductsList/ProductCard'

describe('<ProductsList /> functionality', () => {

  describe('initial component render', () => {
    let wrapper
    const spyDidMount = jest.spyOn(ProductsList.prototype, 'componentDidMount')
    
  
    beforeEach( () => {
      wrapper = shallow(<ProductsList/>)
      console.log('before first set of tests')
    })
  
    afterEach( () => {
      spyDidMount.mockReset()
      console.log('after first set of tests')
    })

    afterAll(() => {
      spyDidMount.mockRestore()
    })
  
    it('calls componentDidMount 1 time', () =>{
      expect(spyDidMount).toHaveBeenCalledTimes(1)
    })
  
    it('renders without crashing', () => {
      expect(wrapper).toBeTruthy()
    })
  
    it('render a <Loader /> if no data is fetched', () =>{
  
      expect(wrapper.find(Loader).length).toBe(1)
    })
    it('has an IsLoaded property on that=false', ()=>{
      expect(wrapper.state('isLoaded')).toBe(false)        
    })
  
    it('has an empty product array on state', () => {
      expect(wrapper.state('products').length).toBe(0)
    })
  
    it('renders a header', () => {
      expect(wrapper.find('header').length).toBe(1)
    })

  })

  describe('render after data is fetched', () => {
    let wrapper

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          // refactor to include a full API response
          return Promise.resolve({
            products: [{ id: 1, name: 'product1'}, { id: 2, name: 'product2'}]
          })
        }
      })
    })

    beforeEach(() =>{
      console.log('after 2nd set of tests')
      wrapper = shallow(<ProductsList />)
    })

    it('renders loader if no data featched', () => {
      expect(wrapper.find(Loader).length).toBe(0)
    })

    it('renders ProductCard components if data has been fetched', ()=>{
      expect(wrapper.find(ProductCard).length).toBe(2)
    })

    it('renders a header', () => {
      expect(wrapper.find('header').length).toBe(1)
    })

    it('has an isLoaded property in state set to true', () => {
      expect(wrapper.state('isLoaded')).toBe(true)
    })

    it('has an array of products on state', () =>{
      expect(wrapper.state('products').length).toBe(2)
    })
  })

})