const initialState = [
  {
    name: 'DERICON GmbH',
    position: 'Frontend software engineer (working student)',
    location: 'Berlin, Germany',
    startDate: new Date(2016, 11),
    endDate: 'present'
  },
  {
    name: 'Working holiday',
    position: '',
    location: 'Mainly in Perth Australia',
    startDate: new Date(2014, 10),
    endDate: new Date(2015, 12)
  },
  {
    name: 'SLH GmbH',
    position: 'Web software engineer',
    location: 'Schüttorf, Germany',
    startDate: new Date(2014, 10),
    endDate: new Date(2011, 9)
  },
  {
    name: 'CREAVIVA GmbH & Co. KG',
    position: 'Web software engineer',
    location: 'Rheine, Germany',
    startDate: new Date(2011, 6),
    endDate: new Date(2011, 9)
  },
  {
    name: 'Kortmann Beton GmbH & Co. KG',
    position: 'Apprenticeship: IT Management Assistant',
    location: 'Schüttorf, Germany',
    startDate: new Date(2009, 8),
    endDate: new Date(2011, 6)
  }
];

const workExperience = (state = initialState, action) => {
  return state;
}

export default workExperience;
