FROM openjdk:17
WORKDIR /App

COPY /target/tnb-0.0.1-SNAPSHOT.jar .

# Expose port 8089
EXPOSE 8089

CMD ["java", "-jar" , "tnb-0.0.1-SNAPSHOT.jar"]