// IMPORT MODULES under test here:
// import example from '../src/example.js';
import findById from '../common/utils.js';
import calcLineItem from '../common/utils.js';
import renderLineItem from '../shopping cart/render-line-items.js';
import vacations from '../data/vacations.js';

const test = QUnit.test;
QUnit.module('test utils');

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 3;
    const price = 15;
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = 45;
    const result = calcLineItem(quantity, price);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});


test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const lineItem = {
        id: 'kayak',
        quantity:'2'
    };

    const expected = '<tr></tr>';

    
    //Act 
    // Call the function you're testing and set the result to a const

    const result = renderLineItem(lineItem, findById(vacations, lineItem.id)).outerHTML; 
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});