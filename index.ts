import { SinglyLinkedList } from "./code/LinkedList/Singly/code"

const singlyObj = new SinglyLinkedList()
singlyObj.append(1)
singlyObj.appendBefore(0.5, 1);
singlyObj.appendAnArrayItemAfterSomeElement(['Bereket', 'Alemayehu'], .5)
singlyObj.appendArrayOfItems(['I', 'am', '25', 'years', 'old'])
singlyObj.appendFirst(0)
singlyObj.appendLast('HiLCoE')
singlyObj.removeElemenet(1)
singlyObj.removeFromLast()
singlyObj.removeSomeNumberOfElements(5,2)
singlyObj.print();