/**
 * Created by NamNguyen1 on 15/4/17.
 */

var mongoose = require('mongoose');
var User = mongoose.model('User');

var loadIndex = function (req, res) {
    res.render('./pages/index');
}

var createUser = function(req,res){
    var user = new User({
        // "userID":req.body.userID,
        "firstName":req.body.firstName,
        "lastName":req.body.lastName,
        "email":req.body.email,
        "password":req.body.password,
        "dob":req.body.dob,
        "location":req.body.location,
        "activities":req.body.activities,
        "friends":req.body.friends
    });
    user.save(function(err,newUser){
        if(err){
          console.log(err.errmsg);
          res.status(400).send(err.errmsg);
        }else{
          res.send(newUser);
        }
    });
};

var findAllUsers = function(req,res){
    User.find(function(err,users){
        if(!err){
            res.send(users);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneUser = function(req,res){
    var UserInx = req.params.id;
    User.findById(UserInx,function(err,user){
        if(!err){
            res.send(user);
        }else{
            res.sendStatus(404);
        }
    });
};

// var deleteUser = function(req,res){
//     var UserInx = req.params.id;
//     User.findByIdAndRemove(UserInx,function(err,user){
//         if(!err){
//             res.json({ message: 'Successfully deleted', id: user.userID});
//         }else{
//             res.sendStatus(404);
//         }
//     });
//
// };

module.exports.createUser = createUser;
module.exports.findAllUsers = findAllUsers;
module.exports.findOneUser = findOneUser;
module.exports.loadIndex = loadIndex;
// module.exports.deleleUser = deleteUser;
