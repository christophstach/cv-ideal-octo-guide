const initialState = [
  {
    name: 'Hochschule für Technik & Wirtschaft',
    programm: 'Applied computer science',
    location: 'Berlin, Germany',
    startDate: new Date(2016, 4),
    endDate: 'present'
  },
  {
    name: 'KBS Nordhorn',
    programm: ' IT Management Assistent',
    location: 'Nordhorn, Germany',
    startDate: new Date(2009, 8),
    endDate: new Date(2011, 6),
  },
  {
    name: 'Berufskolleg Rheine',
    programm: 'Informations Technischer Assistent',
    location: 'Rheine, Germany',
    startDate: new Date(2004, 8),
    endDate: new Date(2008, 6)
  },
  {
    name: 'Realschule Schüttorf',
    programm: null,
    location: 'Schüttorf, Germany',
    startDate: new Date(2000, 8),
    endDate: new Date(2004, 6)
  }
];

const educationalBackground = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_EDUCATIONAL_BACKGROUND': {
      return [
        ...state,
        {
          ...action.payload
        }
      ];
    }
    default: {
      return state;
    }
  }
  
};

export {
  initialState
};

export default educationalBackground;
