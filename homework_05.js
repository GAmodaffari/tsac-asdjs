function QueueItem(i, p) {
    this.item = i;
    this.priority = p;
}

function PriorityQueue() {
    this.Pqueue = [];
}

PriorityQueue.prototype.enqueue = function(e) { 
                                                 if(this.Pqueue.length==0)
                                                  {
                                                    this.Pqueue.push(e);
                                                  }else{
                                                        var index=0;
                                                 for(var i=0;i<this.Pqueue.length; i++)
                                                 {
                                                
                                                    if(this.Pqueue[i].priority>e.priority && index==0)
                                                
                                                       index=i;
                                                 }this.Pqueue.splice(index,0,e);}
                                              }
PriorityQueue.prototype.dequeue = function() { return this.Pqueue.pop(); }
PriorityQueue.prototype.front = function() { return this.Pqueue[this.Pqueue.length - 1]; }
PriorityQueue.prototype.size = function() { return this.Pqueue.length; }
PriorityQueue.prototype.isEmpty = function() { return this.size() == 0; }