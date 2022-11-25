pipeline {
    agent any
    
    stages {
           stage('Clone Repository'){
               steps{
                  git url:'https://github.com/guilhermebehs/cicd-crud', branch: 'main'
               }
           }
           stage('Build') {
                steps{
                   script{ 
                     docker.build("guilhermebehs/cicd-crud")
                   }
                }
            }
           
    }
}