class Slingshot{
    constructor(){
        var options = {
            stiffness: 0.04,
            length: 10
        }
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    display(){

    }
}