

Vue.createApp({
    data() {
        return{
            goals:[],
            enteredGoalValue: '',
        }
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredGoalValue); // Add the entered goal value to the goals array
            this.enteredGoalValue = ''; // Clear the input field after adding the goal
        }
    }
}).mount('#app')