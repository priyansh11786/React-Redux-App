const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'oioieoei'},
        {id: '2', title: 'collect all the stars', content: 'oweuhwuhhjcbscqdqwd'},
        {id: '3', title: 'egg hunt with yoshi', content: 'woeifjeifbufygwdwe'}
    ]
}

const projectReducer = (state = initState, action) => {
   switch(action.type) {
       case 'CREATE_PROJECT':
           console.log('action created', action.project);
           return state;
       case 'CREATE_PROJECT_ERR':
           console.log('create project error', action.err);
           return state;
       default:
           return state;
   }
}

export default projectReducer;