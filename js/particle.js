

function Particle(x, y, hu, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;

    if (firework) {
        this.vel = createVector(0, random(-16, -12));
    }
    else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(5, 20));
    }
    this.acc = createVector(0, 0);


    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.update = function () {
        if (!this.firework) {
            this.vel.mult(0.9);
            this.lifespan -= 2;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.show = function () {
        colorMode(HSB);

        if (!this.firework) {
            strokeWeight(2);
            stroke(hu, 255, 255, this.lifespan);
        }
        else {
            strokeWeight(4);
            stroke(hu, 255, 255);
        }
        point(this.pos.x, this.pos.y);
    }
}