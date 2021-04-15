class Package{
    constructor(){
        var options = {
            isStatic : true,
            restitution : 0.4

        }

        this.body = Bodies.rectangle(width/2 , 200 , 5 ,options);
        World.add( world ,this.body);
        packageSprite.x = this.body.position.x ;
        packageSprite.y = this.body.position.y ;

    }

    display(){
        rectMode(CENTER);
        rect(width/2 , 200 , 5 );

    }
}