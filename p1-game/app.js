function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

Vue.createApp({

    data() {
        return {
            monsterHealt: 100,
            playerHealt: 100,
            counter: 0,
            batteleLog: [],
            isGameRunning: true,
            whoWinMassage: '',
        }
    },
    computed: {
        monsterHealthBar() {
            if (this.monsterHealt < 0) {
              this.monsterHealt = 0;
              return { width: this.monsterHealt + '%' };
            }else{
                return { width: this.monsterHealt + '%' };
            }
            
        },
        playerHealthBar() {
            if (this.playerHealt < 0) {
             this.playerHealt = 0;
             return { width: this.playerHealt + '%' };
            }else{
                return { width: this.playerHealt + '%' };
            }
        },
    },
    watch: {
        monsterHealt(value) {
            if (value == 0 && this.playerHealt == 0) {
                this.isGameRunning = false;
                this.whoWinMassage = 'Draw!';
            }
            else if (value > 100) {
                this.monsterHealt = 100;
                this.isGameRunning = false;
                this.whoWinMassage = 'Monster won!';
            }
            else if (value <= 0) {
                this.isGameRunning = false;
                this.whoWinMassage = 'Player won!';
            }
        },
        playerHealt(value) {
            if (value == 0 && this.monsterHealt == 0) {
                this.isGameRunning = false;
                this.whoWinMassage = 'Draw!';
            }
            else if (value > 100) {
                this.playerHealt = 100;
                this.isGameRunning = false;
                this.whoWinMassage = 'Monster won!';
            }
            else if (value <= 0) {
                this.isGameRunning = false;
                this.whoWinMassage = 'Monster won!';
            }
        },
    },
    methods: {
        setBattleLog(who, action, value) {
            this.batteleLog.unshift({
                who: who,
                action: action,
                value: value,
            });
        },

        attackMosnter(){
            this.counter++;
            const attackValue = getRandomValue(5, 10);
            this.monsterHealt -= attackValue;
            this.attackPlayer();
            this.setBattleLog('Player', 'attacked', attackValue);
            console.log('attackMonster: ' , this.monsterHealt);
        },
        attackPlayer(){
            const attackValue = getRandomValue(7, 12);
            this.playerHealt -= attackValue;
            this.setBattleLog('Monster', 'attacked', attackValue);
        },
        specialAttackMonster(){
            this.counter++;
            const attackValue = getRandomValue(10, 20);
            this.monsterHealt -= attackValue;
            this.attackPlayer();
            this.setBattleLog('Player', 'special attacked', attackValue);
            console.log('specialAttackMonster: ' , this.monsterHealt);
        },
        specialAttackPlayer(){},
        healPlayer(){
            this.counter++;
            const healValue = getRandomValue(8, 15);
            this.playerHealt += healValue;
            this.attackPlayer();
            console.log('healPlayer: ' , this.playerHealt);
            this.setBattleLog('Player', 'healed', healValue);
        },
        healMonster(){},
        surrender(){
            this.playerHealt = 100;
            this.monsterHealt = 100;
            console.log('surrender: ' , this.playerHealt, this.monsterHealt);
        },
        resetGame(){
            this.playerHealt = 100;
            this.monsterHealt = 100;
            this.batteleLog = [];
            this.isGameRunning = true;
            console.log('resetGame: ' , this.playerHealt, this.monsterHealt);
        },
    },
}).mount('#game');