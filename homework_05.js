function QueueItem(i, p) {
    this.item = i;
    this.priority = p;
}

function PriorityQueue() {
    this.queue = [];
}

PriorityQueue.prototype.enqueue = function(e) { 
        var index = 0;
        var found = false;
        while (index < this.Pqueue.length && !found) {
            var item = this.Pqueue[index];
            if(e.priority < item.priority) {
                found = true;
            } else {
                index++;
            }
        }
        this.Pqueue.splice(index, 0, e);
}
PriorityQueue.prototype.dequeue = function() { return this.Pqueue.pop(); }
PriorityQueue.prototype.front = function() { return this.Pqueue[this.Pqueue.length - 1]; }
PriorityQueue.prototype.size = function() { return this.Pqueue.length; }
PriorityQueue.prototype.isEmpty = function() { return this.size() == 0; }



/* callback */

function PriorityQueueC(sortfunction) {
    this.Pqueue = [];
    this.callback = sortfunction;
}

PriorityQueueC.prototype.enqueue = function(e) { 
    var index = 0;
    var found = false;
    while (index < this.Pqueue.length && !found) {
        var item = this.Pqueue[index];
        //if(e.priority < item.priority) {
        if(this.callback(e.priority, item.priority) == -1) {
            found = true;
        } else {
            index++;
        }
    }
    this.Pqueue.splice(index, 0, e);
}
PriorityQueueC.prototype.dequeue = function() { return this.Pqueue.pop(); }
PriorityQueueC.prototype.front = function() { return this.Pqueue[this.Pqueue.length - 1]; }
PriorityQueueC.prototype.size = function() { return this.Pqueue.length; }
PriorityQueueC.prototype.isEmpty = function() { return this.size() == 0; }

var pqc = new PriorityQueueC(function(a, b) { 
    if (a < b) return 1 
    else if (a == b) return 0; 
    else return -1;  });

pqc.enqueue(new QueueItem('J', 7));
pqc.enqueue(new QueueItem('L', 6));
pqc.enqueue(new QueueItem('K', 5));

console.log(pqc.dequeue().item);
