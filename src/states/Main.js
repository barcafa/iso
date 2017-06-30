
class Main extends Phaser.State {

    create() {
        //Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//Set the games background colour
		this.game.stage.backgroundColor = '#cecece';
    }

    update() {

    }
}

export default Main;