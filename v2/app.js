const app = Vue.createApp({
    data() {
      return {
        counter: 0,
        name: '',
        completeName: '',
        nameError: '',
        details: '',
        submittedDetails: '',
      };
    },
    methods: {
      increment() {
        this.counter++;
      },
      decrement() {
        this.counter--;
      },
      setName(event) {
        this.name = event.target.value;
        this.nameError = this.name.length > 20 ? 'Name must be 20 characters or less' : '';
      },
      setCompleteName() {
        if (!this.name) {
          this.nameError = 'Please enter a name';
          return;
        }
        this.completeName = this.name;
        this.name = '';
        this.nameError = '';
      },
      handleSubmit() {
        if (!this.details) return;
        this.submittedDetails = this.details;
        this.details = '';
      },
    },
  });
  
  app.mount('#app');