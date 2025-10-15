pipeline {
    agent any

    environment {
        PATH = "C:\\Program Files\\Git\\usr\\bin;C:\\Program Files\\Git\\bin;${env.PATH}"
    }

    stages {
        stage('Build and Push Docker image') {
            steps {
                script {
                    echo "Building Docker Image.."
                    def app = docker.build('gurekam22/gportfolio:latest')
                    withDockerRegistry(credentialsId: '816ad141-f5bd-4389-87b8-8ce8f3815101') {
                        app.push()
                    }
                }
            }
        }

        stage('Run Container (Test)') {
            steps {
                sh 'docker run -d -p 3000:80 --name test-portfolio gurekam22/gportfolio:latest'
            }
        }

        stage ('Launching ec2 instance') {
            steps {
                echo "Deploying container to ec2 instance"
                withCredentials([string(credentialsId: 'dockerhub-token', variable: 'DockerHubToken')]) {
                    sshagent(['ec2-instance']) {
                        bat ''' 
                            ssh -o StrictHostKeyChecking=no ubuntu@ec2-18-220-69-81 "
                            docker login -u gurekam22 -p ${DockerHubToken} &&
                            docker pull gurekam22/gportfolio:latest &&
                            docker stop test-portfolio || true &&
                            docker rm test-portfolio || true &&
                            docker run -d -p 80:80 --name test-portfolio gurekam22/gportfolio:latest
                            "
                        '''
                    }
                }
            }
        }
    }
}
