import { getCoolName } from "../app/service"


describe('Service test suite', ()=>{

    test('Name should be cool', ()=>{
        
        const actual = getCoolName()
        const expected = 'CoolName';
        expect(actual).toBe(expected)
    });

})