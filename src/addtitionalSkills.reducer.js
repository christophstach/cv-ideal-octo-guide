
const initialState = [
  {
    category: 'Languages',
    items: [
      {
        name: 'German',
        level: 'native speaker',
      },
      {
        name: 'English',
        level: 'fluent',
      },
      {
        name: 'Spanish',
        level: 'basic knowlodge',
      }
    ]
  },
  {
    category: 'Software engeeniering',
    subCategories: [
      {
        category: 'Frontend',
        items: [
          'Angularjs', 'Angular', 'ReactJS + Redux', 
          'Vue.js + Vuex', 'Bootstrap 3 & 4', 'Sencha ExtJS',
          'HTML5, JavaScript, CSS3', 'jQuery'
        ]
      },
      {
        category: 'Backend'
      },
      {
        category: 'Server'
      },
      {
        category: 'Other'
      }
    ]
  }
];




const additionalSkills = (state = initialState, action) => {
  return state
};

export default additionalSkills;
