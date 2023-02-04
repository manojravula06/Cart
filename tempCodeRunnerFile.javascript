function ListNode(data){
    this.data=data;
    this.pointer=null;
}

function LinkedList(){
    this.head=null;
    this.length=0;
}

LinkedList.prototype.insertAtStart=function(data){
    let node=new ListNode(data);
    let lastNode=this.head;

    while(lastNode.pointer!==null){
        lastNode=lastNode.pointer;
    }
    lastNode.pointer=node;
}

const linkedList=new LinkedList();
linkedList.insertAtStart(100);
linkedList.insertAtStart(200);


console.log(linkedList)