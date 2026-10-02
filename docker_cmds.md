Container Execution & Networking:-
// Creates and starts a new container from the specified image.
docker run <image_name>

// Runs the container in the background (detached mode) so it continues running without blocking your current terminal.
docker run -d <image_name>

// Maps a port on your local machine to a port inside the container. This is necessary to access web applications hosted inside the container via your local browser.
docker run -p <host_port>:<container_port> <image_name>

Monitoring & Lifecycle Management:-
// Displays a list of all currently running containers along with their IDs, status, and port mappings.
docker ps

// Displays all containers on your system, including those that have been stopped or exited.
docker ps -a

// Gracefully shuts down a running container. You only need to type the first few characters of the ID.
docker stop <container_id>

// Deletes a stopped container from your system to free up resources.
docker rm <container_id>

// Forcefully stops and removes a container that is currently running.
docker rm -f <container_id>

Interacting with Containers:-
// Opens an interactive terminal session inside a running container. This allows you to navigate its file system, install packages, or edit files just like a standard Linux machine.
docker exec -it <container_id> bash

// Transfers files between your local host machine and a container. You can copy files from the host to the container, or retrieve files from the container to the host.
docker cp <source> <destination>

Images & System Maintenance:-
// Lists all Docker images currently downloaded and available on your local machine.
docker images

// Saves the current state of a container as a brand new image. If you modify a container (e.g., install new software or create files), this command lets you save those changes permanently.
docker commit <container_id> <new_image_name>

// A cleanup command that deletes all stopped containers, dangling images, and unused networks to quickly free up disk space.
docker system prune