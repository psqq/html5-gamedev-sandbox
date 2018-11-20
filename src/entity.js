import Victor from 'victor';
import * as physicsEngine from './physics-engine';

export default class Entity {
    constructor(o) {
        o = o || {};
        this.pos = new Victor(o.x || 0, o.y || 0);
        this.size = new Victor(o.w || 0, o.h || 0);
        this._killed = false;
        this.zindex = 0;
        this.body = null;
    }
    kill() {
        if (this._killed) return;
        this._killed = true;
        if (this.body) physicsEngine.removeBody(this.body);
    }
    setVelocity(vel) {
        physicsEngine.Body.setVelocity(
            this.body,
            new physicsEngine.Vector.create(vel.x, vel.y)
        );
    }
    onTouch(body) {}
    update() {}
    draw() {}
}
