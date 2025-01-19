const {UserList,MoviesList} = require('../Fakedata');
const _ = require("lodash");
const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
        const id = args.id;
        const user = _.find(UserList, { id: Number(id) });
        return user;
        },
        movies: () => {
            return MoviesList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MoviesList, { name: name });
            return movie;
        },
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input;
            let userUpdated;
            UserList.forEach((user) => {
            if (user.id === Number(id)) {
                user.username = newUsername;
                userUpdated = user;
                }
            });
            return userUpdated;
        },
        deleteUser: (parent,args) => {
            const id = args.id;
            _.remove(UserList,(user) => user.id === Number(id));
            return null;
        },
    },
};
module.exports = {resolvers};