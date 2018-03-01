import lock from './lockReducer';
import * as actions from '../actions/lockActions';

it('lock reducer can be instantiated', () => {
  
});


describe('Course Reducer', () => {
    it('should update CurrentInputValue', () => {
        // arrange
        const initialState = {
            locked: false,
            valid:true,
            currentPin: '',
            currentInput: ''
        };
        const action=actions.updateCurrentInput('9');

        //act
        const newState=lock(initialState, action);

        //assert
        expect(newState.currentInput).toEqual('9');
    });

    it('should clear CurrentInputValue', () => {
        // arrange
        const initialState = {
            locked: false,
            valid:true,
            currentPin: '',
            currentInput: '8'
        };
        const action=actions.clearCurrentInput();

        //act
        const newState=lock(initialState, action);

        //assert
        expect(newState.currentInput).toEqual('');
    });

    it('should validate CurrentInput', () => {
        // arrange
        const initialState = {
            locked: false,
            valid:true,
            currentPin: '888',
            currentInput: '888'
        };
        const action=actions.validateCurrentInput();

        //act
        const newState=lock(initialState, action);

        //assert
        expect(newState.currentInput).toEqual('');
    });

    it('should validate CurrentPin', () => {
        // arrange
        const initialState = {
            locked: false,
            valid:true,
            currentPin: '123',
            currentInput: ''
        };
        const action=actions.updateCurrentPin('888');

        //act
        const newState=lock(initialState, action);

        //assert
        expect(newState.currentPin).toEqual('888');
    });

    it('should init store', () => {
        // arrange
        const initialState = {
            locked: false,
            valid:true,
            currentPin: '123',
            currentInput: ''
        };
        const action=actions.InitStore();

        //act
        const newState=lock(initialState, action);

        //assert
        expect(newState.currentPin).toEqual('123');
    });

});