module.exports = {
  apps : [
    {
      name: "book-service",
      script: "java",
      args: "-jar book-service/target/books-service-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/book-service.log",
      instances: 2
    },

    {
      name: "user-service",
      script: "java",
      args: "-jar user-service/target/user-service-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/user-service.log",
      instances: 2
    },

    {
      name: "rental-service",
      script: "java",
      args: "-jar rental-service/target/rental-service-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/rental-service.log",
      instances: 2
    }
  ]
}