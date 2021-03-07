import { exec } from 'child_process';

// go to folder and compile Javas
exec('cd src/functions && javac HelloWorld/Main.java', (error, stdout, stderr) => {
  if (error) {
      console.log(`error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
});

// create jar file
exec('cd src/functions && jar cfme ../../dist/Main.jar HelloWorld/Manifest.txt HelloWorld.Main HelloWorld/Main.class', (error, stdout, stderr) => {
  if (error) {
      console.log(`error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
  }
  console.log(`stdout: ${stdout}`);
});
