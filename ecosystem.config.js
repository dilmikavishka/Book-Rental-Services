module.exports = {
  apps : [
    {
      name: "cloud-sql-auth-proxy",
      script: "./cloud-sql-proxy",
      args: "project-c7ceb7ed-6723-4a8a-8f7:asia-southeast1:mysql-vm project-c7ceb7ed-6723-4a8a-8f7:asia-southeast1:postgres-vm --private-ip",
      log_file: "./logs/cloud-sql-proxy.log"
    },

    {
      name: "book-service",
      script: "java",
      args: "-jar books-service/target/books-service-0.0.1-SNAPSHOT.jar",
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