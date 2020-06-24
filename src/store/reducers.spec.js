import resultReducer from './reducers';
describe('Test Reducer', () => {
    it('should update state correctly', () => {

        let initState = {
            input: [], total: 0
        }
        expect(resultReducer(initState, { type: 'UPDATE_RESULT', payload: "1,3,5" })).toEqual({
            input: ["1", "3", "5"], total: 9
        })
    })
})