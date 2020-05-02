export default class Collider {
    constructor() {
    }

    collided(entity1, entity2) {
        return entity1.left < entity2.right && entity1.right > entity2.left &&
            entity1.top < entity2.bottom && entity1.bottom > entity2.top
    }
}
