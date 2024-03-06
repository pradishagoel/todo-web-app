pipeline {
    agent any // Use "any" as the agent type

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'main']], userRemoteConfigs: [[url: 'https://github.com/pradishagoel/todo-web-app.git']]])
            }
        }

        stage('Build') {
            steps {
                script {
                    powershell 'npm install'
                    powershell 'npm run build' // Adjust based on your build script
            }
        }
    }
        stage('Dockerize') {
            steps {
                script {
                    // Use Docker Desktop for Windows
                    powershell 'docker build -t todo-web-app .'
                }
            }
        }

        stage('Push to Registry') {
            steps {
                script {
                    powershell 'docker login -u pradishagoel -p Abcd@1234'
                    powershell 'docker tag todo-web-app:latest pradishagoel/todo-web-app:latest'
                    powershell 'docker push pradishagoel/todo-web-app:latest'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    powershell "docker pull pradishagoel/todo-web-app:latest"
                    powershell "docker run -d -p 8080:3000 pradishagoel/todo-web-app:latest"
                }
            }
        }
    }
}
