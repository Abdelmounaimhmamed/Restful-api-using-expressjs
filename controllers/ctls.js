const members = require("../members");
const uuid = require("uuid");

const getAllmember = (req,res) => {
    res.json(members);
};

const getUserById =  (req,res) => {
    const id = parseInt(req.params.id);
    const found = members.some( mem =>  mem.id === id);
    if (found){
        const user = members.find(member => member.id === id);
        res.json(user);
    }else {
        res.status(400).json({message : "user not found "});
    }
};

const deleteUser = (req,res) => {
    const id = parseInt(req.params.id);
    const found = members.some(mem => mem.id === id);
    if (found){
        let NewArray = members.filter(mem => mem.id !== id );
        res.json(NewArray);
    }else {
        res.json(`User doesnot exits with id : ${req.params.id}`);
    }
}
const addUser = (req,res) => {
    const newUser = {
        id : uuid.v4(),
        name : req.body.name,
        email : req.body.email,
        status : req.body.status
    }
    if (!req.body.name || !req.body.email || !req.body.status){
        return res.json({message : "hey there enter your info "});
    }
    members.push(newUser);
    res.json(members);
}
const updateUser = (req,res) => {
    const  id = parseInt(req.params.id);
    const {
        name ,
        email ,
        status} = req.body;

    const NewData = {
        name  : name ,
        email : email,
        status : status
    };

    const index = members.findIndex(mem => mem.id === id);
    members[index].name = NewData.name;
    members[index].email = NewData.email;
    members[index].status = NewData.status;
    res.json(members[index]); 
}


module.exports = {
    getAllmember,
    getUserById,
    deleteUser,
    addUser,
    updateUser
}