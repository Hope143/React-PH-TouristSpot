CREATE TABLE address_details
    (
        address_id int primary key,
        h_no varchar(6),
        city varchar(50),
        addressline1 varchar(50),
        state varchar(50),
        pin varchar(50)
     );


CREATE TABLE user_details
    (    
        user_id int primary key,
        firstname varchar(50),
        lastname varchar(50),
        email varchar(50),
        mobileno varchar(50),
        address_id int references address_details(address_id),
        dob date
     );

CREATE TABLE ref_policy_types
    (
        policy_type_code varchar(10) primary key,
        policy_type_name varchar(50)
    );


CREATE TABLE policy_sub_types
    (
        policy_type_id varchar(10) primary key,
        policy_type_code varchar(10) references         
        ref_policy_types(policy_type_code),
        description varchar(50),
        yearsofpayements int,
        amount decimal(38,2),
        maturityperiod int,
        maturityamount decimal(38,2),
        validity int
     );


CREATE TABLE user_policies
    (
        policy_no varchar(20) primary key,
        user_id int references user_details(user_id),
        date_registered date,
        policy_type_id varchar(10) references 
        policy_sub_types(policy_type_id)         
    );


CREATE TABLE policy_payments
    (
        receipno int primary key,
        user_id int references user_details(user_id),
        policy_no varchar(20) references user_policies(policy_no),
        dateofpayment date,
        amount decimal(38,2),
        fine decimal(38,2)
    );

