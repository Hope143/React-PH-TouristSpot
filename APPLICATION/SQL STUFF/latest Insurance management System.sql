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

INSERT INTO Policy_Sub_Types values('6893','121212','Collision',3,3000,null,108000,7);
INSERT INTO Policy_Sub_Types values('6894','121212','Liability',3,3000,null,108000,7);
INSERT INTO Policy_Sub_Types values('6895','121212','Comprehensive',3,3000,null,108000,7);
INSERT INTO Policy_Sub_Types values('6896','131313','Flood',2,2500,null,60000,10);
INSERT INTO Policy_Sub_Types values('6897','131313','Earthquake',2,2500,null,60000,10);
INSERT INTO Policy_Sub_Types values('6898','131313','Homeowner',2,2500,null,60000,10);
INSERT INTO Policy_Sub_Types values('6899','141414','Natural Death',15,3000,null,540000,100);
INSERT INTO Policy_Sub_Types values('6900','141414','Accidental Death',15,3000,null,300000,100);
INSERT INTO Policy_Sub_Types values('6901','151515','Medical Emergenices',2,2500,null,60000,10);
INSERT INTO Policy_Sub_Types values('6902','151515','Trip Cancellation',2,2500,null,60000,10);
INSERT INTO Policy_Sub_Types values('6903','161616','Prescription Drugs',10,3000,null,360000,30);
INSERT INTO Policy_Sub_Types values('6904','161616','Wellness Care',10,3000,null,360000,30);



Select * from User_Details;
Select * from Address_Details;
Select * from Reference_Policy_Types;
Select * from policy_sub_types;