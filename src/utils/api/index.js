const mockedQuestions = {
  data: [
    {
      id: 'id1',
      statement: 'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
      options: [
        {value: '1', answer: 'Don’t dare to interrupt them'},
        {value: '2', answer: 'Think it’s more important to give them some of your time; work can wait'},
        {value: '3', answer: 'Listen, but with only with half an ear'},
        {value: '4', answer: 'Interrupt and explain that you are really busy at the moment'},
      ]
    },
    {
      id: 'id2',
      statement: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
      options: [
        {value: '1', answer: 'Look at your watch every two minutes'},
        {value: '2', answer: 'Bubble with inner anger, but keep quiet'},
        {value: '3', answer: 'Explain to other equally impatient people in the room that the doctor is always running late'},
        {value: '4', answer: 'Complain in a loud voice, while tapping your foot impatiently'},
      ]
    },
    {
      id: 'id3',
      statement: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
      options: [
        {value: '1', answer: 'Don’t dare contradict them'},
        {value: '2', answer: 'Think that they are obviously right'},
        {value: '3', answer: 'Defend your own point of view, tooth and nail'},
        {value: '4', answer: 'Continuously interrupt your colleague'},
      ],
    }
  ]
}

const api = {
  get: path => {
    switch(path) {
      case '/questions': {
        return new Promise(resolve => setTimeout(() => resolve(mockedQuestions), 1000))
      }
      default:
        return Promise.resolve(null);
    }
  },
  post: (path, {selectedAnswer}) => {
    switch(path) {
      case '/personality-test': {
        return new Promise(resolve => setTimeout(() => {
          const testResult = selectedAnswer.reduce((acc, x) => acc + parseInt(x, 10), 0);

          if (testResult < 3) {
             resolve(`You're definitely an introvert`);
          }

          if (testResult < 6) {
            resolve(`You're most likely an introvert`);
          }

          if (testResult < 9) {
            resolve(`You're a good mix of introvert and extrovert`);
          }

          resolve(`You're definitely an extrovert`);
        }, 1000));
      }
      default:
        return Promise.resolve(null);
    }
  }
}

export default api;
