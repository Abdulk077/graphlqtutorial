const {UserList} = require('../Fakedata');
const resolvers = {
    Query: {
        users(){
            return UserList; 
        }
    }
}
module.exports = {resolvers};