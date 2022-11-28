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
                     dockerapp = docker.build("guilhermebehs/cicd-crud:${env.BUILD_NUMBER}")
                   }
                }
            }
            
           stage('Push Image') {
                steps{
                   script{ 
                     docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        dockerapp.push("${env.BUILD_NUMBER}")
                        dockerapp.push("latest")
                    }
                   }
                }
            }
         
           stage('Deploy'){
              steps{
                  sshagent (credentials: ['pk']){
                        sh "ssh -oStrictHostKeyChecking=no ec2-user@ec2-3-143-243-68.us-east-2.compute.amazonaws.com 'bash deploy-new-container.sh ${env.BUILD_NUMBER}'"
                     }
              }
           } 
           
    }
}
