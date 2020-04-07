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


  preOrder(callback) {
    const preOrderNode = (node, callback) => {
      if(node != null) {
        callback(node.key)
        preOrderNode(node.left, callback)
        preOrderNode(node.right, callback)
      }
    }

    return preOrderNode(this.root, callback)
  }

  postOrder(callback) {
    const postOrderNode = (node, callback) => {
      if(node != null) {
        postOrderNode(node.left, callback)
        postOrderNode(node.right, callback)
        callback(node.key, callback)
      }
    }

    return postOrderNode(this.root, callback)
  }

  min() {
    const minNode = (node) => {
      let currentNode = node
      while (currentNode.left != null) {
        currentNode = currentNode.left
      }
      return currentNode
    }

    return minNode(this.root)
  }

  max() {
    const maxNode = node => {
      let currentNode = node
      while (currentNode.right != null) {
        currentNode = currentNode.right
      }

      return currentNode
    }

    return maxNode(this.root)
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
console.log(" - - - - - - - ")
example.preOrder(key => console.log(key))
console.log(" - - - - - - - ")
example.postOrder(key => console.log(key))
console.log(" - - - - - - - ")
console.log(" - - - - - - - ")
console.log(example.min())
console.log(example.max())
