class sling{
    constructor(bodyA,pointB){ //bird object, log object
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.06,
            length:10
        }
        this.rope = Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.rope)
      
    }
    display(){
    if(this.rope.bodyA){
        strokeWeight(5)
            push()
                line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
                line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
            pop()
    }
    }
    fly(){
        this.rope.bodyA = null
    }
 
}