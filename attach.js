class  Attach{

constructor(bodyA,bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness: 0.04,
length:10

}
this.atach = Constraint.create(options)

World.add(world,this.atach)
}

display(){
var pointA  = this.atach.bodyA.position
var pointB = this.atach.bodyB.position

line (pointA.x,pointA.y,pointB.x,pointB.y)
}
} 