# Overall Course Flow

1. Intro
2. Architecture and Guiding Principals
3. API/Server Side
4. Client
5. Patterns and Best Pratices 

# What are we building ??? What is the backdrop?
    * that.us for august
    
    * we need a server that can
        * CRUD an open space
        * live updates on spaces
        * keep track of who is in what spaces
        * secure it
        * open api that people can build on.... schema is important here.
        * need a db... fauna here. 
    
    * we need a Client that will
        * page our results
        * cache client side
        * realtime feed of activities
        * can work with a state machine ( xstate ) we also have apollo client state

    * keep track of release cycles
        * apollo v3 
        * graphql just released 15?? where is that headed.

# Learn GraphQL graphql.help

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

    1. It's not the first to try this.... History
        1. Soap and WSDL
        2. OData

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

* what things does graph allow you to do that you couldn't have done with something else.
* Does graph introduce new "issues/challenges". (solve one problem but introduce another)

* rest, jsonapi,

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
    * IS IT JUST GRAPH, GRAPH + REST || **

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
        
x. schema IDs

2. Building our Schema
    _notes_ something that is actual real world.
        * Multiple Types
        * Hierarchical Types
        * Type Reuse
        * custom Scalars
        * query, mutations, field resolvers, 
        * directives

### Source Project Setup and Config
    1. Schema Management
        * Deprecation
        * Documentation
    2. File Management
        * schema composition and source control

### Packages ( really tied to the previous section )

### Hosting - The Server
    * How does this play along with something like express
    * somthing like apollo is middleware for a route

### Mocking our schema
    * Mocking Data
    * dynamic mocking

### Data Fulfillment, Resolvers
1. Arguments
    1. Parent
    2. Args
    3. DataSources
    4. AST
3. Datasource managing
4. Hierarchical Resolvers
5. Field Resolvers
6. HOC on a resolver

### Advanced Schema 
1. Federation
2. Schema Stitching
3. Hierarchical Types
    _note_ another section as it's harder to understand 
    * how can we take what we built and compose it a bit better for our end customer to understand ( end user of our api )

### Middleware
    * how does the http server ( express ) middleware play with a framework like apollo
    * what about middleware in apollo || or in a graphql server itself. 

### Living alongside ...rest
    * how to consume 3rd party Services
    * how to resurface 3rd party services 
    * how to have a rest endpoint live alongside our graph endpoint.

### GraphQL Request Lifecycle
    * context (User Request Context)
    * dataSources ( setup data sources for each resolver )
    * Lifecycle Plugins ( Apollo Only )
    * Error's (Apollo formatError)

    ** How can the http lifecycle ( req ) play nicely with the graphql req.
        ** thinking here along the lines of req data, being used by graph request.. something like a correlationID 
        ** res out.. thinking like an error id generated deep down in the stack, how could that make itself back on the respone headers

### 3rd party packages
    * how do we play along with 3rd party services
    * sentry.. what does using tool like that mean in this graph world.
        ** answering the q of.. do I have find a tool that supports graph, or can we use the giant eco system that we already have? 

### Serving Sockets
    * Different auth and setup
        * Lifecycle is different.
    * Resolver Arguments
    * Call Fulfillment
        * Resolve Data
        * ____ filter function ( who should it send too )
    * wss ( protocol ) requirments of hosting

### Security
    * how do you do Authentication
    * how do you do authorization
    * how do you build caller context
    * how do other services leverage that
    * JWT
    ** this is a bit different when were talking socket ( differet lifecycle )
    ** passport.js - how can we play with auth services
    ** interaction with 3rd party services... Auth0, Otka, etc

### "Logging"
    * Error Logging
        * processs.on ( * our bad stuff )
    * Graph Request Tracing
    * HTTP Request Tracing
    * APM Logging
    * Developer Logging
    * Monitoring
    * event emitter usage


### Performance
    * Promises - don't block the event loop.
    * importance of schema recursion and how dataLoaders can help us.
    * connection management on the server
    * best pratices around api server
        * cors
        * etag
        * express best pratices

### Databases
    * Fauna
    * simple db... sqlite, mongo, sommething simple..


### Testing
    * how can we test a resolver
    * how can we do some ete tests
    * how can we use mocking

### Schema Stitching
    * how to compose a larger schema micro schemas
    * services not designed to play together

### Federation
    * micro services who are designed to play together
    * `extends` extending the Types
    * cross service resolution/Fulfillment
    * @keys
    * @external how can I use/get data from my peer service?

### Schema Extensions
    * can we make our own?

### Deployment
    * versioning
    

## Client Side

### Getting Setup

1. Tooling
2. Frameworks
3. Project Structure
    * folder, composition

### Query language
    * Components of a query
        * aliased fields?
        * named queries
        * fragments
        * Arguments
        * variables
    * raw http request post
    * the id
    
    * playground

### Introspection
    * how can query the type system to do usefull stuff
    * What can you do now that you have a schema and a type system

### composing a query
    * simple query
    * named queries
    * query where we alias things
    * fragments ( reuse parts ) and why that's important
    * compound queries 
        * how can we do multiple things with one request.. shape the data to our own liking.
    * recursive query...   
        * good
        * bad 
        * and the stupid
    * query vs mutation
    * Arguments
    * Variables
    * meta fields, Unions etc.
    * enums 
    * @ client side directives
    * default values 

    _note_ 
        * note about federation and schema stiching. Scenario here is where maybe a service drops out but we get a result

    * Result Structure
        * how are things returned and why

### Error Handing
    * Collection of Errors
    * difference of a 200 with an error vs a 500/401
    * compound queries with partial results

### Tracing and Schema Extensions
    * Explore the built in tracing results.
    * what can we do with that?

### Connecting to Sockets
### caching / state management
### Persisted queries
### Polling 
### Refech results, forced refetch
### Mutation changes cached results
### Paging
    * fetch on more.

### link composition
    * passing along headers
    * link middleware
    * calling two different graphql services
    * link reconnects
    * Batching

### testing 
### mocking

### packages
1. Apollo Client
    1. network stack
    2. 
2. Gqless
3. Raw
4. xState

## Advanced Client
### SSR, get data from tree... ( react )

## notes, errr, what do we do with this??

* lodash like extension for graphql server side.

2. How did this even come to be.
    - facebook - 2015, overnight success.
    - reference history story.

API Run button
another option {
    postman
    apiary as another option
}