CREATE TABLE userAPI(
	id_user serial PRIMARY KEY NOT NULL,
	name varchar(20),
	lastName varchar(50),
	BirthDate date,
	nameUser varchar(30),
	email varchar(100),
	number varchar(30),
	biography varchar (150),
	password varchar(30) NOT NULL,
	isDeleted boolean,
	isInative boolean
);

CREATE TABLE post(
	id_post serial PRIMARY KEY NOT NULL,
	id_user int,
	description varchar(100),
	FOREIGN KEY (id_user) REFERENCES userAPI(id_user)
);

CREATE TABLE likePost(
	id_post int,
	id_user int,
	likeUser boolean,
	FOREIGN KEY (id_user) REFERENCES userAPI(id_user),
	FOREIGN KEY (id_post) REFERENCES post(id_post),
	PRIMARY KEY (id_post, id_user)
);

CREATE TABLE commentPost(
	id_comment serial PRIMARY KEY NOT NULL,
	id_post int,
	id_user int,
	contentComment varchar(150),
	FOREIGN KEY (id_user) REFERENCES userAPI(id_user),
	FOREIGN KEY (id_post) REFERENCES post(id_post)
);

CREATE TABLE portfolio(
	id_portfolio serial PRIMARY KEY NOT NULL,
	id_post int,
	id_user int,
	FOREIGN KEY (id_user) REFERENCES userAPI(id_user),
	FOREIGN KEY (id_post) REFERENCES post(id_post)
);

CREATE TABLE feedbackPortfolio (
	id_feedback serial PRIMARY KEY NOT NULL,
	id_user int,
	id_portfolio int,
	feedbackContent varchar (150),
	FOREIGN KEY (id_user) REFERENCES userAPI(id_user),
	FOREIGN KEY (id_portfolio) REFERENCES portfolio(id_portfolio)
);


