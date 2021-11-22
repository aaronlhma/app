const database = require("../database.js");
static_list = [{ id: 1, date: "2021-05-03", transaction: "Bought an apple", cost: 5, tags:'test' }];
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'app'
});

con.connect(function(err){
    if(err) throw err;
    console.log('connected');
})

let expenseController = {
    list: async(req, res) => {
        sql = `
        SELECT * from expenses;
        `
        con.query(sql, function(err, result) {
            if(err) throw err;
            console.log(result)
            res.render("expense/index",{expenses: result})
        })

    },

    new: (req, res) => {
        res.render("expense/create");
    },

    listOne: async(req, res) => {
        try {
            console.log('PARAMS ID IS :' + req.params.id)

            sql = `
            SELECT * from expenses WHERE id = ${req.params.id}
            `
            con.query(sql, function(err,result) {
                if(err) throw err;
                console.log(result)
                res.render("expense/single-expense",{ expenseItem: result[0] })
            })

        }
        catch {
            sql = `
            SELECT * from expenses;
            `
            con.query(sql, function(err, result) {
                if(err) throw err;
                console.log(result)
                res.render("expense/index",{expenses: result})
            })
        }

    },

    create: async(req, res) => {

        sql = `
        INSERT INTO expenses(item,date,price,tags,user)
        VALUES('${req.body.transaction}',now(),${req.body.cost},'${req.body.tags}','${req.user.id}')
        `
        con.query(sql, function(err,result) {
            if(err) throw err;
            console.log(result)
            res.redirect("/expenses");
        })
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