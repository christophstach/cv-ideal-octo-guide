const initialState = [
  {
    name: 'MCP 70-480',
    description: 'Programming in HTML5 with JavaSCript and CSS3',
    date: new Date(2014, 8)
  }
];


const certifaces = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CERTIFICATE': {
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


export default certifaces;
