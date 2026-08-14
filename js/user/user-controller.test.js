const UserController = require("./user-controller");
const User = require("./user");

let userController;

beforeEach(() => {
    userController = new UserController(); // se reinicia antes de CADA test
});

test('add user to userController', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    userController.remove(user);
    expect(userController.users).not.toContain(user);
});

test('add user - a user not added should not be in the list', () => {
    let user1 = new User(1234, "Santiago", "santiago@generation.org");
    let user2 = new User(5678, "Maria", "maria@generation.org");
    userController.add(user1);
    expect(userController.getUsers()).not.toContain(user2);
});

test('remove user - removing a user not in the list does not affect the list', () => {
    let user1 = new User(1234, "Santiago", "santiago@generation.org");
    let user2 = new User(9999, "Pedro", "pedro@generation.org");
    userController.add(user1);
    userController.remove(user2);
    expect(userController.getUsers()).toContain(user1);
    expect(userController.getUsers()).not.toContain(user2);
});

test('findByEmail - returns the correct user when email exists', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findByEmail("santiago@generation.org")).toEqual(user);
});

test('findByEmail - returns undefined when email does not exist', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findByEmail("noexiste@generation.org")).toBeUndefined();
});

test('findById - returns the correct user when id exists', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findById(1234)).toEqual(user);
});

test('findById - returns undefined when id does not exist', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findById(9999)).toBeUndefined();
});