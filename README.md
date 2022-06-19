<h1 align="center" id="title">🤖kiwibots-api</h1>
Kiwibots-api is a backend API in charge of managing the deliveries and robots that we have in kiwibots helping us to solve the crud base options of them.

## Features
Here're some of the project's best features:
- ✅ Get all delivers that we have in kiwibots-api.
- ✅ Get a delivery by id.
- ✅ Get all bots by zone_id.


## The process

### Creation of architecture

The first step to work on this project was creating an architecure to be implemented, in wich I separate in two parts:
- The **clients's part** that will consume all the information of our solution.
- The **Services part** which is going to be divided in 3:
  - A **router API layer** that is goint to have all the routes available for our clientes.
  - A **services layer** to implement the bussines logic.
  - The **information persistence layer** the information in our system.

![Creation of architecture](/img/1-architecture.png)
### Identification of entities related to my solution
Once I decided how to work, I started to identify objects and attributes using one of the pillars of OOP which is abstraction, in which I can identy 4:
- Delivers
- Bots
- Users(clients)
- Zones

![Creation of architecture](/img/2.-entities-and-attributes.png)

**Why I put zones and user in this abstraction:**
I underestand that the product of kiwibots y working on USA and the work for universities in diferent zones, based on this premise I need a place to work all the zones in which the kibots are delivering a delicious pizza.

So I create my own abstraction of this documents adding the following attributes for **Zones**:
- **id**: uniquely identified
- **name**: name of the zona - for example if our kiwibots are goint to deliver a pizza to Dracula 🧛 in Pensilvania 🍕 I will protect my kiwibot with some 🧄in case he does not want to pay.
- **zone_code**: Based on the premis that all the zones in USA are separate by a number of zone I decided to store this  in the field zone_code, so mi kiwibots can be tracked not only by the name of the zone also by the number.


then I create an abstraction of the **user entity** adding the following a basic attributes wich allowme to register a user and login:

**Second assumption:** In out solution the user is going to be able to ask for a deliver, but not manage the creation of the bots, in that case we can separate this user int two users and administrators base on authentication process into the system.

- **id:** uniquely identified
- **full_name**: The user's name
- **username**: For a nickname personalized
- **email**: email Fields
- **password**: password field

### Interpretation of relationship between documents

![Creation of architecture](/img/3-relatioship-between-documents.png)

**Third assumption:** Base on the abstraction and the relationships I extended the deliveries entity from this to this.

```
{ 
	id: string
	creation_date: Date
	state: "pending" | "assigned" | "in_transit" | "delivered"
	pickup: {
		pickup_lat: number
		pickup_lon: number
	}

	dropoff: {
		dropoff_lat: number
		dropoff_lon: number
	}
	zone_id: string
}
```

Due to the challenge requires that bots can be added to the deliveries by adding the bot_id and can be tracked.

Also integrate the user_id (client_id) to complete the order and know at all times who was the person who placed the order.



## 🚀Getting Started


The application is built with this stack:
- [Firebase](https://firebase.google.com/) 
- [Nodejs](https://nodejs.org/es/)
- [Expres](https://expressjs.com/es/)
- [Firestore ](https://firebase.google.com/docs/firestore?hl=es-419)



## Installation Steps:
### Clone repository
1.- Clone the repository
2.- run `npm install` to generate node_modules

### 🧑‍💻 Database access configuration using the .env file
2. First, Create in the root folder of the project a file named `.env` 📂.
3. Now configure your `.env` with this environment variables with the local credentials of the project below. ⬇️.

```
DATABASE_URL=
```

## 🚀 Run the project

1.- Open the project and navigate to functions directory using your terminal.
2.- Add the serviceAccountKey,json file which has the credential for conection with firebase in the ` src`  and ` lib`  directories.
3.- run the command ` firebase serve`





