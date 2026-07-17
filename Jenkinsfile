pipeline {
    agent any

    environment {
        DOCKER_IMAGE     = 'vastraa-global-nextjs'
        IMAGE_TAG        = "${BUILD_NUMBER}"
        CONTAINER_NAME   = 'vastraa-global-nextjs-container'
        APP_PORT         = '7007'
        APP_DOMAIN       = 'https://vastraaglobal.com'

        HOST_UPLOADS     = '/home/vastraa/uploads'
        HOST_LOGS        = '/home/vastraa/logs'
        HOST_CONFIG      = '/home/vastraa/config'

        NEXT_PUBLIC_API_URL    = 'https://api.vastraaglobal.com/api'
        NEXT_PUBLIC_API_ORIGIN = 'https://api.vastraaglobal.com'
    }

    stages {

        stage('Resolve app directory') {
            steps {
                script {
                    def candidates = ['.', 'vastraa-global']
                    env.APP_DIR = ''

                    for (dir in candidates) {
                        def pkg = dir == '.' ? 'package.json' : "${dir}/package.json"
                        def dockerfile = dir == '.' ? 'Dockerfile' : "${dir}/Dockerfile"
                        if (fileExists(pkg) && fileExists(dockerfile)) {
                            env.APP_DIR = dir
                            break
                        }
                    }

                    if (!env.APP_DIR) {
                        error('Could not find package.json and Dockerfile together. Push Dockerfile to repo root or vastraa-global/.')
                    }

                    echo "Using app directory: ${env.APP_DIR}"
                }
            }
        }

        stage('Fetch Git LFS assets') {
            steps {
                dir("${env.APP_DIR}") {
                    sh '''
                    set -e
                    VIDEO="public/vastraa_home_banner.mp4"
                    MIN_BYTES=10000000

                    if [ -f "$VIDEO" ]; then
                      SIZE=$(wc -c < "$VIDEO" | tr -d " ")
                      if [ "$SIZE" -ge "$MIN_BYTES" ]; then
                        echo "Hero video already present ($SIZE bytes)"
                        exit 0
                      fi
                      echo "Hero video is $SIZE bytes (LFS pointer); fetching..."
                    else
                      echo "Hero video missing; fetching Git LFS..."
                    fi

                    if ! command -v git-lfs >/dev/null 2>&1; then
                      echo "git-lfs not found; installing..."
                      if command -v apt-get >/dev/null 2>&1; then
                        sudo apt-get update -qq && sudo apt-get install -y git-lfs || true
                      elif command -v apk >/dev/null 2>&1; then
                        sudo apk add --no-cache git-lfs || true
                      elif command -v yum >/dev/null 2>&1; then
                        sudo yum install -y git-lfs || true
                      fi
                    fi

                    if ! command -v git-lfs >/dev/null 2>&1; then
                      echo "Installing git-lfs to workspace (no sudo)..."
                      LFS_VERSION=3.7.1
                      LFS_DIR="$PWD/.git-lfs"
                      mkdir -p "$LFS_DIR"
                      curl -fsSL "https://github.com/git-lfs/git-lfs/releases/download/v${LFS_VERSION}/git-lfs-linux-amd64-v${LFS_VERSION}.tar.gz" \
                        | tar -xz -C "$LFS_DIR"
                      export PATH="$LFS_DIR/git-lfs-${LFS_VERSION}:$PATH"
                      git-lfs version
                    fi

                    if ! command -v git-lfs >/dev/null 2>&1; then
                      echo "ERROR: git-lfs is required but could not be installed"
                      exit 1
                    fi

                    ROOT=$(git rev-parse --show-toplevel)
                    git lfs install
                    git -C "$ROOT" lfs pull

                    SIZE=$(wc -c < "$VIDEO" | tr -d " ")
                    if [ "$SIZE" -lt "$MIN_BYTES" ]; then
                      echo "ERROR: $VIDEO is still $SIZE bytes after git lfs pull"
                      exit 1
                    fi
                    echo "Hero video ready ($SIZE bytes)"
                    '''
                }
            }
        }

        stage('Install Dependencies & Build Next.js') {
            steps {
                dir("${env.APP_DIR}") {
                    sh '''
                    export NEXT_PUBLIC_API_URL=https://api.vastraaglobal.com/api
                    export NEXT_PUBLIC_API_ORIGIN=https://api.vastraaglobal.com
                    npm ci
                    npm run build
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir("${env.APP_DIR}") {
                    sh '''
                    docker build \
                      --build-arg NEXT_PUBLIC_API_URL=https://api.vastraaglobal.com/api \
                      --build-arg NEXT_PUBLIC_API_ORIGIN=https://api.vastraaglobal.com \
                      -t $DOCKER_IMAGE:$IMAGE_TAG \
                      -t $DOCKER_IMAGE:latest .
                    '''
                }
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                echo "Freeing port $APP_PORT and removing old containers..."

                for NAME in "$CONTAINER_NAME" vastraa-frontend vastraa-global-nextjs-container; do
                  docker stop "$NAME" 2>/dev/null || true
                  docker rm -f "$NAME" 2>/dev/null || true
                done

                for CID in $(docker ps -q --filter "publish=$APP_PORT"); do
                  echo "Stopping container on port $APP_PORT: $CID"
                  docker stop "$CID" || true
                  docker rm -f "$CID" || true
                done

                docker rm -f "$CONTAINER_NAME" 2>/dev/null || true
                '''
            }
        }

        stage('Run New Container (with .env)') {
            steps {
                withCredentials([
                    file(credentialsId: 'vastraa-global-frontend-env', variable: 'ENV_FILE')
                ]) {
                    sh '''
                    docker run -d --name $CONTAINER_NAME \
                      --restart always \
                      --env-file $ENV_FILE \
                      -e PORT=$APP_PORT \
                      -e NEXT_PUBLIC_API_URL=https://api.vastraaglobal.com/api \
                      -e NEXT_PUBLIC_API_ORIGIN=https://api.vastraaglobal.com \
                      -p $APP_PORT:$APP_PORT \
                      -v $HOST_UPLOADS:/app/uploads \
                      -v $HOST_LOGS:/app/logs \
                      -v $HOST_CONFIG:/app/config \
                      $DOCKER_IMAGE:$IMAGE_TAG

                    sleep 3
                    if [ "$(docker inspect -f '{{.State.Running}}' $CONTAINER_NAME 2>/dev/null)" != "true" ]; then
                      echo "Container failed to start"
                      docker logs $CONTAINER_NAME || true
                      exit 1
                    fi
                    echo "Container running on port $APP_PORT"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "Deployment successful — ${APP_DOMAIN}"
        }
        failure {
            echo 'Frontend deployment failed. Check Jenkins logs.'
        }
    }
}
