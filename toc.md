# Learn GraphQL

## Overall Flow

1. Intro
2. Architecture and Guiding Principals
3. Client
4. API/Server Side
5. Patterns and Best Pratices 

## Intro

1. Make a Query. Get Some Data
    _note_ stable endpoint, with a domain model that most people understand.

2. Explain just happened at a high level.
    * Show the schema ( voyager )
    * Show the type system
    * Define a Query
    
3. What is GraphQL
    * Overall
    * Open Source ( graphql.org )   
    * What things can you do with it?
        * Query
        * CRUD
        * Type System
        * Sockets

4. Why?
    - Why should we care now?
    
    - Where does this fit in your stack today?
        - Greenfield Development
        - Brownfield Development
            - wrapping disparet sources together
            - 
    - Pro's
        * Pushes your domain model closer to the wire... focus on the true business requirements..
        * Typed Schema, data validation
        * wrap rest endpoints as a unified domain model
        * Federated Services - Microservices 
        * Payload is decided by the client, not the server.. easily manage payload
        * Schema - Documentation.
        * (de)composition of calls. 
    
    - Con's
        * New(ish)
        * "Perf" overhead with things like schema validation.
        * Different. Lots of headspace in REST architecture, breaking old habbits and step outside and think different.
        * api's calling api's behind the graph.  
    
    _value??_ Why now? if 5 years old why is this hot now?
        * Could be maturity of tools
        * Could be maturity of content
        * Community support, adoption
    
5. what it is, and what it isn't
    * is
    * isn't  


_notes_
* IS IT JUST GRAPH, GRAPH + REST || **
* what things does graph allow you to do that you couldn't have done with something else.
* Does graph introduce new "issues/challenges". (solve one problem but introduce another)
* Socket Support
* are there tools to help you adopt?
* rest, jsonapi,
* authorization... 

1. History
    1. Soap and WSDL
    2. OData

5. Other technologies 
    1. Vs rest
    2. Vs grpc

2. How did this even come to be.
    - facebook - 2015, overnight success.
    - reference history story.


## Getting started with this course

* requirements
    * node ( 14 )
        ** can we do this without a bundler
        ** just overall node setup
    * browser

* usefull tools
    * insomina
    * iterm or your terminal of preference
    * editor of choice, we're using vscode



## Architecture and Guiding Principals

- Places
    - Websites
    - Tools ( quick overview )
    - playground

Overall Architecture
    4. Guiding Principals
    1. Type System
    2. Resolver Structure

- Architecture requirements

***Type System***

1. What is a schema?
    1. Why does it matter?
    2. What does it give you
2. Components of the Schema
    1. Base Types
    2. Custom Types
    3. Interfaces
    4. Input Types
    5. Unions
3. Schema Management
    1. Deprecation
    2. Usage
4. Directives
5. Custom Scalars
6. File Management

***Thinking in Schemas***

- Here is the place we need to describe how to


## Server Side

### Hello World

1. create the server 
2. define the schema
3. define the resolver to fufill the request
4. call it
    * playground

### Getting Setup

1. Tooling
2. Frameworks
3. Project Structure
    * folder, composition

### thinking in schemas

* Type system
* query language

### Resolvers

* Arguments
    1. Parent
    2. Args
    3. DataSources
    4. AST




1. Federation
2. Schema Stitching
3. Datasource managing
4. Hierarchical Resolvers
5. Field Resolvers

**Resolution and Fulfillment**


Mocking Data

Sockets

2. Hosting - The Server
3. Security, Authentication / Authorization
4. Packages
5. Middleware
6. Context
7. Error Management
8. Living alongside rest
9. DataLoaders
10. Logging and Tracing
11. Performance



## Client Side

### Getting Setup

1. Tooling
2. Frameworks
3. Project Structure
    * folder, composition


**Introspection**

- What can you do now that you have a schema and a type system

**Consumption**

1. Consuming
    1. Apollo Client
        1. network stack
        2. 
    2. Gqless
    3. Raw
    4. xState
2. Errors 
3. State

Sockets

1. Query language
2. Hosting - The Server
3. Security, Authentication / Authorization
4. Packages
5. Middleware
6. Context
7. Error Management
8. Living alongside rest
9. DataLoaders
10. Logging and Tracing
11. Performance