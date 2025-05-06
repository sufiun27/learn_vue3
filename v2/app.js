const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      nameError: '',
      details: '',
      submittedDetails: ''
    };
  },

  computed: {
    getfullName() {
      if (this.name && this.lastName) {
        return this.name + ' ' + this.lastName;
      }
      return this.name || this.lastName || 'No name provided';
    }
  },

  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    setFullName() {
      if (!this.name || !this.lastName) {
        this.nameError = 'Please enter both a first name and a last name';
        return;
      }
      this.nameError = '';
      this.name = '';
      this.lastName = '';
    },
    handleSubmit() {
      if (!this.details) return;
      this.submittedDetails = this.details;
      this.details = '';
    }
  }
});

app.mount('#app');