import * as P from './types'
import * as T from './adapters'
import * as t from 'io-ts'

const v = <P.Document>{
  version: "polaris-1.0",
  uid: "1",
  msgHeader: {
    sender: {
      id: "1",
      participantType: "REG",
      name: "a"
    },
    recipient: {
      id: "1",
      participantType: "REG",
      name: "a"
    }
  },
  docType: {
    docTypeCode: "FORM"
  },
  docNum: "1",
  docDate: new Date(),
  taDocInfo: {
    taDocNum: "1",
    taDocDate: new Date()
  },
  sender: {
  }
}

function toString(v: P.Document) {
  return JSON.stringify(v, undefined, 2)
}

console.log(`v = ${toString(v)}`)
