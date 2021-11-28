let database = [{
    expenses: [{ id: 1, date: "2021-05-03", transaction: "Bought an apple", cost: 5 }],
    id: 1,
    email: "1",
    password: "1",
}]

const userModel = {
    findOne: (email) => {
        for (const person of database) {
            if (person.email === email) {
                return person
            }
        }
        throw new Error(`Couldn't find user with email: ${email}`)
    },
    findById: (id) => {
        for (const person of database) {
            if (person.id === id) {
                return person
            }
        }
        if (user) {
            return user;
        }
        throw new Error(`Couldn't find user with id: ${id}`);
    },
};

module.exports = { database, userModel };