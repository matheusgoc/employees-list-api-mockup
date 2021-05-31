# Employees List API
_version: 1.0.0_

A sample of RESTful API WebService implementation with 
ExpressJS for a list of employees with their countries 
information retrieved from a third external party API

## Running

### `npm start`

The server will be available at [http://localhost:3000](http://localhost:3000)

## Stack

| Libraries                                                         | Versions    |
| ----------------------------------------------------------------- | ----------- |
| [ExpressJS](https://expressjs.com/)                               | ^4.17.1     |
| [TypeScript](https://www.typescriptlang.org/)                     | ^4.3.2      |
| [Axios](https://github.com/axios/axios)                           | ^0.21.1     |

## Proposal

### Perspective

The first version of this application demonstrates how to incorporate employees' data from multiple sources
including statical array of employees JSON object and its related country information from a third party API.
It has a room to be evolved to a large employee management systems including departments, roles, payroll and
much more. It also could aggregate other systems in the company such as the customers, inventories and so on.

This app has only one concrete endpoint named `/api/employess` that retrieves the list of employees with
the country data associated to each one. The process is to iterate over the employees' data from 
`data-sample.json` file and for each one make a request to the `restcountries.eu` API bringing and
placing the country data to the employee. It works that way, but there are at least three aspects 
to consider: 

- maintainability
- persistence 
- performance

### Improvements

As the project grows and gets more endpoints, it will be eventually hard to maintain by using _ExpressJS_ 
framework as the base only. Moreover, the data structure will need to be better organized in order to add 
a persistence abstraction layer. Taking the employees' endpoint as an example, one can note the use of the
polluted Self-invoking function for having the advantage of async/await methodology for asynchronous call.

Persistence will be indeed necessary. Therefore, another point to improve is the application structure. 
Thus, to scale in a more complex project and have persistence to database which will be indeed necessary, 
it should follow some architecture design patterns such as MVC and Dependency Injection. It should have 
also services and models layers to make the transactions between distinctly sources more concise.

The current version of this application doesn't cache the data. It is reasonable to not have cache capabilities
in case the app would have low demand perhaps running internally for a small company. However, if the application 
has a tendency to serve in large proportion, it is a fact to consider. For instance, the employees' endpoint 
performance could be augmented by caching the results of the countries API. It would make an extreme difference
on performance case there were hundreds of thousands access.

That said, this application should be refactored to have a more sophisticated architecture structure.
Thus, other libraries and frameworks should be introduced.

### Augmenting the Stack

The following technologies are some suggestions for making this application more prepared for a robust implementation:

#### NestJS
A powerful NodeJS framework based on ExpressJS that incorporates many design patterns architectural aspects
including MVC, DI, and modularization.

#### TypeORM
An Object-Relational Mapping approach that uses Active Record or Data Mapper to abstract the database persistence
into instances of objects.

#### Redis
A fast database cache based on in-memory structure for caching the data improving the memory

### Conclusion

For the propose of this basic implementation, the ExpressJS is more than enough to handle it. 
However, as this application grows to higher level, it will be hard to maintain and to keep
up with the performance. Therefore, a better architecture structure needs to be built. 
It could be made from straight using classes with TypeScript. But, instead of losing time and
effort building it over again, a better solution is to use some modern frameworks and libraries
that address the same such as NestJS and TypeORM. 



