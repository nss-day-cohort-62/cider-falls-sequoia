
DESTINATIONS //

There are six major destinations in the park. This application will display information about the park areas, their services, and about the guests. We will only track first and last name for each guest.

In the northeast section, there is the Chamfort River that supports rafting, canoeing, and fishing.
In the northern section, there is the Lost Wolf Hiking Trail that supports hiking, picnicking, and rock climbing.
In the northwest section, the main attraction is the Lodge, but there is also a hotel, and a restaurant. This area supports lodging, parking, information, and picnicking.
In the southwest section, there is the Gander River, which is a natural preserve, so it only supports fishing and hiking.
In the southern section, the main attraction is the Campgrounds. Ther eis also the office park, and children play areas. This area supports information, lodging, and parking.
In the southeast section, there is the Pine Bluffs Trails, a vast network of trails for all levels of hikers. On the beginner trail, there are food vendors. This area support hiking, picnicking, and zip lines.
Each section should have a title (e.g. Lost Wolf Hiking Trail).
Each section should display the services is supports (e.g. hiking).

The names of all current park guests should be listed in the main content area of the page, and right aligned.

When the title of any area is clicked, the current number of park guests in that area should be displayed.

The park administrator has a new feature request. Right above the park area grid, she would like all of the services that the park provides listed. When a park guest clicks on one of the services, a message should be displayed show which park areas support that service.





ALGORITHMS //


What are the main resources (i.e. tables)? Design your ERD first.
What are the properties of each resource?
What is the relationship between the resources? If it's many-to-many, what additional data must you design in your ERD?
Which modules should you create?
What is the responsibility of each module?
What functions should be in which modules?
What is the responsibility of each function?
What should each function return?
What is the spcific algorithm for each function? Does the function need parameters? Should it return something?



1. Create database module, an object with 4 arrays: Park Areas, Guests, Services, Park Area Service. 
    Properties for Park Areas: id, title, extras
    Properties for Guests: id, firstName, lastName, parkAreaId
    Properties for Services: id, name
    Properties for Park Area Service: id, serviceId, parkAreaId
2. At bottom of database module, create and export functions that return individual arrays in database object.
3. Create Guest module. Import database function that returns guest array. Create function that iterates through the guest array and returns an HTML string.
4. Create Park Area module. Import database function that returns Park Area array. Create function that iterates through the array and returns an HTML string with the park area object id property as the id attribute in an html tag.
