# CD_MEAN_MongooseDashboard
Troy Center troycenter1@gmail.com July 2017
Coding Dojo MEAN Stack, MongoDB with Express and Mongoose.

<h3>Assignment: Mongoose Dashboard</h3>

<img src="http://s3.amazonaws.com/General_V88/boomyeah/company_209/chapter_2505/handouts/chapter2505_3049_mongeese.PNG" alt="Coding Dojo Assignment Image">

This exercise will allow you to utilize all 4 CRUD methods with Mongoose. In this exercise, you'll build an app which manages a pack of some kind of animal (think otter, rabbit, or owl). You need to be able to add a new animal, update it, and delete it. You should use the following routes to build this app:

<ul>
<li><strong>GET '/'</strong> Displays all of the mongooses.</li>
<li><strong>GET '/mongooses/:id'</strong> Displays information about one mongoose.</li>
<li><strong>GET '/mongooses/new'</strong> Displays a form for making a new mongoose.</li>
<li><strong>POST '/mongooses'</strong> Should be the action attribute for the form in the above route (<strong>GET '/mongooses/new'</strong>).</li>
<li><strong>GET '/mongooses/edit/:id'</strong> Should show a form to edit an existing mongoose.</li>
<li><strong>POST '/mongooses/:id'</strong> Should be the action attribute for the form in the above route (<strong>GET '/mongooses/edit/:id'</strong>).</li>
<li><strong>POST '/mongooses/destroy/:id'</strong> Should delete the mongoose from the database by ID.</li>
</ul>

Remember these routes are just examples, avoid using mongooses for your dashboard if you can!
