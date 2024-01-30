// a linkedList is essentially just an object that points to a head designated as the head node;
// a node in a list is an object with two things: a value and a pointer to another node
// to add a node to the end of a linkedlist means finding the node that is the tail of the list. starting from the head
// the tail is the node whose nextNode place is null

class ListNode {
    constructor(value=null, nextNode=null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export default class LinkedList {
    constructor(head=null) {
        this.head = head;
    }

    // tail returns the last node in the list 
    tail() {
        if (this.head.nextNode === null) {
            return this.head;
        } else {
            const newList = new LinkedList(this.head.nextNode);
            return newList.tail();
        };
    };

    // append(value) adds a new node containing value to the end of the list
    append(value) {
        const newNode = new ListNode(value, null);
        if (this.head === null) {
            this.head = newNode;
        } else {
            const tailNode =  this.tail();
            tailNode.nextNode = newNode;
        };
    }

    // prepend(value) adds a new node containing value to the start of the list
    prepend(value) {
        const newNode = new ListNode(value, null);
        if (this.head === null) {
            this.head = newNode;
        } else {
            const formerHead = this.head;
            newNode.nextNode = formerHead;
            this.head = newNode;
        };
    }
    
    // size returns the total number of nodes in the list
    size(count = 0) {
        if (this.head === null) {
            return count;
        };
        if (this.head.nextNode === null) {
            return count + 1;
        } else {
            const newList = new LinkedList(this.head.nextNode);
            return newList.size(count+1);
        };        
    }

    // at(index) returns the node at the given index
    at(index) {
        if (index === 0) {
            return this.head;
        } else {
            const newList = new LinkedList(this.head.nextNode);
            return newList.at(index-1);
        };
    }

    // pop removes the last element from the list
    pop() {
        if (this.head === null) {
            console.log("empty list")
        };
        if (this.head.nextNode === null) {
            this.head = null;
        }; 
        if (this.head.nextNode.nextNode === null) {
            this.head.nextNode = null;
        } else {
            const newList = new LinkedList(this.head.nextNode);
            newList.pop();
        };
    }

    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        if (this.head === null) {
            return false;
        };
        if (this.head.value === value) {
            return true;
        };
        if (this.head.nextNode === null) {
            return false;
        }
        if (this.head.nextNode.value === value) {
            return true;
        } else {
            const newList = new LinkedList(this.head.nextNode);
            return newList.contains(value);
        };
    }

    // removes the value from the linkedlist
    remove(key) {
        let targetNode = this.at(this.find(key));
        const listSize = this.size();
        
        for (let i=0; i<listSize; i++) {
            if (targetNode === this.at(i)) {
                if (i === 0) {
                    this.head = targetNode.nextNode;
                    break;
                }
                this.at(i-1).nextNode = targetNode.nextNode
            }
        }
    }

    // find(key) returns the index of the node containing key, or null if not found.
    find(key, index = 0) {
        if (this.head === null) {
            return null;
        };
        if (Object.keys(this.head.value)[0] === key) {
            return index;
        };
        if (this.head.nextNode === null) {
            return null;
        };
        if (Object.keys(this.head.nextNode.value)[0] === key) {
            return index + 1;
        } else {
            const newList = new LinkedList(this.head.nextNode);
            return newList.find(key, index + 1);
        };
    }

    // toString represents your LinkedList objects as strings, so you can print them 
    // out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    // 3 -> 1 -> 2 -> null
    toString(string = '') {
        if (this.head === null) {
            string += 'null';
            return string;
        } else {
            string += `( ${this.head.value} ) -> `;
            const newList = new LinkedList(this.head.nextNode);
            return newList.toString(string);
        };
    }

    transformIntoArray(arrayOfValues = []) {
        if (this.head == null) {
            return arrayOfValues;
        } else {
            arrayOfValues.push(this.head.value);
            const newList = new LinkedList(this.head.nextNode);
            return newList.transformIntoArray(arrayOfValues);
        };
    }
    
}


// const listNode1 = new ListNode(1, null);
// const linkedList1 = new LinkedList(listNode1);
 /*

 linkedList1 = new LinkedList(node1)
 
 node1 = {
    value: 1
    nextNode: node2
 }

 node2 = {
    value: 2
    nextNode: node3
 }

 node3 = {
    value: 3
    nextNode: null
 }
 
Get a reference to the target node
 let targetNode = this.at(this.find(key));

Get the size of the list
 const listSize = this.size();

Walk through linkedList
 for (i=0; i<listSize; i++) {
    if (targetNode === this.at(i)) {
        if (i === 0) {
            this.head = targetNode.nextNode;
        }
        this.at(i-1).nextNode = targetNode.nextNode
    }
 }
 */
    
 
