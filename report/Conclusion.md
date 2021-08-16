# content
- [Summary](#Summary)
- [Analysis](#Analysis)
  - [Overview](#Overview)
  - [Detail](#Detail)
- [Reflection](#Reflection)
  - [Reflect on the working practices and team work](Reflect-on-the-working-practices-and-team-work)
  - [Feature work and to do list](#Feature-work-and-to-do-list)
  - [Person summary](#Person-summary)
  


# Summary

Before the start of the project, we did a background check and API testing so that we can use the API for development smoothly. So I want to summarize our overall project in the following aspects.

About user research. Before the whole project, we conducted user research and background investigation. Thus, through questionnaires, user interviews and similar product analysis, we get what users want, what we should do, how we should do and so on. At the end of each sprint, we will conduct a user survey. There are three ways of user research: questionnaire, user interview and competitive product analysis. They have their own advantages. The scope of the questionnaire is wide, but the information is relatively broad and not targeted. User interviews can get more accurate information through face-to-face communication with users, but due to the limited energy of team members, the scope of user interviews is not very large. Competitive product analysis can help us to effectively obtain the functions owned by other websites with similar functions and contribute to our development.

In terms of feature development, we choose to use Vue and element UI framework to write our front-end framework and page layout. Then use the Axios library. Axis is a promise based HTTP library that can be used in browsers and node.js. We first distinguish the possible and impossible functions, and then design our functions according to user needs. The main way we implement the function is to process the requested data, or send or request data using the API provided by swagger.io, so as to make our function run successfully. Of course, we will compile and test each function in advance, and test the function after the function is implemented. We will conduct independent test and integration test for each function.

As for the design of front-end interface, our design is oriented to our users from beginning to end. We interact with users all the time, so as to design a more humanized interface. Our design, from the navigation bar of the interface, to buttons, to page Jump, has a clear purpose in each step of the design. No redundant functions. Therefore, in the final user evaluation, it has been highly praised by a user.

For our three sprints, this is the best part that our team thinks we can do. The team members have a clear division of labor and the work of each team member is highly "transparent". Throughout the development process, frequent communication is maintained among team members. Every sprint is managed by Teams, Wechat, Miro, Monday and other software. Finally, we have strict regulations on the operation of our git repository, which not only ensures everyone's parallel development and code sharing, but also ensures that there will be no conflict.

# Analysis

## Overview

We believe that our team has been very successful in designing and writing pet sales websites. Because we can deliver a work that we think is very successful within the specified time. In this process, we successfully collected user requirements in different ways, and designed and completed a series of functions according to user requirements. Each function has been successfully tested and deployed, and finally tested the overall fluency of the website and the direct cooperation of functions. In addition, in terms of front-end design, our team members have done prototype iterations. Each iteration is based on the needs of users, and we have carefully considered the design of each component. All this is to give users a better experience. In addition, in terms of agile development practice, we have also done very well, assigning roles in strict accordance with the requirements of scrum, developing software according to user stories, and holding review meetings to evaluate the software. The collaborative work among team members is carried out in an orderly manner, and close communication has been maintained among team members. The management of GIT warehouse is the same. There is no problem that conflict cannot be handled once, and there is no need for version fallback. Therefore, in addition to face-to-face offline communication among team members, we believe that the work of the team is successful.

## Detail

### User requirement analysis

About getting the requirement of users, we have done a lot of work on it. I think our team has done a good job in this regard. We have obtained the user needs through three aspects of analysis. And we have records of almost every interview. The details are here.

a. [user questionnaire](https://github.com/Peng-1124/web-softwaretools-plain/tree/main/Questionnaire%20record)

b. [user interview details](https://github.com/Peng-1124/web-softwaretools-plain/tree/main/User%20interview%20record)

c. [similar product analysis](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/similar%20analysis/similar%20product%20analysis.md)

### Feature design and development

The main way for us to obtain possible features is through user research, competitive product analysis and team members' own design. From design to completion, we strictly abide by the principle of test driven development. In addition to the array de duplication and reset functions that the team found needed to be developed. All our functions are developed according to the requirements by segmenting user stories. Finally, all functions will be unit tested

### Front-end implementation

Weibang is mainly responsible for the front-end design and preparation of our group. He is a very complicated and careful man. Our group's UI interface ranges from components to page layout. The function of jumping from page to reset is proposed. He was involved. Include the final HCI evaluation. Although the front-end design process of our group is bumpy, with the joint efforts of the team members. We did a good job.

### Checklist

We also have a checklist to check our result. Check whether we success.

a. User requirement research 

b. API analysis

c. We need to focus on Scrum development module

d. We can use git well

e. We can follow the principle of test driven development

f. User feedback and unit testing will be done after each development

g. The team members strictly abide by the arrangement of the leader and attend the meeting on time.

### User feedback

Our group gets user feedback mainly through user interviews. Because we think this is more targeted, which can make us better understand the problems of the product and make corresponding modifications. In this regard, I think the only deficiency may be that the time is too tight, so we can't collect more user feedback. This is also one of the regrets of our group.

### Imperfections

One thing we have to mention here is that we are not perfect in the user login and registration function. Because our purpose is to distinguish the permissions of users and administrators, we don't do more work in password authentication. As long as the user name detected by our system is admin, we will log in to the administrator system. As users, our system can log in directly without detection. I believe that in the near future, when we have a more stable API, we will complete this deficiency.

# Reflection

## Reflect on the working practices and team work

For group practice. After receiving the task on the first day, our team analyzed the model we would adopt. After analysis, we think the agile development model is more suitable for our team. Because our cycle is short this time, the task of team development needs to meet all the requirements of users, so we need to actually interact with users. After obtaining user feedback, the product is iterated. Comparing Extreme Programming with scrum, we decided to adopt scrum development. We have three sprints in this development process. During sprint development, our team members strictly abide by Kanban information update rules and git submission rules. We have to say that Kanban helped us a lot in this development process, because with the help of Kanban, all the work of the team members is "transparent". Managers can clearly understand the work status of each member, such as the work being done, the work completed, the work that is difficult and needs the help of teammates, etc. In addition, the daily station meeting ensures frequent communication between team members. Developing in communication effectively avoids possible code refactoring problems. Finally, after each sprint, we will hold a sprint review meeting. The sprint review meeting is very important for each development, because at this meeting, we will evaluate our phased results and analyze user interviews and questionnaires. After evaluation and user feedback, we will get some valuable information, such as where our products need to be improved. We will put what we need to improve in the next sprint. Another point to mention is that we stated the strict git management scheme at the beginning of the project. Team members are in charge of branches and their own folders to avoid conflict. This management method is very helpful to us. This management method ensures that there is no conflict in the case of parallel development. This makes our development go very smoothly.

In short, we are in group practice. Strictly abide by git submission rules, Kanban update rules and test driven development rules. All the development is to realize the designed test through us. In this way, we can effectively avoid many problems during continuous integration and deployment in the future. This ensures that the result delivery of each sprint is available and feasible.

However, in addition to our effective practice of Scrum development model, we also encountered some problems. These problems are that our team members are located in the UK and China. We have to face the two problems of jet lag and covid-19 at the same time. Fortunately, frequent communication and Kanban information update have basically overcome these problems.

In general, we have a good combination of Kan and scrum in this development. The work on Git is also very organized.

## Feature work and to do list

a. In the future, if we can have more stable and rich APIs, we want to achieve the following skills.

b. We hope to apply more and more algorithms to it. For example, collaborative recommendation algorithm can give users a better experience.

c. Realize the order system, which can really realize the transaction and purchase of pets.

d. Implementation evaluation system

e. make the login/registration perfet



## Person summary

Weibang Tang

I was responsible for the UI/UX design in this project. In the design, our process was to discuss within the team, then design questionnaires and conduct user interviews with different people, and then use the results of the user interviews as a basis for iteration. I experienced a more complete project development in this project and applied the MVP principles in a practical way. We also actively held group meetings during the project and planned the team workflow using agile development ideas, which improved my sense of teamwork.



Richard Zhang

During the teamwork of about three weeks, I became more familiar with the skills I learned before, including agile development and various web frameworks, like Vue.js and Node.js. I am very grateful to Peng Gao for his efforts in group projects in the past few weeks. As a qualified leader, he made me understand the importance of group cooperation. Group cooperation is also the key content I learned in this project. In the future work and study, group cooperation is undoubtedly very important. This resit is an important opportunity for us to familiarize ourselves with the skills we learned in TB-2 again. The knowledge I learned in practice impressed me deeply. I am looking forward to using these skills again in the future. 



Hao Fu

In these short weeks, I fully realized my infinite power. In the last group work, I admit that I did not play my own ability and did not organize all the members of the group well. But this time, I would like to thank Peng Gao, Weibang Tang and Richard Zhang for giving me the motivation to study and move forward. In this process, I learned to take the evolution of users' needs as the core, and adopt an iterative and gradual approach to software development. This is an efficient method, which will benefit me all my life. At the same time, the team members are excellent, they have a lot of skills I have not mastered. When I could not solve the difficulties, they never despise me, but patiently help me to solve the doubts. It included a lot of product scheming and a quick way to record user interviews, which was a whole new skill THAT I didn't have before. I am very happy to have this group of friends. During those weeks, we had meetings, stayed up late, and iterated on versions. Every day brings something new. So much can be accomplished in such a short time! Bless you in the future on the road to go further and further.



Peng Gao

During this time, I gained a lot. My harvest is not only my personal improvement in ability, but also my mastery of various tools for group cooperation. Our group adopts agile development model to practice this project, which not only makes us better understand the content of science courses, but also makes us more like a duck to water in our work in the future. I believe that after this project. I will become more proficient in group writing in the future.

previous section->[Process](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/report/Process.md)
