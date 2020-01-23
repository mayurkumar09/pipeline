const { events, Job } = require("brigadier");
events.on("push", (e, p) => {
    console.log("Received push for commit " + e.revision.commit)
    var greeting = new Job("job1", "alpine:latest");
    greeting.storage.enabled = true;
    greeting.tasks = [
    "echo Hello Pipeline",
    "cd /mnt/brigade/share",
    "echo insidde",
    "ls -l",
    "touch git.txt",
    "ls -l"
    ]
    
    // var docker = new Job("job2", "docker:dind");
    // docker.privileged = true;
    // docker.env = {
    // DOCKER_DRIVER: "overlay"
    // }
    // docker.tasks = [
    //     "dockerd-entrypoint.sh &",
    //     "sleep 10",
    //     "cd /src",
    //     "ls -l",
    //     "docker build -t mayursuccessive/image-processing:v1 .",
    //     "docker images"
    //     ];

 
    greeting.run();
    //docker.run();

});
