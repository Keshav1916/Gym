pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = 'keshavmangal/gym' // Replace with your Docker Hub repo
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'          // Jenkins credentials ID for Docker Hub
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Checkout the Git repository
                git branch: 'master', url: 'https://github.com/Keshav1916/Gym.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build the Docker image from Dockerfile
                script {
                    docker.build("${DOCKER_HUB_REPO}:latest")
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    // Login to Docker Hub using Jenkins credentials
                    docker.withRegistry('https://registry.hub.docker.com', "${DOCKER_CREDENTIALS_ID}") {
                        echo 'Logged into Docker Hub'
                    }
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', "${DOCKER_CREDENTIALS_ID}") {
                        def app = docker.image("${DOCKER_HUB_REPO}:latest")
                        app.push() // Push the image to Docker Hub
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
