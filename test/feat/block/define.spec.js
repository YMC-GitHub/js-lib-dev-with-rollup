// include some file to test
import Doc from '../../../src/index.js'
// include some data for test
import data from './data'
// include some lib for test
import chai from 'chai'
import fs from 'fs'
import path from 'path'

const expect = chai.expect
// ----test----
const doc = Doc.apidoc('hi', null)
const __data = Object.assign({}, data)
delete __data.use
delete __data.api
Object.keys(__data).forEach(v => doc.property(v, __data[v]))
doc.registerMethod()

// when the first test,use next line to help you
// fs.writeFileSync(path.join(__dirname, './data-define-expect.txt'), doc.toStr())

const expectData = fs
  .readFileSync(path.join(__dirname, './data-define-expect.txt'))
  .toString()
describe('data', function() {
  it('expect json-format-data to equal apidoc-str-format-data', function() {
    expect(doc.toStr()).to.be.equal(expectData)
  })
})
