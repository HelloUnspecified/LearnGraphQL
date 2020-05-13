# Overall Course Flow

1. Intro
2. Architecture and Guiding Principals
3. API/Server Side
4. Client
5. Patterns and Best Pratices 

# What are we building ??? What is the backdrop?
    * 

# Learn GraphQL

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

## Getting started with this course

__notes__ 1 structure setup overall such that we can easily reference and update it later. how can we overlay hindsight later. Things learned that invalidate past thinking.

1. System Requirements
    * node ( 14 )
        ** __note__ can we do this without a bundler
        ** just overall node setup
    * browser
    * terminal
        * iterm or your terminal of preference
        * refernece other terminal setups and courses
    * maybe a db. _this db should be installed via `npm i`
    * editor of choice, we're using vscode
        * vscode plugins
    * supporting tools
        * insomnia, postman
            * __note__ build out a set of insomnia, workspaces, plugins
    * github

2a
    * create an automated setup for folks.
        * homebrew
        * https://chocolatey.org/
        * npx

3. Setup Client Side
    * Steps `npm i`
        ** are there npm globals
    * Work through what packages were installed and why
    * talk through the build pipeline __note__ not as important as the server side 
    * reference other development stacks and where to do the same.
        * node, rails, go, .net
        * vue, react, angular 

4. Server Side Setup
    * Steps `npm i`
        ** are there npm globals
    * Work through what packages were installed and why
    * build pipeline, deployment automation
    * reference other development stacks and where to do the same.
        * graphql server side 
            * rails, .net, go
    * brief reference to other frameworks

## Architecture and Guiding Principals

1. Hello World
    1. Create a simple server 
    2. define the a simple schema
    3. define the resolver to fufill the request
    4. call it
        * playground
        * insomnia
    5 this is not the way to structure your code.

2. Overall Architecture
    1. What are the overall pieces of a GraphQL application
        * query / mutation
        * type system
        * resolution
    __note__ pull open a whiteboard and draw out how things actually work.

3. teasing out the cabibilites of what we can do overall which we will cover later.
    * caching
    * Error Management
    * Middleware
    * versioning
    * Documentation

## Server Side

_note_ 
    Should we just teach things by walking the stack.. 
    Build out in the order they would end up executing.
    Maybe just start with an end to end test.

### Getting Setup

_note_ use the schema to drive out how we would structure our project, and work.

1. Tooling
2. Frameworks
3. Project Structure
    * folder, composition

### Thinking in Schemas ( abstract piece )
    _note_ 
        * this is where we want folks to really think about the domain.. the problem, **not the db**
        * think about Federation, Microservices, how can decompose and recompose our schema overall 

    * talk through what is a "query language" and why do we care.

    1. What is a schema?
        1. Why does it matter?
        2 what does it give us that we didn't have before
    
    * Can't we just do this with rest? 

2. Understanding the Type System
    1. Components of the Schema
        1. Base Types
            1. Built in Base Types
                * Input
                * Query
                * mutation
            2. Scalars
        2. Lists ( arrays )
        6. Enum
        3. Interfaces
        6. Arguments
        5. Unions
    
    Extending our schema
        1. Directives
            1. Deprecation
        2. Custom Scalars
        
2. Building our Schema
    _notes_ something that is actual real world.
        * Multiple Types
        * Hierarchical Types
        * Type Reuse
        * custom Scalars
        * query, mutations, field resolvers, 
        * directives

4. project management
    1. Schema Management
        * Deprecation
        * Documentation
    2. File Management
        * schema composition and source control

### Advanced Schema 
1. Federation
2. Schema Stitching
3. Hierarchical Types
    _note_ another section as it's harder to understand 
    * how can we take what we built and compose it a bit better for our end customer to understand ( end user of our api )

### Data Fulfillment, Resolvers
1. Arguments
    1. Parent
    2. Args
    3. DataSources
    4. AST
3. Datasource managing
4. Hierarchical Resolvers
5. Field Resolvers

### Mocking our schema
    * Mocking Data

5. Middleware


2. Hosting - The Server
3. Security, Authentication / Authorization
4. Packages
6. Context
7. Error Management
8. Living alongside rest
9. DataLoaders
10. Logging and Tracing
11. Performance
12. talk about dbs.....
    * simple db... sqlite, mongo, sommething simple..
13. Sockets

13. Testing.


## Client Side

### Getting Setup

__notes__ do we really want to split up our setups or just reference back to the main.

1. Tooling
2. Frameworks
3. Project Structure
    * folder, composition


**Introspection**

- What can you do now that you have a schema and a type system

**Consumption**
2. Components of a query
    * alia

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


## Moving to Production
    * How does deployment work
    * Monitoring
    * Logging
    ** _notes_
        * tie back to versioning.


## notes
* IS IT JUST GRAPH, GRAPH + REST || **
* what things does graph allow you to do that you couldn't have done with something else.
* Does graph introduce new "issues/challenges". (solve one problem but introduce another)
* Socket Support
* are there tools to help you adopt?
* rest, jsonapi,
* authorization... 
* lodash like extension for graphql server side.

1. History
    1. Soap and WSDL
    2. OData

5. Other technologies 
    1. Vs rest
    2. Vs grpc

2. How did this even come to be.
    - facebook - 2015, overnight success.
    - reference history story.

API Run button
another option {
    postman
    apiary as another option
}