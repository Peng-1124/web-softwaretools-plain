 ![image](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/github.png)
# git branch structure

* This repo consists of 4 branches: main, develop, data, pm
* The original files for the main branch were forked from forked from [allisonh328/web-softwaretools-plain](https://github.com/allisonh328/web-softwaretools-plain)
* The develop branch contains all the development code and other resources used for development
* The pm branch includes product design, ui/ux/ued design, interaction notes and other product design achievements
* The data branch contains the questionnaires or other research documents used in the design phase of the web app, as well as their corresponding data and analysis files

# file structure

* The three branches of the git repo correspond to three different types of work, and there will be members of the group working on the same work, so everyone needs to have their own workspace in the branch they're working on, sync their work to their workspace, and not edit any files outside of their workspace

# git management

* Each team member is only responsible for their own part of the corresponding branch and workspace, use `git pull` before each work, and no changes to any content of other branches

* Each time a group member makes a file update, they need to `git push` to the branch they are responsible for in the remote repository, with the following `git commit` suggestions

  ```
  // New files/folders added:
  new {file path}
  
  // Change files/folders: 
  fix {file path}
  
  // Delete files/folders: 
  delete {file path}
  
  // The root directory of the file is: 
  Peng-1124/web-softwaretools-plain
  ```

* If there is a version conflict, Peng Gao will perform a version fallback operation and organize other members to repush

* Before each group meeting, Peng Gao will **merge** all the current branches into the main branch, and the rest of the group will **pull** the updated repo and switch to their own branch before starting work again
