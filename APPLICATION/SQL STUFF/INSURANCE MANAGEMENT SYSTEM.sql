CREATE TABLE Address_Details
    (
        AddressID int primary key,
        Home_Number varchar(6),
        City varchar(50),
        Addressline1 varchar(50),
        State varchar(50),
        Pin varchar(50)
     );


CREATE TABLE User_Details
    (    
        UserID int primary key,
        Firstname varchar(50),
        Lastname varchar(50),
        Email varchar(50),
        Mobile_Number varchar(50),
        AddressID int references Address_Details(AddressID),
        Date_of_Birth date
     );

CREATE TABLE Reference_Policy_Types
    (
        Policy_Type_Code varchar(10) primary key,
        Policy_Type_Name varchar(50)
    );


CREATE TABLE Policy_Sub_Types
    (
        Policy_TypeID varchar(10) primary key,
        Policy_Type_Code varchar(10) references         
        Reference_Policy_Types(Policy_Type_Code),
        description varchar(50),
        Years_of_Payements int,
        Amount decimal(38,2),
        Maturity_Period int,
        Maturity_Amount decimal(38,2),
        Validity int
     );


CREATE TABLE User_Policies
    (
        Policy_Number varchar(20) primary key,
        UserID int references User_Details(UserID),
        Date_Registered date,
        Policy_TypeID varchar(10) references 
        Policy_Sub_Types(Policy_TypeID)         
    );


CREATE TABLE Policy_Payments
    (
        Receipt_Number int primary key,
        UserID int references user_details(UserID),
        Policy_Number varchar(20) references User_Policies(Policy_Number),
        Date_of_Payment date,
        Amount decimal(38,2),
        Fine decimal(38,2)
    );
