# System Requirements
 - Java8 or later
 - Application will be run on the port 8080
 - This applicationn is using an embeded H2 database, so no database configuration required.

# How to Run

## Run with Binaries
To make it easy to run, I have included the packaged jar file insde the jar folder of the project.
Execute the following commands to start the application
```
java -jar petstore.jar
```
This will start the application which contain both Rest API and Front end web application, which can be accesses via the following URLs
 - Web Interface : http://localhost:8080/
 - Rest API EndPoint : http://localhost:8080/
 - Swagger UI : http://localhost:8080/swagger-ui.html
 - H2 Database Console : http://localhost:8080/h2       -- No Password required

## Run with Source

To compile package and start the application, Run the following command from the project directory
```
./mvnw spring-boot:run  
or
./mvnw.cmd spring-boot:run  
```
This will compile the source  and build the front end application and will start the service in following URLs

 - Web Interface : http://localhost:8080/
 - Rest API EndPoint : http://localhost:8080/
 - Swagger UI : http://localhost:8080/swagger-ui.html
 - H2 Database Console : http://localhost:8080/h2       -- No Password required

