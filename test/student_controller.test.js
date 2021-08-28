const { getStudent } = require('../controllers/student_controller')
describe('Student controller', () => {
  it("Should get student",()=>{
    const result = getStudent('Danilo')

    const assert = {
      id: 1,
      name:'Danilo',
      age:80
    }

    expect(result).toEqual(assert)

  })
})