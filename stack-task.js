// class Node {
//     constructor(color, number,nextNode=null) {
//       this.color = color;
//       this.number = number;
//       this.nextNode = nextNode
//     }
//   }
//   class Stack {
//     constructor(limit=20) {
//       this.limit = limit;
//       this.size = 0;
//       this.topNode = null;
//     }
//   }
//   push = (color,number) => {
//     if (this.isFull) {
//       console.log(`Your stack is full`);
//     } else {
//       const newNode = new Node(color,number);
//       newNode.nextNode = this.topNode;
//       this.topNode = newNode;
//       this.size++;
//     }
//   };

//   pop = () => {
//     if (this.isEmpty) {
//       return "Your stack is empty";
//     } else {

//       const removedNode = this.topNode;
//       this.topNode = popped.nextNode;
//       this.size--;
//       return popped.data;
//     }
//   };

//  isFull=()=> {
//     return this.size === this.limit;
//   }

//   isEmpty=()=>{
//     return this.size === 0;
//   }

//    peek= ()=> {
//     return this.topNode.data;
//   }

//   let arrNum= [1,2,3,4,5,6,7,8,9];
//   let arrCol=["yellow","green","blue","red"];
   

//    const random =(array)=>{
//     const card = Math.floor(Math.random() *array.length) ;
//     return array[card];
//    }
    
   class Node{
    constructor(color, number, next=null){
      this.color = color;
      this.number = number;
      this.next = next;
    }
    getData(){
      return (`${this.color} - ${this.number}`);
    }
  }

  class stack  {
    constructor(limit = 20){  
    this.limit = limit
      this.size = 0
      this.topNode = null
    } 

    isFull = () => {
        return this.size === this.limit
    }

    isEmpty = () => {
        return this.size === 0
    }

    push = (color , number) => {
        if (this.isFull()) 
        console.log(`your deck is full!!`)
        else {
        const newNode = new Node(color , number , this.topNode)
        this.topNode = newNode
        this.size++
        }
    }
    pop = () => {
        if (this.isEmpty())
        console.log(`your deck is empty`)
        else{
        const popped = this.topNode
        this.topNode = popped.next
        this.size--
        return popped.getData()
        }
    }

    get peek() {
        if (this.isEmpty) 
        console.log(`your deck is empty`)
        else return this.topNode.getData()
    }
   display = () => {
       let currentNode = this.topNode
       while(currentNode){
           console.log(`number : ${currentNode.number} , color : ${currentNode.color}`)
           currentNode = currentNode.next
       }
   }
   includes = (color , number) => {
   let currentNode = this.topNode
   while(currentNode) {
       if (currentNode.number === number && currentNode.color === color) 
           return true
           currentNode = currentNode.next
   }
   return false
  }
}

  const colors = ["red" , "blue" , "yellow" , "green"]
  const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]


  const random = (array) => {
      const index = Math.floor(Math.random()*array.length)
      return array[index]
  }

  const cardsStack = new stack(20)
  //const cardsArray = []

  while (!cardsStack.isFull()) {
      const number = random(numbers)
      const color = random(colors)
      if (!cardsStack.includes(color, number))
      cardsStack.push(color , number)
  }

  console.log(" Deck : ")
  cardsStack.display()

   let player1 = []
   let player2 =[]
   
   let i = 0
   while (i < 5) {
       player1.push(cardsStack.pop())
       player2.push(cardsStack.pop())
       i++
   }
   console.log("player 1 cards : " , player1)
   console.log("player 2 cards : " , player2)   
   
