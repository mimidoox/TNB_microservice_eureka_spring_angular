FROM openjdk:17
WORKDIR /App

COPY /target/tnbauth-0.0.1-SNAPSHOT.jar .

# Expose port 8088
EXPOSE 8088

CMD ["java", "-jar" , "tnbauth-0.0.1-SNAPSHOT.jar"]