pipeline {
    agent any

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
                sshagent(['ec2-instance']) {
                    sh 'ssh -o StrictHostKeyChecking=no ubuntu@ec2-18-220-69-81.us-east-2.compute.amazonaws.com "echo hello"'
                    
                }
            }
        }
    }
}
