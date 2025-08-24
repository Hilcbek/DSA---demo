import { SinglyLinkedList } from "./code/LinkedList/Singly/code"

const singlyObj = new SinglyLinkedList()
singlyObj.append(100)
singlyObj.append(200)
singlyObj.append(300)
singlyObj.appendFirst(99)
singlyObj.appendFirst('Bereket')
singlyObj.appendLast('Alemayehu')
singlyObj.appendArrayOfItems(['arra1','arr2', 'arr3'])
singlyObj.appendAnArrayItemAfterSomeElement(['arra1','arr2', 'arr3'], 300)
console.log('current ',singlyObj.print())