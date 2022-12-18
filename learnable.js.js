class  User{
    constructor (userId, email, password, loginStatus){
        if (this.constructor === User){
            throw new Error('User cannot be instantiated')
        }
        this.userId = userId
        this.email = email
        this.password = password
        this.loginStatus = loginStatus
        
    }

    verifyLogin(){             
        console.log('processing...');          
    }
}




class Learner extends User {                
                                        //Inheritance was caaried out so I can extend method  and properties our parent class to child class
    constructor(userId, email, creditCardInfo, loginStatus, path){
        super(userId, email)
        this.creditCardInfo = creditCardInfo
        this.loginStatus = loginStatus
        this.path = path
    }

    register(){
        console.log(`Registration complete for ${this.userId}`);
    }
    login(){                                            
                                                            /*Abstraction was used to hide the implementation details of the method
                                                            and only expose the important things/results or attributes to the user*/
        if(this.loginStatus === true){
            console.log(`welcome ${this.userId} to your profile`);
        }
        else{
            console.log("you have to login");
        }
    }
    #displaypath(){
        console.log(`Your learning path is: ${this.path}`);
    }
                                
}




class Admin extends User{           //creation of admin class
    constructor(email, adminName, update){
        super(email)
        this.adminName = adminName;
        this.update = update
    }
    updateCourses(update){  //Abstraction was used here for the same reason as above
        if(update === true){
            console.log("courses is being updated...");
        }
        else{
            console.log("no course to update");
        }

    }
}


                                        // creating of a cart for the courses to be purchased
class courseCart extends Learner{
    constructor(creditCardInfo, courseId, dateAdded){
        super(creditCardInfo)
        this.courseId = courseId
        this.dateAdded = dateAdded
    }

    viewCarDetails(){
        console.log('Here, is your cart');
    }
    
    checkOut(){
        console.log(`your are purchasing these course(s) with this credit card ${this.creditCardInfo}`);  
        /*an occurence of polymorphism which wouuld be explained in detail below*/
    }

}


                                            //created a class to contain user orders
class orders extends courseCart{                   
    constructor(courseId, purchaseDate, orderId, orderStatus){
        super(courseId)
        this.purchaseDate = purchaseDate    
        this.orderId = orderId
        this.orderStatus = orderStatus
    }

    checkOut(){
        console.log("Order finished");
        /* Polymorphism was used here so the child class methods can be overridden or rewritten
        according to its functionality after being inherited from the parent class(courseCart())*/
    }

    download(){
        console.log('Receipt downloaded to local storage');
    }
}