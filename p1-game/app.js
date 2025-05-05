function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

Vue.createApp({
    data() {
        return {
            monsterHealt: 100,
            playerHealt: 100,
        }
    },
    methods: {
        attackMosnter(){
            
            const attackValue = getRandomValue(5, 10);
            this.monsterHealt -= attackValue;
            this.attackPlayer();
            console.log('attackMonster: ' , this.monsterHealt);
        },
        attackPlayer(){
            const attackValue = getRandomValue(8, 15);
            this.playerHealt -= attackValue;
        },
        specialAttackMonster(){
            const attackValue = getRandomValue(10, 20);
            this.monsterHealt -= attackValue;
            this.attackPlayer();
            console.log('specialAttackMonster: ' , this.monsterHealt);
        },
        specialAttackPlayer(){},
        healPlayer(){
            const healValue = getRandomValue(8, 15);
            this.playerHealt += healValue;
            this.attackPlayer();
            console.log('healPlayer: ' , this.playerHealt);
        },
        healMonster(){},
        surrender(){
            this.playerHealt = 100;
            this.monsterHealt = 100;
            console.log('surrender: ' , this.playerHealt, this.monsterHealt);
        },
        resetGame(){},
    },
}).mount('#game');