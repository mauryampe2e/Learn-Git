for(var i=0;i<5;i++)
{
	setTimeout((function(){console.log(i)})(i),1000);
}



function Counter(){
	this.count = 0;
	this.getCount = function(){
		return this.count = this.count+1;
	}
}

var x = new Counter();


console.log(x.getCount());
console.log(x.getCount());
console.log(x.getCount());

console.log(x.getCount());
console.log(x.getCount());
console.log(x.getCount());
console.log(x.getCount());

console.log(x.getCount());
console.log(x.getCount());
console.log(x.getCount());
console.log(x.getCount());

console.log(x.getCount());
console.log(x.getCount());
console.log(x.getCount());
console.log(x.getCount());





