const { spawnSync } = require('child_process');

function exec(serviceName, command){

  console.log(`Starting docker image for [${serviceName}]`);
  console.log(`Command: ${command}`);

  spawnSync(command, [], {

    shell: true,
    stdio: 'inherit'
  });
}

exec('MySQL', 'docker run --rm -d -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=library -p 3306:3306 --name mysql mysql:8.0.22');
