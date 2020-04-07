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

  minNode (node) {
    let currentNode = node
    while (currentNode.left != null) {
      currentNode = currentNode.left
    }
    return currentNode
  }

  min() {
    return this.minNode(this.root)
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

  search(key) {

    const searchNode = (node, key) => {
      if(node === null) {
        return false
      }

      if (key < node.key ) {
        return searchNode(node.left, key)
      } else if ( key > node.key) {
        return searchNode(node.right, key)
      } else {
        return true
      }
    }

    return searchNode(this.root, key)

  }

  remove(key) {
    const removeNode = (node, key) => {

      if (node === null) {
        return null
      }
      if (key < node.key ) {
        node.left = removeNode(node.left, key)
        console.log("Current Node L" + node.key)
        return node
      } else if ( key > node.key ) {
        node.right = removeNode(node.right, key)
        console.log("Current Node R" + node.key)
        return node
      } else {
        if(node.left === null && node.right === null) {
          node = null
          console.log("Current Node F" + node)
          return node
        }

        if(node.left === null) {
          node = node.right
          return node 
        } else if (node.right === null) {
          node = node.left
          return node
        }

        let aux = this.minNode(node.right)
        node.key = aux.key
        node.right = removeNode(node.right, aux.key)
        return node
      }
    }

    return removeNode(this.root, key)
  }
}



const example = new BinarySearchTree()


example.insert(11)
example.insert(7)
example.insert(5)
example.insert(3)
example.insert(6)
example.insert(9)
example.insert(8)
example.insert(10)
example.insert(15)
example.insert(13)
example.insert(12)
example.insert(14)
example.insert(20)
example.insert(18)
example.insert(25)
example.remove(6)
example.remove(5)
example.remove(15)














example.inOrder(key => console.log(key))
console.log(" - - - - - - - ")
example.preOrder(key => console.log(key))
console.log(" - - - - - - - ")
example.postOrder(key => console.log(key))
console.log(" - - - - - - - ")
console.log(" - - - - - - - ")
console.log(example.min())
console.log(example.max())
console.log(example.search(15))
