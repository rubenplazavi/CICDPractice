import { getCoolName } from "../app/service"


describe('Service test suite', ()=>{

    test('Name should be cool', ()=>{
        
        const actual = getCoolName()
        const expected = 'VeryCoolName_chaged_toBreak_thePipeline';
        expect(actual).toBe(expected)
    });

})