const {UserList,MoviesList} = require('../Fakedata');
const _ = require("lodash");
const resolvers = {
    Query: {
        users:()=>{
            return UserList; 
        },
        user: (parent,args) => {
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        },
        movies:()=>{
            return MoviesList;
        },
        movie:(parent,args) => {
            const name = args.name;
            const movie = _.find(MoviesList, {name: name});
            return movie;
        },
    },
    User: {
        
    }
};
module.exports = {resolvers};