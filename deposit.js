"use strict";
let log_in = false;
let id = false;
const user = [
    {
        id: 1,
        name: 'user-1',
        amount: 2000,
        dc: 0
    },
    {
        id: 2,
        name: 'user-2',
        amount: 1000,
        dc: 0
    }
];

function deposit(am) {
    if (!checklogin()) return;
    if (am == undefined || am == '') {
        console.error('You must enter the values');
        return;
    }
    let u = getuser();
    console.log(`--------------- - CREDIT`)
    console.log(`Previous amount - ${u.amount}`)
    if (credit(u, am)) console.log(`Amount has been ${am} credited to ${u.name} - ${u.amount}`);
}

function credit(e, am) {
    e.amount += am;
    return true;
}

function withdraw(am) {
    if (!checklogin()) return;
    if (am == undefined || am == '') {
        console.error('You must enter the values');
        return;
    }
    let u = getuser();
    console.log(`--------------- - DEBIT`)
    console.log(`Previous amount - ${u.amount}`);
    if (debit(u, am)) console.log(`Amount has been ${am} debited to ${u.name} - ${u.amount}`)
}
function getuser() {
    return user.find(e => e.id == id)
}

function debit(e, am) {
    if (e.dc == 5) {
        console.log(`------ You have attempted more than 5 times ------ + GST 24`)
        e.amount -= am + 24;
    } else {
        e.amount -= am;
        e.dc += 1;
    }
    return true;
}

function login(l) {
    if (l == undefined || l == '') {
        console.error('You must enter your credentials');
        return;
    }
    let u = user.filter(e => e.id == l);
    if (u.length == 0 || u.length > 1) {
        console.error('Please enter valid credentials');
        return;
    }
    log_in = true;
    id = l;
    console.log(`------ Logged in successfully ------`);
}

function checklogin() {
    if (!log_in) {
        console.log(`------ You don't have permission to access, Please login and try again ------`)
        return false;
    } else {
        return log_in;
    }
}

function logout() {
    log_in = false;
    id = false;
    console.log(`------ Logged out successfully ------`)
}
login(1);
withdraw(1);
deposit(1);
logout();