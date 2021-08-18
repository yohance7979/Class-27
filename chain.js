class Chain{
    constructor(firstBody,secondBody){
        var options = {
            bodyA:firstBody,
            bodyB:secondBody,
            length:40,
            stiffness:0.5,

        }
        this.chain=Matter.Constraint.create(options)
        World.add(world,this.chain)
        
    }
    display(){
        
        
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
         
    }
}