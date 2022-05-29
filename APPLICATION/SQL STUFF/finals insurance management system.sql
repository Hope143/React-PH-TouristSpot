INSERT INTO address_details values(1, '5462', 'North Caloocan', 'Makiling Street', 'Metro Manila', 77854);
INSERT INTO address_details values(2, '5673', 'Quezon', 'Arayat Street', 'Metro Manila', 789745);
INSERT INTO address_details values(3, '2346', 'Manila', 'Lilya Street', 'Metro Manila', 85674);
INSERT INTO address_details values(4, '5789', 'Makati', 'Roxas Street', 'Metro Manila', 674346);
INSERT INTO address_details values(5, '1231', 'San Juan', 'Einstein Street', 'Metro Manila', 895446);
INSERT INTO address_details values(6, '6789', 'Pasay', 'Folgueras Street', 'Metro Manila', 456478);
INSERT INTO address_details values(7, '9845', 'Baguio', 'Masangkay Street', 'Benguet', 784456);
INSERT INTO address_details values(8, '2356', 'Marikina', 'Gastambide Street', 'Metro Manila', 45645778);
INSERT INTO address_details values(9, '9765', 'Cebu', 'Herran Street', 'Cebu', 57846);
INSERT INTO address_details values(10, '4567', 'South Caloocan', 'Gumamela Street', 'Metro Manila', 4564564);
INSERT INTO address_details values(11, '2843', 'Davao', 'Sampaguita Street', 'Davao Del Sur', 47884);
INSERT INTO address_details values(12, '8438', 'Mandaluyong', 'Carnation Street', 'Metro Manila', 456453);
INSERT INTO address_details values(13, '6726', 'Pasay', 'Daisy Street', 'Metro Manila', 584367);
INSERT INTO address_details values(14, '8938', 'Valenzuela', 'Everlasting Street', 'Metro Manila', 54678);
INSERT INTO address_details values(15, '0930', 'Malabon', 'Gumamela Street', 'Metro Manila', 4564587);
INSERT INTO address_details values(16, '4289', 'Olongapo', 'Batumbakal Street', 'Zambales', 34536);
INSERT INTO address_details values(17, '3907', 'Muntinlupa', 'Sampang Street', 'Metro Manila', 456744);
INSERT INTO address_details values(18, '0948', 'Zamboanga', 'Waling-waling Street', 'Zamboanga Del Sur', 3453567);
INSERT INTO address_details values(19, '3901', 'Naga', 'Abaka Street', 'Camarines Sur', 35634);
INSERT INTO address_details values(20, '9987', 'Lucena', 'Lapu-lapu Street', 'Quezon Province', 47834);


INSERT INTO user_details values(1234,'Olivia','Dela Cruz','olivia@gmail.com','09259235766',6,'1990-2-25');
INSERT INTO user_details values(1235,'Oliver','Garcia','oliver@gmail.com','09586838292',1,'1985-4-14');
INSERT INTO user_details values(1236,'Amelia','Reyes','amelia@gmail.com','09289290955',7,'2000-12-12');
INSERT INTO user_details values(1237,'George','Ramos','george@gmail.com','09034895858',14,'1986-7-5');
INSERT INTO user_details values(1238,'Isla','Mendoza','isla@gmail.com','09398375737',17,'1990-1-12');
INSERT INTO user_details values(1239,'Harry','Gonzales','harry@gmail.com','09373828225',15,'1991-5-30');
INSERT INTO user_details values(1240,'Ava','Santos','ava@gmail.com','09383472625',2,'1989-11-23');
INSERT INTO user_details values(1241,'Noah','Flores','noah@gmail.com','09348928572',8,'1970-5-29');
INSERT INTO user_details values(1242,'Emily','Bautista','emily@gmail.com','09457823758',10,'1969-10-14');
INSERT INTO user_details values(1243,'Jack','Villanueva','jack@gmail.com','09289176262',9,'1977-3-21');
INSERT INTO user_details values(1244,'Sophia','Fernandez','sophia@gmail.com','09285269276',18,'1975-9-25');
INSERT INTO user_details values(1245,'Charlie','Cruz','charlie@gmail.com','09245867219',11,'1990-7-15');
INSERT INTO user_details values(1246,'Grace','Lopez','grace@gmail.com','09282900823',13,'1960-12-1');
INSERT INTO user_details values(1247,'Mia','Valdez','mia@gmail.com','09278529115',12,'1996-7-30');
INSERT INTO user_details values(1248,'Jacob','Francisco','jacob@gmail.com','09582732615',16,'1990-5-21');
INSERT INTO user_details values(1249,'Poppy','Rivera','poppy@gmail.com','09285298191',3,'1995-12-25');
INSERT INTO user_details values(1250,'Freddie','Aquino','freddie@gmail.com','09589258297',19,'1969-3-15');
INSERT INTO user_details values(1251,'Ella','Castro','ella@gmail.com','09257828957',4,'1998-11-24');
INSERT INTO user_details values(1252,'Alfie','Martinez','alfie@gmail.com','09257285721',20,'1979-5-12');
INSERT INTO user_details values(1253,'Cassandra','Rodriguez','sandra@gmail.com','09257829278',5,'1992-10-11');


