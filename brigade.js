const { events, Job } = require("brigadier");
events.on("push", () => {
    
    var greeting = new Job("job1", "alpine:latest")
    greeting.tasks = [
    "echo Hello Pipeline"
    ]
    
    var docker = new Job("job2", "docker:dind");
    docker.privileged = true;
    docker.env = {
    DOCKER_DRIVER: "overlay"
    }
    docker.tasks = [
        "dockerd-entrypoint.sh &",
        "sleep 10",
        "cd /src",
        "ls -l",
        "docker build -t mayursuccessive/image-processing:v1",
        "docker images"
        ];
    
    greeting.run();
    docker.run();

});
