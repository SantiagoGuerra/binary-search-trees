class Node {
  constructor(key) {
    this.key = key;
    this.right = null;
    this.left = null
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null
  }

  /**
   * INSERT: The first method that we'll implement; it's the insert() method. This method will add a new
   * key depending its value
   */


  insert(key) {

    const insertNode = (node, key) => {
      if(key < node.key) {
        if(node.left === null) {
          node.left = new Node(key)
        } else {
          return insertNode(node.left, key)
        }
      } else {
        if (node.right === null) {
          node.right = new Node(key)
        } else {
          return insertNode(node.right, key)
        }
      }
    }

    if( this.root === null ) {
      
      this.root = new Node( key )
    
    } else {
      return insertNode(this.root, key)
    }
  }

  inOrder(callback) {
    
    const inOrderNode = (node, callback) =>{
      if(node != null) {
        inOrderNode(node.left, callback)
        callback(node.key)
        inOrderNode(node.right, callback)
      }
    }

    return inOrderNode(this.root, callback)

  }
}



const example = new BinarySearchTree()


example.insert(20)
example.insert(10)
example.insert(25)
example.insert(5)
example.insert(27)
example.insert(26)
example.insert(2)

example.inOrder(key => console.log(key))