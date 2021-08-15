# Content
- [UX Development](#UX-Development)
- [Documentation of final front end design](#Documentation-of-final-front-end-design)
- [Reasoned list of design choices](#Reasoned-list-of-design-choices)
- [Evidence of HCI evaluation process](#Evidence-of-HCI-evaluation-process)
- [Reference](#Reference)

# UX Development
### Webpage design framework

This product is a website for showing pet, then it needs a good looking display listing. As this site is a single page application then the functionality should be implemented via buttons on top of the navigation bar. All the functionality to be implemented should be based on the Swagger API.

There are several advantages to using a button to implement some functionality rather than a text box. Firstly, as a 'component', a button is more integral and secondly, a button is more visible than a text box, making it easier to attract the user's attention.

Moreover, it is good to leave a good area of blank space on either side of the display listing so as to reduce the user's visual fatigue.

### Paper prototype

* Showing list (Main page)

  ![paper-list](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/paper-list.jpeg)

  * Should show the logo and slogan of the page.
  * This page should have navigation bars.
  * This page should have functional buttons.
  * This page should have the showing list of pets.

* Add page

  ![paper-add](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/paper-add.jpeg)

  * Need petID.
  * Need petName.
  * Need buttons to confirm adding and delete adding.

* User information page

  ![paper-info](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/paper-info.jpeg)

  * Need to show userID.
  * Need to show the firstName and lastName of the user.
  * Need to show the email address of the user.
  * Need a button to go back to previous page.

* Pet showing card

  ![paper-card](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/paper-card.jpeg)

  * Need a button to star and delete a pet.
  * Need to show the icon of the pet.
  * Need some pet's tags.
  * Need to show petID and petName.
### UX design options
* Don't show drop-down menus on the page, and some modules that are hidden by default, but show them by clicking a button or mousing over an area.
* Pet's showing cards will enlarge on mouseover to attract the user's attention.
* The list displays a GIF while loading and lowers the brightness of the screen to indicate that the user is loading.
* A pop-up prompt is required when the list is loaded.
* A second confirmation of the user is required when doing add and delete operations, by means of a pop-up warning.


# Documentation of final front end design

### Prototype of the first version

Click **[here](https://csjm47.axshare.com)** for a preview of the first version of the prototype.

We used Axure to draw a prototype of the first version of our web page. According to the design principles, we started with a low-fidelity prototype, i.e. a prototype that has only completed the functional design for the time being and has not yet been coloured and made interactive. This prototype that does not yet support jumping between pages in this version, showing only the layout design and some details of the main pages. This prototype was shared using AxShare for Axure. 

The following are screenshots of our initial version of the prototype.

![prop1-start](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/prop1-start.png)

![prop1-list](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/prop1-list.png)

As can be seen here, the functions we have added, based on the list of functions and the structure diagram, are:

* Top navigation bar

  ![prop1-topbar](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/prop1-topbar.png)

  * Serach a pet or pets by ID.
  * Filter pets by tag.
  * Pet list sorting (ascending, descending).

* Side navigation bar

  ![prop1-sidebar](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/prop1-sidebar.png)

  * Go back to main page (showing list).
  * Pet store.
  * User information.

* Pet's showing card

  ![prop1-card](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/prop1-card.png)

  * Show the image of the pet.
  * Delete a pet.
  * Add new tag for pet.

* To accommodate the massive increase in mobile users in this day and age, we are also planning to use a responsive layout, which will allow the page to be used well against a range of different screen sizes for display. In simple terms this allows you to make your web pages look good on a variety of devices. This is important in the multi-screen era and has a positive effect. [3]
* Don't show drop-down menus on the page, and some modules that are hidden by default, but show them by clicking a button or mousing over an area.
* Pet's showing cards will enlarge on mouseover to attract the user's attention.
* The list displays a GIF while loading and lowers the brightness of the screen to indicate that the user is loading.
* A pop-up prompt is required when the list is loaded.
* A second confirmation of the user is required when doing add and delete operations, by means of a pop-up warning.

### Iteration of the prototype

Click **[here](https://ddvr37.axshare.com)** for a preview of the second version of the prototype.

Based on a summary of the results of the user interviews and questionnaires, and the results of the volunteers trying out the first version of the prototype, changes were made to the prototype and simple interactions were added, and the prototype supports page jumps.

The following is a screenshot of the preview after the iteration:

![rp2-start](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/rp2-start.png)
![rp2-list](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/rp2-list.png)
![rp2-add](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/rp2-add.png)
![rp2-store](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/rp2-store.png)
![rp2-info](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/rp2-info.png)

In the new prototype version, we have added the **reset list** feature that was rejected in the earlier design of the site, as we considered that once the user had updated the current list using the search function or the tag filter, the only way to go back to the original pet list was to reopen the site, so adding the reset feature and putting it as a button in the top navigation It would be a good feature to include reset as a button in the top navigation bar and to provide an icon that clearly represents its function.

The new prototype shows more details of the UI/UX design:

* The original pet's showing card for the pet's showing list used the first design in the paper prototype, but now, after discussion within the team, it has been decided to change to the second design.
* When the mouse is moved over a card in the pet’s showing list, the card will expand to its original size to alert the user; When the mouse is moved out of the area, the card reverts to its original size.
* The new prototype shows the logic for jumping between pages, with buttons that are clickable.

No other functional changes have been made in this iteration (except reset page button), but more on the UI layout:

* The side navigation bar has been removed and the functions of the side navigation bar have been moved to the top navigation bar as buttons.
* Adjusted the double-sided design of the top navigation bar to a single level.
* The tag filtering and sorting functions that were in the top navigation bar have been moved to the top of the pet's showing list.
* The user function in the side navigation bar has been moved to the user management pop-up menu.

### Comparison before and after iteration of key components
* Pet's showing card

  ![change-card](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/change-card.png)

  * WHY: This change is determined by scoring within the group
  * HOW: Moved pet image from top left to top centre of card; moved delete button down from top right; moved Name and ID from right of centre to bottom left

* Navigetor

  ![change-nav](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/change-nav.png)

  * WHY: The original two-tier navigation bar was designed to emulate the freeads website. During the iteration, we learned through questionnaires that the double navigation bar was functionally confusing for users.
  * HOW: The tag filter and sort button have been moved out of the topbar and placed in the top right corner of the showing list. The search module, where the input box and search icon were separate, has been redesigned so that the icon and search box are now one module.

# Reasoned list of design choices
### Design process

Deciding together on the product experience for users through a team meeting first, to gather team consensus and decide on the main features of the product at a higher level to avoid too many later iterative changes, which saves communication costs within the team. Using methods such as questionnaires and user interviews, user requirements are collected, then translated them into product requirements and implemented quickly using paper prototypes.

Once the product prototype were basically determined, wireframe prototypes were created using prototyping software, and then discussed within the group and set a new range of questionnaires and analyse the data. Finally, the newly collected data was used to iterate on the product, including the design of the interface, the product copy, and the rationalisation of the layout.

### Philosophy and principles of our design

The following are our team's philosophy and principles in product design. [1] Our team's approach to the entire product design process is based on the following principles.

* A website should be designed first and foremost with the user in mind, and when it comes to making decisions about product design, we need to learn to use empathy rather than relying solely on individual ideas and the opinions within the group. Good UX design is tailor-made for the user, whose opinions, wishes, preferences and needs are crucial to the product, so a lot of time and effort is invested in understanding the user during the initial stages of the project and during the iterative phase of the project. In this project, the programme for understanding the users was a questionnaire as well as user interviews.
* Products need to have a clear structured view of the product information and functionality. In a product, for example, if all the content was piled into one list or page, we would probably not be able to use the product, so we see that most apps and websites contain a lot of navigation and page structure to organise content in an orderly way according to its importance. The ultimate goal of the information architecture is to help users understand what they are looking at and to help them find the content they need to find.
* The consideration of scenarios for the use of a product is an important direction to think about. If there are no scenarios, then it is difficult for any design to be effective. So product design teams need to invest time at the start of a project to understand the problems faced by users and the context surrounding those problems. For example, when designing input boxes, input prompts are added to reduce the chance of user error.
* Consistency is a key principle of UX design. Products with a consistent design are more quickly accepted by new users because they can recall their previous habits when using similar apps and use these habits as a guide when using the new product, which is why there are many similar or even identical elements in the design of pages for the same type of product. This principle reminds us of the need to refer heavily to established products that already exist in the market during the product design phase.
* Giving the user the right amount of control is also an element of design that needs to be considered, giving the user 'customisable' functionality in the design of the product.
* Less is more. There is an MVP principle in product design - minimum viable product - and in the conventional way of development, the process of research, design, development and marketing can be a long one, and it is difficult for anyone to guarantee success. But when you take a different approach, you use MVP to conduct small prototype research, develop it quickly, reach out to customers and get feedback. The cost of trial and error is greatly reduced by continually modifying the prototype through feedback and iterating on the development. [2] This also embodies the spirit of Scrum.
* Good visual hierarchy helps guide users to achieve movement around the page and to understand the logical relationship between what they see and the rest of the content on the page. A tightly designed visual hierarchy and page layout design can go a long way to helping users digest the information they saw.
* Tell a story in your design, use multimedia elements to try and 'talk' to the user, evoke emotions and leave a lasting impression.
* Don't try to create high-fidelity prototypes from the outset in design. When the product is in its early versions, many features and layouts often require extensive changes, and spending a lot of time creating high-fidelity prototypes can be very detrimental to the team's development cycle.
* Focus on managing product requirements, starting with gathering requirements, creating a pool of requirements and keeping the pool updated as the project progresses.
* Understand the differences between various aspects of pc and web-based products, with a focus on cross-platform experience.
* Use the right tools or software to avoid all kinds of usability problems at the end of the line and to prevent product details from being under-represented or overlooked.

### Logo, slogan and name design

A good logo and name are important to showcase the qualities of the product and to attract the attention of the user, and the logo should reflect the theme of our product and the qualities of our team. This reflects our design philosophy of using multimedia elements to influence the user and to evoke emotions.

Here is our logo, where we have designed the logo together with the name of the site in the same image: 

![logo](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/logo.png)

As you can see from the image above, our website is called 'Aishang', which does not appear to be an English word, which is a little confusing, but in fact the 'word' means 'fall in love' in Chinese, and is written in Hanyu Pinyin. 

Our slogan is "love and peace", which corresponds to the name of the website we designed, and can be seen as an expression of the value our team believes pets bring to people's lives.

As our theme is "love and peace", the main colour of the logo is bright red, which represents passion and warmth, and the main body of the logo is a red heart with a silhouette of a dog inside, which reflects the actual function of our website -- pet showcase. 

### Analysis of existing products

We started with an analysis of the main pet buying routes in the UK and China. Studying how they function provides experience and establishes direction for our development.

* **[Pets4homes](https://www.pets4homes.co.uk/)** 

  pets4homes is the UK's most popular pet classifieds site.
  Users can search thousands of dogs, puppies, cats, kittens and other pets for sale and adoption, as well as post free pet ads for pet sellers.

  ![pet4home-page](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/pet4home-page.png)

  ![pets4home-struct](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/pets4home-struct.png)

  * The whole page of pets4home has a yellow theme and the logo is a cartoonish dog and cat head.
  * Topbar is relatively clean, has a switch to turn on sidebar, logo and name, account management
  * The top of the sidebar is a logo and the bottom is a list of categories of various products to guide the user quickly to what they need.
  * Below the topbar is a diagram of a puppy that is close to half the screen, with a search card to the left of the middle of the diagram, which allows user to search for the content them need by pet type, pet breed and location.
  * The other main part of the page is a list of pet's showing cards for various topics.
  * At the bottom are tools for pet ownership and some branded navigation boards.
  * The overall page is left blank on both sides in about a third of the visual area, giving the whole page a fresher look.
 
**[freeads](https://www.freeads.co.uk)**     

Founded in 2010, freeads is a UK classifieds and community website designed to connect buyers and sellers of second-hand furniture, household goods, gardening supplies, pets, cars, jobs and property. This site is used in over 50 UK cities.

![freeads-page](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/freeads1.png)

![freeads](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/freeads.png)

* The main design framework of freeads is similar to that of pets4home, with a topbar and sidebar, and the sidebar is hidden by default.
* The functions on topbar are sidebar switch, logo, login and registration, posting ads.
* The topbar has a special design, with a second level with a search function, and a navigator for different types of products.
* Then is the usual list of displays by different topics

[**Taobao**](https://world.taobao.com)

Taobao is the largest volume and most downloaded e-commerce software in China, and many Chinese people use Taobao when buying eligible pets online.

![taobao-page](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/taobao-page.png)

![taobao-structure](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/taobao-structure.png)

* Taobao's design logic is clearly different from the two platforms above, mainly in the design logic of navigator.
* In the above two sites, sidebar is essentially a logical extension of topbar, what taobao has done is to weaken the navigation function of sidebar and focus more on the product classification function of sidebar, confining it to a single module.
* Taobao's account features are more elaborate than the other two sites.
* In terms of list design, taobao is similar to the other two pages in that it shows products by different topics

### List of features and product structure diagram

We have compiled the following list of features:

| No.  | Title                      | Function description                                         |
| :--- | -------------------------- | ------------------------------------------------------------ |
| 1    | User's  account management | Log in and log on; Account cancellation                      |
| 2    | Sorting  display lists     | Sort the  cur list in ascending/descending order by ID       |
| 3    | Tag  filter                | Filtering  of the list display by tag                        |
| 4    | Add new tag                | Add a new tag on a pet on showing list                       |
| 5    | Icon for pet               | Allow  photos of pets to be uploaded, replace with initials of name if left blank |
| 6    | Delete a pet               | Delete a  pet in the list                                    |

By compiling a list of features and analysing commonly used e-commerce websites, our group obtained the following product structure diagram (drawn via XMind).

![struct img](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/struct%20img.png)

As you can see from the structure diagram above, the functional design of our products adheres to our design philosophy:

* Give users proper control: add pets, delete pets, account management, add tags.
* Stay consistent: search, tag filter, shopping cart.
* Using multimedia elements: adding photos to pet.

### What users can do on our webpage

Based on the structure of our app, here is how a user with admin rights would operate on our website (via Process On)

* Login/Register, open main page

  ![p-sign in](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/p-sign%20in.png)

* Add a new pet

  ![p-add pet](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/p-add%20pet.png)

* Delete a pet

  ![p-delete](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/p-delete.png)

### Typical user profiles

After analysing the subjects of the user interviews and the results of the interviews with them, we have come up with two typical user profiles for pet display pages.

* Jane, a university graduate, has just joined the workforce. She lives alone in a rented apartment in a foreign country, with a daily life of three points of contact: the office, the restaurant and the rented house. Her parents are thousands of miles away. Living alone, she desperately needs some psychological comfort and companionship, but is a little afraid of socialising. She pins her hopes on her pet.
* Alex, aged 30, has children in nursery school. In reading psychology books he discovered that having a pet is good for young children to develop their sense of responsibility and love. So he plans to choose a loving pet for her child.

### Design of UX copywriting

UX copywriting exists closest to where the user interacts with the product, playing the role of product guide, persuader and puzzler. It is like the air that covers the product experience, and like the glue that connects it. It is the most overlooked part of design, but it is also the most important and direct part. [4]

In this product, UX copywriting was not involved in many positions, but it was necessary to explore what kind of copy was appropriate, so we set up a group scoring model, where team members each gave appropriate UX copywriting and scored it within the group.

Based on the results of the scoring, we decided to keep the first version of the UX text for the search bar and the tag filter box, with the default prompt text for the search bar being "Search a pet here" and the default prompt text for the tag filter box being "Input tag here".

In the iteration we also added other UX prompt text:

* Reduce the brightness of the entire page when it loads and prompt 'loading'.
* Use 'Please input the tag' on the confirmation prompt for add tag.
* In the add pet feature, if user try to add a pet without entering a name, he will be prompted with 'Error, you must input pet name'.
* In the add pet feature, the message 'Success, you add pet named [xxx]' is displayed after successful addition.
* In the delete pet feature, inform user "Do you want to delete this pet id = [xxx]?"

# Evidence of HCI evaluation process

### Second survey questionnaire and user interviews

This is a feature satisfaction survey where users can rate their satisfaction with the features we have developed. The scores range from zero to one hundred. One hundred is the most satisfied and zero is the least satisfied. Also, because we have differentiated between features for buyers and sellers, we have also differentiated this in the questionnaire. The questions are for buyer, for both buyer and seller, for seller.

| For buyer                                                    | For seller                                                   | For both                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Users can find pets by name, such as doggie.[0(unwanted) to 100(wanted)] | Users can upload pictures to each pet on the website to provide more information for customers to choose. [0(unwanted) to 100(wanted)] | The basic features, login/logout. [0(unwanted) to 100(wanted)] |
| our website need adding a button reset which user can use it to return the home page. [0(unwanted) to 100(wanted)] | Owners can add pets or delete pets. [0(unwanted) to 100(wanted)] |                                                              |
| Filter the pet according to ID, we can sort in ascending and descending order. [0(unwanted) to 100(wanted)] |                                                              |                                                              |
| Enable our website can search for pets through tags. [0(unwanted) to 100(wanted)] |                                                              |                                                              |
| Users can use fuzzy search for finding favorite pets. [0(unwanted) to 100(wanted)] |                                                              |                                                              |

A total of 46 responses were collected for this questionnaire. Of these, 31 were from Buyer Experiencers and 15 points were from Seller Experiencers. The specific results and analysis are as follows.

For buyer:

| Features                                                     | Total score | Average score | Analysis                                                     |
| ------------------------------------------------------------ | ----------- | ------------- | ------------------------------------------------------------ |
| Users can find pets by name, such as doggie.                 | 2525        | 81.3          | The score is moderate and more than satisfactory. The friendliness of this feature relies more on the pet information uploaded by the seller. |
| our website need adding a button reset which user can use it to return the home page. | 2542        | 82            | This feature has also received a relatively high level of satisfaction. The improvement of this feature is based on the feedback from our user interviews. Also, based on the results of the questionnaire we can see that this improvement has been very successful. |
| Filter the pet according to ID, we can sort in ascending and descending order. | 2255        | 72.7          | In the results, satisfaction with this feature is low. We speculate that there may have been some confusion about the IDs, which caused users to be confused when searching. These IDs are largely dependent on the API in the request and we have removed the duplicate IDs, but there is still room for improvement in terms of user experience. |
| Enable our website can search for pets through tags.         | 2728        | 88            | This feature has the highest score. It is the feature that users are most satisfied with. As a seller, users can add tags to their pets to add information about them, including age, breed, etc. As a buyer, you can filter the selection of pets by searching for the tags you need. |
| Users can use fuzzy search for finding favorite pets.        | 2694        | 86.9          | Satisfaction with this feature was high, ranking second in the survey. Users expressed their love for this feature in their use. In the survey, it was found that fuzzy search is a must-have. This function will help users with a purpose, for example, a user who wants to find a husky can use this function to find it quickly. |

For seller:

| Features                                                     | Total score | Average score | Analysis                                                     |
| ------------------------------------------------------------ | ----------- | ------------- | ------------------------------------------------------------ |
| Users can upload pictures to each pet on the website to provide more information for customers to choose | 1285        | 85.7          | Satisfaction is high. From the seller's point of view, they want to attract the user's attention by uploading multiple photos of cute or cool pets. So they will score higher. |
| Owners can add pets or delete pets                           | 1292        | 86.1          | User surveys show that this is the most requested feature for sellers. It is also the most important basic feature of the seller's functionality. It allows sellers to manage their shop information. Generally speaking, we need to ensure the best possible user experience with this feature. |

For both seller and buyer:

| Features                  | Total score | Average score | Analysis                                                     |
| ------------------------- | ----------- | ------------- | ------------------------------------------------------------ |
| Log in, log out, Register | 3314        | 72            | The user login function is a must. However, the survey found that users were less concerned about this feature, probably because they are used to logging in and out of the site. Our analysis of the results showed that sellers were a little more satisfied with the login feature. We speculate that this is because they need the admin account more to make updates to their pet's information, including pictures and tags. Therefore, they would have scored higher. |

User feedback was completed by four members of our team, with secondary interviews done with some of the users from the previous interview. This was able to improve the efficiency and accuracy of the feedback based on an effective understanding of the website. The user feedback was free of personal and sensitive information and the feedback was as follows.

| User | Feedback                                                     |
| ---- | ------------------------------------------------------------ |
| 1    | The navigation bar looks very confusing.                     |
| 2    | It is difficult to search only by id and name, and hope that some other more user-friendly search methods can be added. |
| 3    | The overall look is fine and it is easy to use.              |
| 4    | Simple pages, I like this simple presentation best.          |
| 5    | You can only see the picture and name of the pet, which is less information. Would like to get some other information like breed or age etc. |
| 6    | Couldn't the filtering function be better, for example if I only wanted to see dogs or cats. There are even actually a lot of times when I will just go looking for information on Corgi and hopefully it will allow me to see Corgi straight away. |
| 7    | There is no way to return to the main page when adding pets and viewing the user info. |

Based on the feedback we have listed the current areas of improvement for the website.

* Change the layout of the navigation bar and redesign it.
* Optimize the fuzzy search feature.
* Optimise the tagging function to make it easier for sellers to add more additional information that is easy to find when tagging pets.
* Add buttons to some sub-pages to return to the main page.

### Scoring of pet showing card design

| Style                                         | Score |
| --------------------------------------------- | ----- |
| ![card-2](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/card-2.png) | 3     |
| ![card-1](https://github.com/Peng-1124/web-softwaretools-plain/blob/main/Figures/uiux/card-1.png) | 1     |

### Scoring of UX copywriting

* Search

  | Copywriting                | Score |
  | -------------------------- | ----- |
  | Search                     | 1     |
  | Search a pet here          | 2     |
  | Search a pet by ID or Name | 0     |
  | Click here to search a pet | 1     |

* Filter

  | Copywriting      | Score |
  | ---------------- | ----- |
  | (leave it blank) | 0     |
  | Filter           | 1     |
  | Search a tag     | 1     |
  | Input tag here   | 2     |



# Reference
[1]https://uxdesign.cc/focus-on-the-experience-the-interface-might-follow-ceb556ec2a4a

[2]https://www.zhihu.com/question/37254490

[3]http://www.woshipm.com/discuss/146663.html

[4]http://www.woshipm.com/pd/4951038.html
