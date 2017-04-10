const initialState = [
  {
    employer: 'DERICON GmbH',
    position: 'Frontend software engineer (working student)',
    location: 'Berlin, Germany',
    startDate: new Date(2016, 11),
    endDate: 'present',
    responsibilities: [
      'Extending the exting frontend of a web based software based on AngularJS',
      'Developing a PHP Symfony framework middleware to connect the AngularJS frontend with the systems core REST API'
    ]
  },
  {
    employer: 'Working holiday',
    position: '',
    location: 'mainly in Perth, Australia',
    startDate: new Date(2014, 10),
    endDate: new Date(2015, 12),
    responsibilities: [
      
    ]
  },
  {
    employer: 'SLH GmbH',
    position: 'Web software engineer',
    location: 'Schüttorf, Germany',
    startDate: new Date(2014, 10),
    endDate: new Date(2011, 9),
    responsibilities: [
      'Planning and implementing new featuresforthe web based software UWEB2000',
      'Developing a new frontend with Sencha ExtJS',
      'Bug fixing the PHP based business logic',
      'Troubleshooting with customers regarding the software',
      'Consultant and contact person for customers',
      'Implementing features in the 2nd product of the company with ASP.NET MVC + Entity Framework',
      'Working with predefined GIT SCM workflows'
    ]
  },
  {
    employer: 'CREAVIVA GmbH & Co. KG',
    position: 'Web software engineer',
    location: 'Rheine, Germany',
    startDate: new Date(2011, 6),
    endDate: new Date(2011, 9),
    responsibilities: [
      'Managing content and developing new websites based on PHP, MySQL, CSS and JavaScript',
      'Developing websites with the CMS TYPO3 including the creation of new TYPO3-Extension',
      'Internal contact person for IT related issues'
    ]
  },
  {
    employer: 'Kortmann Beton GmbH & Co. KG',
    position: 'Apprenticeship: IT Management Assistant',
    location: 'Schüttorf, Germany',
    startDate: new Date(2009, 8),
    endDate: new Date(2011, 6),
    responsibilities: [
      'Development of the company website',
      'Developing reports for internal company analysis with C#, Crystal Reports, Visual Basic and Microsoft Access'
    ]
  }
];

const workExperience = (state = initialState, action) => {
  return state;
}

export default workExperience;
