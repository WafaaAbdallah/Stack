class Node {
    constructor(data, nextNode) {
      this.data = data;
      this.nextNode = nextNode;
    }
  }
  
  class Stack {
    constructor(limit) {
      this.limit = limit;
      this.size = 0;
      this.topNode = null;
    }
  
    push = (data) => {
      if (this.isFull) {
        console.log(`Your stack is full, you can't add ${data}`);
      } else {
        const newNode = new Node(data);
        newNode.nextNode = this.topNode;
        this.topNode = newNode;
        this.size++;
      }
    };
  
    pop = () => {
      if (this.isEmpty) {
        return "Your stack is empty";
      } else {
        const popped = this.topNode;
        this.topNode = popped.nextNode;
        this.size--;
        return popped.data;
      }
    };
  
    get isFull() {
      return this.size === this.limit;
    }
  
    get isEmpty() {
      return this.size === 0;
    }
  
    get peek() {
      if (this.isEmpty) console.log("Your stack is empty. Add stuff!");
      else return this.topNode.data;
    }
  }
  
  const myBooks = new Stack(2);
  console.log(`The top node is: ${myBooks.peek}`);
  
  myBooks.push("Abdallah");
  myBooks.push("Omar");
  myBooks.push("Amjad");
  
  console.log(myBooks.topNode);
  
  console.log(myBooks.pop());
  console.log(myBooks.pop());
  console.log(myBooks.pop());
  
  // console.log(myBooks.topNode);