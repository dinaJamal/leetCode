class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  findEmployee(index) {
    let curr = this.head;
    if (index > this.size - 1) {
      console.log("Not exists");
    } else {
      let c = 0;
      while (curr) {
        if (c == index) {
          console.log(curr.data);
        }
        curr = curr.next;
        c++;
      }
    }
  }

  reverseList() {
    let curr = this.head;
    let prev = null;

    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  deleteEmployee(index) {
    let curr = this.head;
    let c = 0;
    if (index < 0 || index >= this.size)
      console.log("Please Enter a valid index");
    else if (index == 0) {
      this.head = curr.next;
    } else {
      while (c < index - 1) {
        curr = curr.next;
        c++;
      }
      curr.next = curr.next.next;
    }
  }

  insertLast(data) {
    let curr = this.head;
    if (!curr) {
      this.head = new Node(data);
    } else {
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = new Node(data, this.curr);
    }
    this.size++;
  }

  isPalindrome() {
    let curr = this.head;
    let curr2 = this.head;
    let isPalin = true;
    const stack = [];
    while (curr) {
      stack.push(curr.data);
      curr = curr.next;
    }
    while (curr2) {
      if(curr2.data != stack.pop()){
        isPalin = false;
        break;
      }
      curr2 = curr2.next;
    }
    console.log(isPalin);
  }

  printList() {
    console.log("Employee List: ")
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

// const l1 = new LinkedList();
// let employee1 = {
//   name: "Ahmed",
//   age: 20,
// };
// let employee2 = {
//   name: "Dina",
//   age: 25,
// };
// let employee3 = {
//   name: "Jamal",
//   age: 65,
// };

// l1.insertLast(employee1);
// l1.insertLast(employee2);
// l1.insertLast(employee3);

// l1.reverseList();
// l1.printList();

// l1.findEmployee(3);

//  l1.deleteEmployee(2);

//  l1.printList();


let a = new LinkedList();
a.insertLast(1);
a.insertLast(2);

// a.reverseList();
// a.printList();
a.isPalindrome();