INSERT INTO Reference_Policy_Types values('121212', 'Car');
INSERT INTO Reference_Policy_Types values('131313', 'Home');
INSERT INTO Reference_Policy_Types values('141414', 'Life');
INSERT INTO Reference_Policy_Types values('151515', 'Travel');
INSERT INTO Reference_Policy_Types values('161616', 'Health');


INSERT INTO Policy_Sub_Types values('6893','121212','Collision',3,3000,null,108000,7);
INSERT INTO Policy_Sub_Types values('6894','121212','Liability',3,3000,null,108000,7);
INSERT INTO Policy_Sub_Types values('6895','121212','Comprehensive',3,3000,null,108000,7);
INSERT INTO Policy_Sub_Types values('6896','131313','Flood',2,2500,null,60000,10);
INSERT INTO Policy_Sub_Types values('6897','131313','Earthquake',2,2500,null,60000,10);
INSERT INTO Policy_Sub_Types values('6898','131313','Homeowner',2,2500,null,60000,10);
INSERT INTO Policy_Sub_Types values('6899','141414','Natural Death',15,3000,null,540000,100);
INSERT INTO Policy_Sub_Types values('6900','141414','Accidental Death',15,3000,null,540000,100);
INSERT INTO Policy_Sub_Types values('6901','151515','Medical Emergenices',2,2500,null,60000,10);
INSERT INTO Policy_Sub_Types values('6902','151515','Trip Cancellation',2,2500,null,60000,10);
INSERT INTO Policy_Sub_Types values('6903','161616','Prescription Drugs',10,3000,null,360000,30);
INSERT INTO Policy_Sub_Types values('6904','161616','Wellness Care',10,3000,null,360000,30);


INSERT INTO user_policies values('593010',1234,'2013-3-26','6893');
INSERT INTO user_policies values('593011',1235,'2008-4-12','6894');
INSERT INTO user_policies values('593012',1236,'2020-6-5','6895');
INSERT INTO user_policies values('593013',1237,'2009-5-21','6896');
INSERT INTO user_policies values('593014',1238,'2015-12-5','6897');
INSERT INTO user_policies values('593015',1239,'2014-5-16','6898');
INSERT INTO user_policies values('593016',1240,'2012-7-30','6899');
INSERT INTO user_policies values('593017',1241,'2000-10-25','6900');
INSERT INTO user_policies values('593018',1242,'2001-4-17','6901');
INSERT INTO user_policies values('593019',1243,'2000-11-24','6902');
INSERT INTO user_policies values('593020',1244,'2004-1-22','6903');
INSERT INTO user_policies values('593021',1245,'2014-4-24','6904');
INSERT INTO user_policies values('593022',1246,'2000-5-7','6893');
INSERT INTO user_policies values('593023',1247,'2019-12-30','6894');
INSERT INTO user_policies values('593024',1248,'2013-4-21','6895');
INSERT INTO user_policies values('593025',1249,'2018-2-20','6896');
INSERT INTO user_policies values('593026',1250,'2001-5-12','6897');
INSERT INTO user_policies values('593027',1251,'2021-10-19','6898');
INSERT INTO user_policies values('593028',1252,'2002-2-16','6899');
INSERT INTO user_policies values('593029',1253,'2015-6-27','6900');


INSERT INTO policy_payments values(101,1234,'593010','2015-5-15',3000,null);
INSERT INTO policy_payments values(102,1235,'593011','2010-1-5',3000,null);
INSERT INTO policy_payments values(103,1236,'593012','2021-10-16',3000,null);
INSERT INTO policy_payments values(104,1237,'593013','2012-9-20',2500,null);
INSERT INTO policy_payments values(105,1238,'593014','2017-6-12',2500,null);
INSERT INTO policy_payments values(106,1239,'593015','2016-10-21',2500,null);
INSERT INTO policy_payments values(107,1240,'593016','2014-4-9',3000,null);
INSERT INTO policy_payments values(108,1241,'593017','2002-7-29',3000,null);
INSERT INTO policy_payments values(109,1242,'593018','2003-12-16',2500,null);
INSERT INTO policy_payments values(110,1243,'593019','2002-9-21',2500,null);
INSERT INTO policy_payments values(111,1244,'593020','2006-6-16',3000,null);
INSERT INTO policy_payments values(112,1245,'593021','2016-6-27',3000,null);
INSERT INTO policy_payments values(113,1246,'593022','2002-10-21',3000,null);
INSERT INTO policy_payments values(114,1247,'593023','2020-12-30',3000,null);
INSERT INTO policy_payments values(115,1248,'593024','2015-4-21',3000,null);
INSERT INTO policy_payments values(116,1249,'593025','2020-2-14',2500,null);
INSERT INTO policy_payments values(117,1250,'593026','2003-7-11',2500,null);
INSERT INTO policy_payments values(118,1251,'593027','2021-11-19',2500,null);
INSERT INTO policy_payments values(119,1252,'593028','2004-11-24',3000,null);
INSERT INTO policy_payments values(120,1253,'593029','2017-3-5',3000,null);



Select * from User_Details;
Select * from Address_Details;
Select * from Reference_Policy_Types;
Select * from policy_sub_types;
Select * from user_policies;
Select * from policy_payments;

