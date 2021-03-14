drop database if exists entrevistaTecnica;
create database entrevistaTecnica;
use entrevistaTecnica;

create table companyUser (
id bigint primary key auto_increment,
username varchar(250),
pwd varchar(250),
userRole varchar(250)
);

create table positions (
id bigint primary key auto_increment,
title varchar(250) not null,
dateCreation DATETIME,
descriptionPosition varchar(250)
);

create table candidate(
id bigint primary key auto_increment,
username varchar(250),
pwd varchar(250),
nameCandidate varchar(250),
surname varchar(250)
);

CREATE TABLE skill(
 id bigint primary key auto_increment,
 skillName varchar(255)
);

create table candidateSkill(
id bigint primary key auto_increment,
idCandidate bigint,
idSkill bigint,
notes varchar(250),
skillValue float,
foreign key(idCandidate)
references candidate(id)
on delete cascade
on update cascade,
foreign key (idSkill)
references skill(id)
on delete cascade
on update cascade
);

CREATE TABLE candidatePosition (
  id bigint auto_increment primary key,
  idCandidate bigint,
  idPosition bigint,
  registryDate datetime,
  testDate datetime,
  completionDate datetime,
  result float,
  foreign key(idCandidate) 
  references candidate(id)
  on delete cascade
  on update cascade,
  foreign key(idPosition) 
  references positions(id)
  on delete cascade
  on update cascade
);

-- dumping data
insert into positions (title, dateCreation, descriptionPosition)values('Programador Java Junior', now(), 'Puesto estable!!!');
insert into positions (title, dateCreation, descriptionPosition)values('Programador JavaScript Junior', now(), 'Puesto estable!!!');
insert into positions (title, dateCreation, descriptionPosition)values('Programador Java Mid', now(), 'Puesto estable!!!');
insert into positions (title, dateCreation, descriptionPosition)values('Programador Python Junior', now(), 'Puesto estable!!!');
insert into positions (title, dateCreation, descriptionPosition)values('Programador C# Junior', now(), 'Puesto INestable!!!');

INSERT INTO skill(skillName)VALUES('SQL');
INSERT INTO skill(skillName)VALUES('JAVA');
INSERT INTO skill(skillName)VALUES('PHP');
INSERT INTO skill(skillName)VALUES('HTML');
INSERT INTO skill(skillName)VALUES('CSS');

insert into companyUser(username, pwd, userRole) values('neo', '123asdasjd', 'expert');
insert into companyUser(username, pwd, userRole) values('trinity', '123ajsdasd', 'HR user');
insert into companyUser(username, pwd, userRole) values('morpheo', '123jjasdasd', 'expert');
insert into companyUser(username, pwd, userRole) values('agent smith', '123asdasjjd', 'expert');
insert into companyUser(username, pwd, userRole) values('architect', '123assddasd', 'HR user');

insert into candidate (username, pwd, nameCandidate, surname) values ("sisco", "589746", "Paco", "Casanova");
insert into candidate (username, pwd, nameCandidate, surname) values ("maricarmen", "45454ds", "Rogelio", "Valls");
insert into candidate (username, pwd, nameCandidate, surname) values ("slav", "545854", "Tom", "Monich");
insert into candidate (username, pwd, nameCandidate, surname) values ("jose", "589746", "Maria", "Jesus");
insert into candidate (username, pwd, nameCandidate, surname) values ("rintintin", "10550", "Pepe@", "Chateau");

insert into candidatePosition(idCandidate, idPosition, registryDate, testDate, completionDate, result) values(2, 1, now(), now(), now(), 9.4);
insert into candidatePosition(idCandidate, idPosition, registryDate, testDate, completionDate, result) values(2, 3, now(), now(), now(), 4.4);
insert into candidatePosition(idCandidate, idPosition, registryDate, testDate, completionDate, result) values(2, 2, now(), now(), now(), 4.4);
insert into candidatePosition(idCandidate, idPosition, registryDate, testDate, completionDate, result) values(1, 1, now(), now(), now(), 7.4);
insert into candidatePosition(idCandidate, idPosition, registryDate, testDate, completionDate, result) values(1, 4, now(), now(), now(), 8.4);

insert into candidateSkill(idCandidate, idSkill, notes, skillValue) values(2, 5, 'high skill', 7.7);
insert into candidateSkill(idCandidate, idSkill, notes, skillValue) values(4, 2, 'low skill', 4.7);
insert into candidateSkill(idCandidate, idSkill, notes, skillValue) values(2, 2, 'mid skill', 5.7);
insert into candidateSkill(idCandidate, idSkill, notes, skillValue) values(2, 3, 'over skill', 3.7);
insert into candidateSkill(idCandidate, idSkill, notes, skillValue) values(1, 2, 'no skill', 8.7);







