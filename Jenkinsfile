pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('gportfolio')
                }
            }
        }

        stage('Run Container (Test)') {
            steps {
                sh 'docker run -d -p 3000:80 --name test-portfolio gportfolio'
            }
        }
    }
}
