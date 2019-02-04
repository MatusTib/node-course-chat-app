const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Maznak',
            room: 'NR SR'
        }, {
            id: '2',
            name: 'Alenka',
            room: 'Komarno'
        }, {
            id: '3',
            name: 'Kapitan',
            room: 'NR SR'
        }]
    })
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Maznak',
            room: 'NR SR'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        
        expect(user.id).toBe(userId); 
        expect(users.users.length).toBe(2); 
    });

    it('should not remove user', () => {
        var userId = '44';
        var user = users.removeUser(userId);
        
        expect(user).toNotExist; 
        expect(users.users.length).toBe(3);         
    });

    it('should find user', () => {
        var userId = '1';
        var user = users.getUser(userId);
        
        expect(user.id).toBe(userId);        
    });

    it('should not find user', () => {
        var userId = '44';
        var user = users.getUser(userId);
        
        expect(user).toNotExist;        
    });

    it('should return names for NR SR', () => {
        var userList = users.getUserList('NR SR');

        expect(userList).toEqual(['Maznak', 'Kapitan']);
    });

    it('should return names for Komarno', () => {
        var userList = users.getUserList('Komarno');

        expect(userList).toEqual(['Alenka']);
    });

});