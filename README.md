# petstore
Petstore

System requirement
Java8 or later
Application will be running on the port 8080
This applicationn is using a embeded H2 database, so no database configuration required

Running the App with  binaries,

To make this application run easily, i have included the packaged petstore.jar file insde the jar folder under the root direcotry, To run thi jar

Change the directory to 'jar' directory
Run the command
    java -jar petstore.jar
This will start thee already packaged application which contain both Rest API and Front end web application

Web Interface : http://localhost:8080/
Rest API EndPoint : http://localhost:8080/
Swagger UI : http://198.148.118.156:8080/swagger-ui.html
H2 Database Console : http://localhost:8080/h2       -- No Password required
# System Requirements
 - Java8 or later
 - Application will be run on the port 8080
 - This applicationn is using an embeded H2 database, so no database configuration required.

# How to Run

## Run with Binaries
To make it easy to run, I have included the packaged jar file insde the jar folder of the project
execute the following commands to start the application
```
java -jar petstore.jar
```
This will start the application which contain both Rest API and Front end web application, which can be accesses via the following URLs
 - Web Interface : http://localhost:8080/
 - Rest API EndPoint : http://localhost:8080/
 - Swagger UI : http://198.148.118.156:8080/swagger-ui.html
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
 - Swagger UI : http://198.148.118.156:8080/swagger-ui.html
 - H2 Database Console : http://localhost:8080/h2       -- No Password required

