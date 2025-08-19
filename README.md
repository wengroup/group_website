# Group Website

Source code of the Wen Group Website.

## Add your profile

If you've just joined the group, follow the below steps to add your profile.
For steps 1 and 3, see the Dev Tools section in the [Group Manual](https://wengroup.github.io/group_manual/index.html) for instructions.

### 1. Fork this repo

### 2. Add you info

- In your fork, navigate to the corresponding folder in [content_data/people](./src/content_data/people/).

- Add your headshot image. Preferably, a 2 by 2 inches image with a PPI larger than 200.

- Create a Markdown file with the below contents:

  ```markdown
  ---
  name: <your name>
  Email: <your email>
  photo: <path to your headshot image>
  date: <yyyy-mm-dd> # when you added this file
  description: <A brief introduction of yourself>
  ---
  ```

  See existing files for examples.

  ## Add publications

- Navigate to the corresponding folder in [content_data/paper.bib](./src/content_data/paper.bib/).
- Add the new paper following the existing format.

### 3. Make a pull request
