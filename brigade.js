const { events, Job } = require("brigadier");
events.on("push", () => {
    var job = new Job("buildfinal", "docker:dind");
    job.privileged = true;
    job.env = {
    "DOCKER_DRIVER": "overlay"
    }
    job.tasks = [
        "dockerd-entrypoint.sh &",
        "sleep 10",
        "cd /src",
        "ls -l",
        "docker ps"
        ];
    job.run();

});
