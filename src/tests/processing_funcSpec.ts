import {transform} from '../processing_func';


// testing of resizing function
describe('test for processing function', () => {

    it('should be resolved  make transform function',async()=>{
        await expectAsync(transform('fjord',200,250)).toBeResolved()
    })

    it('should be rejected  if i put wrong name',async()=>{
        await expectAsync(transform('pjord',200,250)).toBeRejected()
    })
    
  });


  
  