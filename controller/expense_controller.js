const database = require("../database.js")
static_list = [{ id: 1, date: "2021-05-03", transaction: "Bought an apple", cost: 5, tags:'test' }]

let expenseController = {
    list: async(req, res) => {
        res.render("expense/index",{expenses: static_list});
        // let expenseToFind = req.params.id;
        // let searchResult = req.user.expenses.find(function(expense) {
        //     return expense.id == expenseToFind;
        // });
        // if (searchResult != undefined) {
        //     res.render("expense/single-expense", { expenseItem: searchResult });
        // } else {
        //     res.render("expense/index", { expenses: req.user.expenses });
        // }
    },

    new: (req, res) => {
        res.render("expense/create");
    },

    listOne: async(req, res) => {
        console.log(static_list[req.params.id-1])
        try {
            res.render("expense/single-expense",{expenseItem:static_list[req.params.id-1]})
        }
        catch {
            res.render("expense/index",{expenses: static_list})
        }
        // let expenseToFind = req.params.id;
        // let searchResult = req.user.expenses.find(function(expense) {
        //     return expense.id == expenseToFind;
        // });
        // if (searchResult != undefined) {
        //     res.render("expense/single-expense", { expenseItem: searchResult });
        // } else {
        //     res.render("expense/index", { expenses: req.user.expenses });
        // }
    },

    create: async(req, res) => {
    
        // let id_list = [];
        // for (item of req.user.expenses) {
        //     id_list.push(item.id)
        // }
        // const set = new Set(id_list);
        // let id = 1;
        // while (set.has(id)) {
        //     id++
        // }
        // let expense = {
        //     id: id,
        //     date: req.body.datetime,
        //     transaction: req.body.transaction,
        //     cost: req.body.cost
        // };
        // req.user.expenses.push(expense);
        res.redirect("/expenses");
    },

    edit: async(req, res) => {
        // let expenseToFind = req.params.id;
        // let searchResult = req.user.expenses.find(function(expenses) {
        //     return expenses.id == expenseToFind;
        // });
        res.render("expense/edit", { expenseItem: static_list[0] });
    },
    delete: async(req, res) => {
        // let findId = req.params.id
        // let indexNum = req.user.expenses.findIndex(i => i.id == findId)
        // req.user.expenses.splice(indexNum, 1)
        res.redirect("/expenses")
    },

    update: async(req, res) => {
        // let reminderToUpdate = req.params.id;
        // let { datetime, transaction, cost } = req.body;
        // for (var r in req.user.expenses) {
        //     if (req.user.expenses[r].id.toString() === reminderToUpdate) {
        //         req.user.expenses[r].transaction = transaction;
        //         req.user.expenses[r].cost = cost;
        //         req.user.expenses[r].date = datetime;
        //         break;
        //     }
        // }
        res.redirect("/expenses");
    },

};

// const getTotal = (expenses) => {
//     let total = 0
//     expenses.forEach((expense) => {
//         total = total + parseInt(expense.cost)
//     })
//     return total
// }

module.exports = expenseController;