pipeline {
    agent {
        docker {
            image 'node:14'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                    sh 'npm run build' // Adjust based on your build script
                }
            }
        }

        stage('Dockerize') {
            steps {
                script {
                    sh 'docker build -t todo-web-app .'
                }
            }
        }

        stage('Push to Registry') {
            steps {
                script {
                    sh 'docker login -u your-docker-username -p your-docker-password your-docker-registry'
                    sh 'docker tag todo-web-app:latest your-docker-registry/todo-web-app:latest'
                    sh 'docker push your-docker-registry/todo-web-app:latest'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'ssh your-server "docker pull your-docker-registry/todo-web-app:latest && docker run -d -p 80:3000 your-docker-registry/todo-web-app:latest"'
                }
            }
        }
    }
}

