export const sampleText = `Problem Statement: User Feedback on UI with Pins
We have a simple web application running on your localhost:8080 that has a user interface (UI)
and a backend. We want to add a feature that allows users to give feedback on specific parts
of the UI by clicking on them. Here’s how it should work:
Features:
1. Click to Capture Location:
o Users should be able to click anywhere on the page to mark a specific location
(in terms of X and Y coordinates).
2. Feedback Form:
o After the user clicks on a location, a pop-up window (modal) should appear,
allowing the user to enter their feedback (as text).
3. Save Feedback:
o When the user submits their feedback, it should be saved in the backend
database, linked to the coordinates of the location they clicked.
4. Pins on the UI:
o After saving feedback, a small “Pin” should appear at the clicked location on
the page.
o The user should be able to click on any Pin to view or update the feedback associated
with that location.
5. Display Pins on Page Reload:
o When the page is reloaded, all saved Pins should reappear at their respective
Locations.
o Clicking on a Pin should display the feedback tied to that Pin.
Requirements:
Frontend:
● Use JavaScript or React to derive the click location and associate it with Pin.
● Use React components along with a UI library of your choice to come up with the
pop-up Pin UI.
● Demonstrate reusable and composable components, state management, iteration, and
routing of URLs to the right component.
Backend: Implement a simple API to store and retrieve feedback (Pin content) from a database.
The backend can be built using any technology you’re comfortable with.
Assumptions: You can make reasonable assumptions in case some details are ambiguous
Notes:
● Keep the code clean, readable and extensible. Document wherever necessary.
● Share your working code.
Please Note the Mandatory Expected outcome is:
The Demo of the functionality and not just a snippet of the code.`;
