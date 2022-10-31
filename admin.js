
const Expense=require('../model1/expense');



 exports.addUser=(req,res,next)=>{
    const expense=req.body.expense;
    const category=req.body.category;
    const description=req.body.description;
    Expense.create({
        expense:expense,
        category:category,
        description:description
    }).then((result)=>{
        res.json(result);
    })
    .catch(err=>console.log(err));
}

exports.getUsers=(req,res,next)=>{
    Expense.findAll().then(products=>{
      res.json(products);
    })
    .catch(err=>{console.log(err)})
}

exports.deleteUserById=(req,res,next)=>{
    const prodId=req.params.id;
    Expense.destroy({where :{id:prodId}})
    .then()
    .catch(err=>{console.log(err)})
}


exports.geteditUser=(req,res,next)=>{
    const prodId=req.params.id;
    Expense.findByPk(prodId).then((user)=>{
        res.json(user);
       res.redirect(`/admin/edit-expense`);
    }).catch(err=>console.log(err));
}

exports.posteditUser=(req,res,next)=>{

    const prodId=req.params.id;
    Expense.findByPk(prodId)
    .then((user)=>{
        user.expense=req.body.expense;
        user.category=req.body.category;
        user.description=req.body.description;
        return user.save();
    })
    .then((result)=>{
       res.json(result);
        console.log('User Edited');
    })
    .catch(err=>console.log(err));
}
