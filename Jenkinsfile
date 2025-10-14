pipeline {
    agent any

    stages {
        stage('Build and Push Docker image') {
            steps {
                script {
                    def app = docker.build('gportfolio:latest')
                    withDockerRegistry(credentialsId: '816ad141-f5bd-4389-87b8-8ce8f3815101') {
                        app.push()
                }
            }
        }
    }

        stage('Run Container (Test)') {
            steps {
                sh 'docker run -d -p 3000:80 --name test-portfolio gportfolio:latest'
            }
        }
    }
}
